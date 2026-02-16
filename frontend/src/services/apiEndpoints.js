import api from "./api";

export const authAPI = {
  register: (payload) => api.post("/auth/register", payload),
  login: (payload) => api.post("/auth/login", payload),
  logout: () => api.post("/auth/logout"),
  changePassword: (payload) => api.post("/auth/change-password", payload),
  forgotPassword: (payload) => api.post("/auth/forgot-password", payload),
  resetPassword: (payload) => api.post("/auth/reset-password", payload),
  refreshToken: () => api.post("/auth/refresh-token"),
  checkUsernameUnique: (payload) =>
    api.get(`/auth/check-username?username=${payload}`),
};

export const userAPI = {
  getCurrentUser: () => api.get("/users/me"),
  updateProfile: (data) => api.put("/users/profile", data),
};

export const projectAPI = {
  getProjects: () => api.get("/projects"),
  createProject: (data) => api.post("/projects", data),
  deleteProject: (projectId) => api.delete(`/projects/${projectId}`),
};

export const todoAPI = {
  getTodos: () => api.get(`/todos`),
  createTodo: (projectId, data) => api.post(`/todos/${projectId}`, data),
  updateTodo: (todoId, data) => api.patch(`/todos/${todoId}`, data),
  completeTodo: (todoId) => api.patch(`todos/${todoId}/complete`),
  changeDeadline: (todoId, deadline) =>
    api.patch(`/todos/${todoId}/deadline`, { deadline }),
  deleteTodo: (todoId) => api.delete(`/todos/${todoId}`),
};

export const collaboratorAPI = {
  getCollaborators: (projectId) => api.get(`/projects/${projectId}`),
  addCollaborator: (projectId, data) =>
    api.post(`/projects/${projectId}`, data),
  updateCollaboratorRole: (projectId, collaboratorId, role) =>
    api.patch(`/projects/${projectId}/${collaboratorId}`, {
      role,
    }),
  removeCollaborator: (projectId, collaboratorId) =>
    api.delete(`/projects/${projectId}/${collaboratorId}`),
};
