import { createSlice, current } from "@reduxjs/toolkit";

const initialState = [
  {
    prjId: 1,
    projectName: "hitesh",
    todos: [1, 2],
  },
  {
    prjId: 2,
    projectName: "jatin",
    todos: [3],
  },
  {
    prjId: 3,
    projectName: "vinay",
    todos: [1, 2, 3],
  },
];

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    addProject: (state, action) => {
      // const {projectId,id} = action.payload

      console.log(action.payload);
      const project = state.find(
        (proj) => proj.prjId === action.payload.projectId
      );
      project.todos.push(action.payload.id);
      // const project = state.find((val) => val.prjId === projectId)
      // console.log(project,"+",id)

      console.log(current(state));
    },
    addNewProject: (state, action) => {
      if (action.payload) {
        state.push(action.payload)
      }
    }
  },
});

export const { addProject, addNewProject } = projectSlice.actions;

export default projectSlice.reducer;
