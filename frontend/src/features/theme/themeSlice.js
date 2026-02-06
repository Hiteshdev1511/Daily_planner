import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    theme: localStorage.getItem("theme") || "light"
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
            localStorage.setItem("theme", state.theme);
        }
    }
})

export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer