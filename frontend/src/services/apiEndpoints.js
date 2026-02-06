import api from "./api";

export const authAPI = {
  register: (data) => api.post("/auth/register", data),
  login: (data) => api.post("/auth/login", data),
  logout: () => api.post("/auth/logout"),
  changePassword: (data) => api.post("/auth/change-password", data),
  forgotPassword: (email) => api.post("/auth/forgot-password", { email }),
  resetPassword: (token, newPassword) =>
    api.post("/auth/reset-password", { token, newPassword }),
  refreshToken: () => api.post("/auth/refresh-token"),
  checkUsernameUnique: (username) =>
    api.get(`/auth/check-username?username=${username}`),
};

export const userAPI = {
  getCurrentUser: () => api.get("/users/me"),
  updateProfile: (data) => api.put("/users/profile", data),
};

export const projectAPI = {
  getProjects: () => api.get("/projects"),
  getProject: (projectId) => api.get(`/projects/${projectId}`),
  createProject: (data) => api.post("/projects", data),
  updateProject: (projectId, data) => api.put(`/projects/${projectId}`, data),
  deleteProject: (projectId) => api.delete(`/projects/${projectId}`),
};

export const todoAPI = {
  getTodos: (projectId) => api.get(`/projects/${projectId}/todos`),
  getTodo: (projectId, todoId) =>
    api.get(`/projects/${projectId}/todos/${todoId}`),
  createTodo: (projectId, data) =>
    api.post(`/projects/${projectId}/todos`, data),
  updateTodo: (projectId, todoId, data) =>
    api.put(`/projects/${projectId}/todos/${todoId}`, data),
  toggleTodo: (projectId, todoId) =>
    api.patch(`/projects/${projectId}/todos/${todoId}/toggle`),
  changeDeadline: (projectId, todoId, deadline) =>
    api.patch(`/projects/${projectId}/todos/${todoId}/deadline`, { deadline }),
  deleteTodo: (projectId, todoId) =>
    api.delete(`/projects/${projectId}/todos/${todoId}`),
};

export const collaboratorAPI = {
  getCollaborators: (projectId) =>
    api.get(`/projects/${projectId}/collaborators`),
  addCollaborator: (projectId, data) =>
    api.post(`/projects/${projectId}/collaborators`, data),
  updateCollaboratorRole: (projectId, collaboratorId, role) =>
    api.patch(`/projects/${projectId}/collaborators/${collaboratorId}`, {
      role,
    }),
  removeCollaborator: (projectId, collaboratorId) =>
    api.delete(`/projects/${projectId}/collaborators/${collaboratorId}`),
};
