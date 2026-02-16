import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { projectAPI } from "../../services/apiEndpoints";

const initialState = {
  projects: [],
  status: "idle",
  error: null,
};

// Async Thunks
export const fetchProjects = createAsyncThunk(
  "project/fetchProjects",
  async (_, { rejectWithValue }) => {
    try {
      const response = await projectAPI.getProjects();
      return response.data.data; // Assuming data is the array
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch projects",
      );
    }
  },
);

export const createProject = createAsyncThunk(
  "project/createProject",
  async (projectData, { rejectWithValue }) => {
    try {
      const response = await projectAPI.createProject(projectData);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create project",
      );
    }
  },
);

export const deleteProject = createAsyncThunk();

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchProjects
      .addCase(fetchProjects.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.projects = action.payload; // Store the projects array directly
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      // createProject
      .addCase(createProject.fulfilled, (state, action) => {
        state.projects.push(action.payload);
      });
  },
});

export default projectSlice.reducer;
