/**
 * Describes how database entities relate to each other.
 * This file is DOCUMENTATION + TYPE SAFETY for DB joins.
 */

export interface UserRelations {
  person: "Person";
  todos: "Todo[]";
  ownedProjects: "Project[]";
  collaborations: "Collaborator[]";
}

export interface ProjectRelations {
  owner: "User";
  todos: "Todo[]";
  collaborators: "Collaborator[]";
}

export interface TodoRelations {
  project: "Project";
  creator: "User";
}

export interface CollaboratorRelations {
  user: "User";
  project: "Project";
}
