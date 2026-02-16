import { apiSlice } from "../../api/apiSlice";
import { setUser, logout as logOutAction } from "../user/userSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.data.user));
        } catch (err) {
          // login failed
        }
      },
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(logOutAction());
          dispatch(apiSlice.util.resetApiState());
        } catch (err) {
          // logout failed
        }
      },
    }),
    refresh: builder.mutation({
      query: () => ({
        url: "/auth/refresh-token",
        method: "POST",
      }),
    }),
    getCurrentUser: builder.query({
      query: () => "/users/me",
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.data));
        } catch (err) {
           // fetch failed
        }
      },
    }),
    register: builder.mutation({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.data.user));
        } catch (err) {
          // register failed
        }
      },
    }),
    checkUsernameUnique: builder.query({
      query: (username) => `/auth/check-username?username=${username}`,
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useRefreshMutation,
  useGetCurrentUserQuery,
  useRegisterMutation,
  useLazyCheckUsernameUniqueQuery,
} = authApiSlice;
