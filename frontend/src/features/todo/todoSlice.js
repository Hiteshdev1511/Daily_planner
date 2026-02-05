import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { todoAPI } from "../../services/apiEndpoints";

const initialState = {
  todos: [],
  status: "idle",
  error: null,
};

// Async Thunks
export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async (projectId, { rejectWithValue }) => {
    try {
      const response = await todoAPI.getTodos(projectId);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch todos"
      );
    }
  }
);

export const addTodo = createAsyncThunk(
  "todo/addTodo",
  async ({ projectId, data }, { rejectWithValue }) => {
    try {
      const response = await todoAPI.createTodo(projectId, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add todo"
      );
    }
  }
);

export const toggleTodo = createAsyncThunk(
  "todo/toggleTodo",
  async ({ projectId, todoId }, { rejectWithValue }) => {
    try {
      const response = await todoAPI.toggleTodo(projectId, todoId);
      return response.data; // Should return updated todo or success message
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to toggle todo"
      );
    }
  }
);

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async ({ projectId, todoId }, { rejectWithValue }) => {
    try {
      await todoAPI.deleteTodo(projectId, todoId);
      return todoId; // Return ID to remove from state locally
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete todo"
      );
    }
  }
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchTodos
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // addTodo
      .addCase(addTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      // toggleTodo
      .addCase(toggleTodo.fulfilled, (state, action) => {
        // Assuming action.payload is the updated todo or we need to find and toggle locally
        // Optimistic update might be better, but let's assume implementation returns updated obj
        const index = state.todos.findIndex(
          (todo) => todo._id === action.payload._id // Assuming _id from Mongoose
        );
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      // deleteTodo
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo._id !== action.payload);
      });
  },
});

export default todoSlice.reducer;
