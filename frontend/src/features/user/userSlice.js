import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  username: "hitesh",
  email: "hites@task.com",
  fullName: "Hitesh Sharma",
  role: "admin",
};

// const initialState = {}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserName: () => {},
    logout: (state) => {
      state.id = null;
    },
  },
});

export const { getUserName, logout } = userSlice.actions;
export default userSlice.reducer;
