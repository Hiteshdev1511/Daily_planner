# API Documentation

## Base URL

```
https://api.example.com/api/v1
```

## Authentication

All protected endpoints require a JWT token in the `Authorization` header:

```
Authorization: Bearer <access_token>
```

## Response Format

### Success Response

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Operation successful",
  "data": {}
}
```

### Error Response

```json
{
  "success": false,
  "statusCode": 400,
  "message": "Error message",
  "errors": [
    {
      "field": "fieldName",
      "message": "Error details"
    }
  ]
}
```

## Endpoints

### Authentication Endpoints

#### Register

- **URL**: `POST /auth/register`
- **Auth**: Not required
- **Body**:

```json
{
  "email": "user@example.com",
  "username": "username",
  "password": "SecurePassword123",
  "firstname": "John",
  "lastname": "Doe",
  "dob": "1990-01-01",
  "gender": "male"
}
```

- **Response**: 201 Created

```json
{
  "success": true,
  "statusCode": 201,
  "message": "User registered successfully",
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "username": "username"
    },
    "accessToken": "jwt_token"
  }
}
```

#### Login

- **URL**: `POST /auth/login`
- **Auth**: Not required
- **Body**:

```json
{
  "email": "user@example.com",
  "password": "SecurePassword123"
}
```

Or:

```json
{
  "username": "username",
  "password": "SecurePassword123"
}
```

- **Response**: 200 OK

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Login successful",
  "data": {
    "user": {
      "id": "uuid",
      "email": "user@example.com",
      "username": "username"
    },
    "accessToken": "jwt_token"
  }
}
```

#### Logout

- **URL**: `POST /auth/logout`
- **Auth**: Required
- **Response**: 200 OK

#### Change Password

- **URL**: `PUT /auth/password`
- **Auth**: Required
- **Body**:

```json
{
  "currentPassword": "CurrentPassword123",
  "newPassword": "NewPassword123"
}
```

- **Response**: 200 OK

#### Refresh Token

- **URL**: `POST /auth/token`
- **Auth**: Required
- **Response**: 200 OK

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Token refreshed successfully",
  "data": {
    "accessToken": "new_jwt_token"
  }
}
```

### User Endpoints

#### Get Current User

- **URL**: `GET /user/me`
- **Auth**: Required
- **Response**: 200 OK

```json
{
  "success": true,
  "statusCode": 200,
  "message": "User retrieved successfully",
  "data": {
    "id": "uuid",
    "email": "user@example.com",
    "username": "username",
    "person": {
      "id": "uuid",
      "firstname": "John",
      "lastname": "Doe",
      "dob": "1990-01-01",
      "gender": "male"
    },
    "ownedProjects": [],
    "collaborations": []
  }
}
```

#### Update Profile

- **URL**: `PATCH /user/:userId`
- **Auth**: Required
- **Body**:

```json
{
  "firstname": "Jane",
  "lastname": "Smith",
  "dob": "1990-01-01",
  "gender": "female"
}
```

- **Response**: 200 OK

### Project Endpoints

#### Create Project

- **URL**: `POST /project`
- **Auth**: Required
- **Body**:

```json
{
  "title": "My Project",
  "description": "Project description"
}
```

- **Response**: 201 Created

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Project created successfully",
  "data": {
    "id": "uuid",
    "title": "My Project",
    "ownerId": "uuid",
    "createdAt": "2024-02-03T10:00:00Z",
    "updatedAt": null
  }
}
```

#### Get User's Projects

- **URL**: `GET /project`
- **Auth**: Required
- **Response**: 200 OK

#### Get Project by ID

- **URL**: `GET /project/:projectId`
- **Auth**: Required
- **Response**: 200 OK

#### Update Project

- **URL**: `PATCH /project/:projectId`
- **Auth**: Required (Owner/Admin)
- **Body**:

```json
{
  "title": "Updated Project Title"
}
```

- **Response**: 200 OK

#### Delete Project

- **URL**: `DELETE /project/:projectId`
- **Auth**: Required (Owner only)
- **Response**: 200 OK

### Todo Endpoints

#### Create Todo

- **URL**: `POST /todo/:projectId`
- **Auth**: Required
- **Body**:

```json
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "deadline": "2024-02-10T18:00:00Z"
}
```

- **Response**: 201 Created

#### Get Project Todos

- **URL**: `GET /todo/:projectId`
- **Auth**: Required
- **Response**: 200 OK

#### Get Todo by ID

- **URL**: `GET /todo/:todoId`
- **Auth**: Required
- **Response**: 200 OK

#### Update Todo

- **URL**: `PATCH /todo/:todoId`
- **Auth**: Required
- **Body**:

```json
{
  "title": "Updated title",
  "description": "Updated description",
  "isCompleted": true
}
```

- **Response**: 200 OK

#### Toggle Todo Complete

- **URL**: `PATCH /todo/:todoId/complete`
- **Auth**: Required
- **Response**: 200 OK

#### Change Deadline

- **URL**: `PATCH /todo/:todoId/deadline`
- **Auth**: Required
- **Body**:

```json
{
  "deadline": "2024-02-15T18:00:00Z"
}
```

- **Response**: 200 OK

#### Delete Todo

- **URL**: `DELETE /todo/:todoId`
- **Auth**: Required
- **Response**: 200 OK

### Collaborator Endpoints

#### Add Collaborator

- **URL**: `POST /collaborator/:projectId`
- **Auth**: Required (Owner/Admin)
- **Body**:

```json
{
  "email": "collaborator@example.com",
  "role": "EDITOR"
}
```

- **Response**: 201 Created

#### Get Project Collaborators

- **URL**: `GET /collaborator/:projectId`
- **Auth**: Required
- **Response**: 200 OK

#### Update Collaborator Role

- **URL**: `PATCH /collaborator/:projectId/:collaboratorId`
- **Auth**: Required (Owner/Admin)
- **Body**:

```json
{
  "role": "VIEWER"
}
```

- **Response**: 200 OK

#### Remove Collaborator

- **URL**: `DELETE /collaborator/:projectId/:collaboratorId`
- **Auth**: Required (Owner/Admin)
- **Response**: 200 OK

### Health Check

#### Health Check

- **URL**: `GET /healthcheck`
- **Auth**: Not required
- **Response**: 200 OK

```json
{
  "message": "Server is running"
}
```

## Status Codes

| Code | Meaning                                 |
| ---- | --------------------------------------- |
| 200  | OK - Request successful                 |
| 201  | Created - Resource created successfully |
| 400  | Bad Request - Invalid input             |
| 401  | Unauthorized - Authentication required  |
| 403  | Forbidden - No permission               |
| 404  | Not Found - Resource not found          |
| 409  | Conflict - Resource already exists      |
| 500  | Internal Server Error                   |

## Error Examples

### Validation Error

```json
{
  "success": false,
  "statusCode": 400,
  "message": "Invalid input",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    },
    {
      "field": "password",
      "message": "Password must be at least 8 characters"
    }
  ]
}
```

### Unauthorized Error

```json
{
  "success": false,
  "statusCode": 401,
  "message": "Invalid or expired token"
}
```

### Forbidden Error

```json
{
  "success": false,
  "statusCode": 403,
  "message": "You don't have permission to access this resource"
}
```

## Rate Limiting

Rate limiting recommendations (to be implemented):

- Auth endpoints: 5 requests per minute
- General endpoints: 100 requests per minute
- Admin endpoints: 50 requests per minute

## Pagination

For list endpoints (future implementation):

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Items retrieved successfully",
  "data": [],
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```
