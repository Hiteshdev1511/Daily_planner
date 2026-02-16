import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { todoAPI } from "../../services/apiEndpoints";

const initialState = {
  todos: [],
  status: "idle",
  error: null,
};

// Async Thunks
export const fetchAllTodos = createAsyncThunk(
  "todo/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await todoAPI.getTodos();
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch todos",
      );
    }
  },
);

export const createTodo = createAsyncThunk(
  "todo/addTodo",
  async ({ projectId, data }, { rejectWithValue }) => {
    try {
      const response = await todoAPI.createTodo(projectId, data);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to add todo",
      );
    }
  },
);

export const editTodo = createAsyncThunk();

export const completeTodo = createAsyncThunk(
  "todo/toggleTodo",
  async ({ todoId }, { rejectWithValue }) => {
    try {
      const response = await todoAPI.completeTodo(todoId);
      return response.data.data; // Should return updated todo or success message
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to toggle todo",
      );
    }
  },
);

export const changeDeadline = createAsyncThunk();

export const deleteTodo = createAsyncThunk(
  "todo/deleteTodo",
  async ({ todoId }, { rejectWithValue }) => {
    try {
      await todoAPI.deleteTodo(todoId);
      return todoId; // Return ID to remove from state locally
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete todo",
      );
    }
  },
);

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchTodos
      .addCase(fetchAllTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchAllTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // addTodo
      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      // toggleTodo
      .addCase(completeTodo.fulfilled, (state, action) => {
        const index = state.todos.findIndex(
          (todo) =>
            todo.id === action.payload.id || todo.id === action.payload._id,
        );
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      // deleteTodo
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      });
  },
});

export default todoSlice.reducer;
