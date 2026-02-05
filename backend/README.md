# Todo App Backend API

A production-ready backend API for a collaborative todo application built with Express.js, TypeScript, Prisma ORM, and PostgreSQL.

## Features

- ✅ User authentication (register, login, JWT-based)
- ✅ Password management (change, forgot, reset)
- ✅ Project management (create, update, delete)
- ✅ Todo management with deadlines
- ✅ Collaborator management with role-based access control
- ✅ Permission-based authorization
- ✅ Error handling and validation
- ✅ Production-ready configuration

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Web Framework**: Express.js
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt
- **Validation**: Zod
- **Database Caching**: Prisma Accelerate

## Prerequisites

- Node.js 18.0.0 or higher
- npm 9.0.0 or higher
- PostgreSQL database
- Prisma Accelerate API key (optional, for caching)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Set up the database:

```bash
npm run migrate:dev
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Server Configuration
PORT=8000
NODE_ENV=production
CORS_ORIGIN=http://localhost:3000

# Database Configuration
DIRECT_DATABASE_URL=postgresql://user:password@host:port/database?sslmode=require
DATABASE_URL=prisma://accelerate.prisma-data.net/?api_key=your_key

# JWT Configuration
ACCESS_TOKEN_SECRET=your_secret_key_min_32_chars
ACCESS_TOKEN_EXPIRY=1h
REFRESH_TOKEN_SECRET=your_secret_key_min_32_chars
REFRESH_TOKEN_EXPIRY=7d
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run migrate:dev` - Run Prisma migrations
- `npm run migrate:reset` - Reset database (development only)
- `npm run prisma:generate` - Generate Prisma client
- `npm run prisma:studio` - Open Prisma Studio UI
- `npm run lint` - Check TypeScript compilation

## API Endpoints

### Authentication

- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `POST /api/v1/auth/logout` - Logout user (requires auth)
- `PUT /api/v1/auth/password` - Change password (requires auth)
- `POST /api/v1/auth/password/forgot` - Request password reset
- `POST /api/v1/auth/password/reset` - Reset password
- `POST /api/v1/auth/token` - Refresh access token (requires auth)

### User

- `GET /api/v1/user/me` - Get current user (requires auth)
- `PATCH /api/v1/user/:userId` - Update user profile (requires auth)

### Projects

- `POST /api/v1/project` - Create project (requires auth)
- `GET /api/v1/project` - Get user's projects (requires auth)
- `GET /api/v1/project/:projectId` - Get project by ID (requires auth)
- `PATCH /api/v1/project/:projectId` - Update project (requires auth)
- `DELETE /api/v1/project/:projectId` - Delete project (requires auth)

### Todos

- `POST /api/v1/todo/:projectId` - Create todo (requires auth)
- `GET /api/v1/todo/:projectId` - Get project todos (requires auth)
- `GET /api/v1/todo/:todoId` - Get todo by ID (requires auth)
- `PATCH /api/v1/todo/:todoId` - Update todo (requires auth)
- `PATCH /api/v1/todo/:todoId/complete` - Toggle todo completion (requires auth)
- `PATCH /api/v1/todo/:todoId/deadline` - Change todo deadline (requires auth)
- `DELETE /api/v1/todo/:todoId` - Delete todo (requires auth)

### Collaborators

- `POST /api/v1/collaborator/:projectId` - Add collaborator (requires auth)
- `GET /api/v1/collaborator/:projectId` - Get project collaborators (requires auth)
- `PATCH /api/v1/collaborator/:projectId/:collaboratorId` - Update collaborator role (requires auth)
- `DELETE /api/v1/collaborator/:projectId/:collaboratorId` - Remove collaborator (requires auth)

### Health Check

- `GET /api/v1/healthcheck` - Health check endpoint

## Authentication

The API uses JWT tokens for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <access_token>
```

Or include it as a cookie:

```
Cookie: accessToken=<access_token>
```

## User Roles and Permissions

### Project Roles

- **OWNER**: Full permissions (cannot be changed by others)
- **ADMIN**: Can manage collaborators and todos
- **EDITOR**: Can create and manage todos
- **VIEWER**: Read-only access

### Permissions

- `CREATE_TODO`: Create new todos
- `UPDATE_TODO`: Update existing todos
- `DELETE_TODO`: Delete todos
- `COMPLETE_TODO`: Mark todos as complete/incomplete
- `INVITE_COLLABORATOR`: Add new collaborators
- `REMOVE_COLLABORATOR`: Remove collaborators
- `CHANGE_ROLE`: Update collaborator roles
- `DELETE_PROJECT`: Delete the project

## Deployment

### Docker Deployment

1. Build Docker image:

```bash
docker build -t todo-app-backend .
```

2. Run container:

```bash
docker run -p 8000:8000 --env-file .env todo-app-backend
```

### Cloud Platform Deployment

#### Heroku

```bash
heroku login
heroku create your-app-name
heroku addons:create heroku-postgresql:standard-0
git push heroku main
heroku run npm run migrate:prod
```

#### Railway

```bash
railway init
railway add
railway link
railway up
```

#### Vercel (with serverless)

```bash
vercel deploy
```

#### AWS EC2

1. Launch EC2 instance
2. Install Node.js and PostgreSQL
3. Clone repository
4. Set environment variables
5. Run `npm run build` and `npm start`

## Production Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Use strong JWT secrets (min 32 characters)
- [ ] Configure CORS properly for your frontend domain
- [ ] Use SSL/TLS for HTTPS
- [ ] Enable database backups
- [ ] Set up monitoring and logging
- [ ] Configure rate limiting
- [ ] Use environment variables for sensitive data
- [ ] Run database migrations before deployment
- [ ] Test all endpoints
- [ ] Set up CI/CD pipeline

## Error Handling

All errors follow this format:

```json
{
  "success": false,
  "statusCode": 400,
  "message": "Error message",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

## Development

### Database Schema

The database includes the following models:

- `User` - User accounts with authentication
- `Person` - User profile information
- `Project` - Project containers
- `Collaborator` - Project team members with roles
- `Todo` - Todo items within projects

### Adding New Features

1. Update Prisma schema in `prisma/schema.prisma`
2. Create migration: `npm run migrate:dev`
3. Implement service logic in `src/services/`
4. Create controller in `src/controllers/`
5. Add validation in `src/validation/`
6. Create routes in `src/routes/`
7. Test all endpoints

## Troubleshooting

### Database Connection Error

- Verify DATABASE_URL is correct
- Check if PostgreSQL server is running
- Ensure database exists and user has access

### JWT Token Errors

- Verify token format in Authorization header
- Check if token has expired
- Ensure ACCESS_TOKEN_SECRET is set correctly

### CORS Errors

- Update CORS_ORIGIN to match your frontend URL
- Ensure credentials are enabled in frontend requests

## License

ISC

## Support

For issues and questions, please create an issue in the repository.
