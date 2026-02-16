import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../features/user/userSlice";

// Simple Mutex implementation to avoid external dependencies
class Mutex {
  constructor() {
    this._queue = [];
    this._locked = false;
  }

  isLocked() {
    return this._locked;
  }

  acquire() {
    return new Promise((resolve) => {
      this._queue.push(resolve);
      this._dispatch();
    });
  }

  release() {
    this._locked = false;
    this._dispatch();
  }

  _dispatch() {
    if (this._locked || this._queue.length === 0) {
      return;
    }
    const nextResolve = this._queue.shift();
    this._locked = true;
    nextResolve(() => this.release());
  }

  waitForUnlock() {
    if (!this._locked) return Promise.resolve();
    return new Promise((resolve) => {
      this.acquire().then((release) => {
        release();
        resolve();
      });
    });
  }
}

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL || "http://localhost:8000/api/v1",
  prepareHeaders: (headers) => {
    return headers;
  },
  credentials: "include", // Always send cookies (httpOnly)
});

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  // Wait for any existing refresh to finish first
  await mutex.waitForUnlock();

  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      try {
        // Double check if we still need to refresh (race condition prevention)
        // For now, we assume if we got the lock on a 401, we should refresh.
        
        const refreshResult = await baseQuery(
          { url: "/auth/refresh-token", method: "POST" },
          api,
          extraOptions
        );

        if (refreshResult.data) {
          // Retry the initial query
          result = await baseQuery(args, api, extraOptions);
        } else {
          // Refresh failed, log out
          api.dispatch(logout());
        }
      } finally {
        release();
      }
    } else {
      // If locked, wait for the other refresh to finish
      await mutex.waitForUnlock();
      // Retry original request
      result = await baseQuery(args, api, extraOptions);
    }
  }
  return result;
};
