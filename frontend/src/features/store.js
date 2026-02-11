import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "./theme/themeSlice.js"
import todoReducer from "./todo/todoSlice.js"
import userReducer from "./user/userSlice.js"
import projectReducer from "./project/projectSlice.js"

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        todo: todoReducer,
        user: userReducer,
        project:projectReducer
    }
})

/*

moon-btn -> changeTheme -> DarkTheme render

*/