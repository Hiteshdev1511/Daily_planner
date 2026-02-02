import { createSlice,current } from "@reduxjs/toolkit";
// import { isCSSRequest } from "vite";

const initialState = [
  {
    id: 1,
    title: "Task 1",
    description: "This is task 1",
    time: "today",
    priority: 1,
    isCompleted: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is task 2",
    time: "tommorow",
    priority: 1,
    isCompleted: true,
  },
  {
    id: 3,
    title: "Task 3",
    description: "This is task 3",
    time: "today",
    priority: 1,
    isCompleted: false,
  },
  {
    id: 4,
    title: "Task 4",
    description: "This is task 4",
    time: "tommorow",
    priority: 1,
    isCompleted: false,
  },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let count = 1;
      console.log(`Function called ${count++} times`)
      let id = 5;
      const element = action.payload;
      element.id = id++
      state.push(element);
      console.log(current(state))
    },
    completeTodo: (state, action) => {
      const element = state.find((todo) => todo.id === action.payload);
      element.isCompleted = true;
    },
  },
});

export const { addTodo, completeTodo, editTodo, deleteTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
