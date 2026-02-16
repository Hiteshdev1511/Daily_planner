import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice.js";
import todoReducer from "./todo/todoSlice.js";
import userReducer from "./user/userSlice.js";
import projectReducer from "./project/projectSlice.js";
import { apiSlice } from "../api/apiSlice.js";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    theme: themeReducer,
    todo: todoReducer,
    user: userReducer,
    project: projectReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

/*

moon-btn -> changeTheme -> DarkTheme render

*/