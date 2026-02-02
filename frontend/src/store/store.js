import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "../features/theme/themeSlice.js"
import todoReducer from "../features/todo/todoSlice.js"
import userReducer from "../features/user/userSlice.js"
import projectReducer from "../features/project/projectSlice.js"

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