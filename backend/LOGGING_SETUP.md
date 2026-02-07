# Winston & Morgan Logging Setup

This document describes the logging setup for the Todo App backend. The application uses **Winston** for general logging and **Morgan** for HTTP request logging.

## Overview

### Winston Logger
- **Location**: `src/lib/logger.ts`
- **Purpose**: Handles all application logging with proper rotation and file management
- **Features**:
  - Multiple log levels (error, warn, info, http, debug, silly)
  - Separate error and combined log files
  - Log rotation (max 10MB per file, keeps 10 files)
  - Unhandled exception and rejection handlers
  - Different formatting for development and production

### Morgan Middleware
- **Location**: `src/lib/morgan.ts`
- **Purpose**: Logs all HTTP requests and responses
- **Features**:
  - Configured to use Winston for logging
  - Skips healthcheck endpoint to reduce noise
  - Different format for dev and production environments

## Log Files

Logs are stored in the `logs/` directory at the project root:

```
logs/
├── error.log           # Only error level logs
├── combined.log        # All logs (info, warn, error, etc.)
├── production.log      # Production-specific logs
├── exceptions.log      # Unhandled exceptions
└── rejections.log      # Unhandled promise rejections
```

### File Rotation
- **Max Size**: 10MB per file
- **Max Files**: 10 files per log type
- **Strategy**: Oldest files are removed when limit is reached

## Environment-Specific Configuration

### Development
- **Log Level**: `debug`
- **Console Format**: Colored, human-readable
- **File Format**: JSON format
- **Morgan Format**: `dev`

### Production
- **Log Level**: `info`
- **Console Format**: JSON format
- **File Format**: JSON format
- **Morgan Format**: `combined`
- **Additional**: Production-specific log file

## Usage Examples

### In Controllers/Services

Import the logging utilities:

```typescript
import { 
  logInfo, 
  logError, 
  logWarn, 
  logDebug,
  logRequestStart,
  logRequestEnd 
} from "../utils/logger.utils";

// Log info
logInfo("User created successfully", { userId: "123", email: "user@example.com" });

// Log error
logError("Failed to create user", error, { email: "user@example.com" });

// Log with metadata
logDebug("Database query executed", { query: "SELECT * FROM users", duration: 45 });

// Log request lifecycle
logRequestStart("POST", "/api/v1/users", userId);
// ... do something ...
logRequestEnd("POST", "/api/v1/users", 200, 150, userId);
```

### Direct Logger Usage

```typescript
import { logger } from "../lib/logger";

logger.info("User logged in", { userId: "123" });
logger.error("Authentication failed", { reason: "Invalid credentials" });
logger.warn("Rate limit approaching", { remainingRequests: 5 });
logger.debug("Processing request", { data: requestBody });
```

## Log Levels

| Level | Usage | Color (Dev) |
|-------|-------|------------|
| `error` | Critical errors | Red |
| `warn` | Warnings | Yellow |
| `info` | General information | Green |
| `http` | HTTP requests | Blue |
| `debug` | Debug information | Cyan |
| `silly` | Very detailed information | Magenta |

## Environment Variables

Make sure these are set in your `.env`:

```env
NODE_ENV=development  # or production
PORT=3000
```

## Integration Points

### 1. Server Startup (`src/server.ts`)
- Logs database connection
- Logs server startup on port
- Logs environment information
- Logs graceful shutdown events

### 2. Error Handler (`src/utils/errorMiddleware.ts`)
- Logs all API errors with context
- Includes request path, method, IP
- Logs full error stack in development

### 3. Morgan Middleware (`src/app.ts`)
- Logs all HTTP requests
- Integrated with Winston for unified logging
- Skips healthcheck pings to reduce log volume

## Best Practices

1. **Always log important operations**
   - User auth events
   - Database operations
   - API errors
   - System-level events

2. **Include context in logs**
   ```typescript
   logInfo("User created", {
     userId: user.id,
     email: user.email,
     role: user.role
   });
   ```

3. **Use appropriate log levels**
   - `error`: For failed operations
   - `warn`: For potentially problematic situations
   - `info`: For normal operational events
   - `debug`: For diagnostic information

4. **Don't log sensitive data**
   - Passwords, tokens, API keys
   - Credit card numbers
   - Personal identification numbers

5. **Log errors with context**
   ```typescript
   try {
     // operation
   } catch (error) {
     logError("Operation failed", error, {
       userId: userId,
       operation: "createUser",
       attemptedData: { email }
     });
   }
   ```

## Viewing Logs on Railway

1. **Real-time logs**: Railway dashboard automatically streams logs
2. **Log files**: Check the `logs/` directory in your deployed instance
3. **Combined view**: All logs (console + file) are visible in Railway logs tab

## Monitoring and Alerts

For production deployment on Railway:
- Monitor error.log for failures
- Set up alerts for critical errors (via Railway or third-party services)
- Regularly rotate and archive old logs
- Use log analysis tools to track patterns

## Performance Considerations

- Logging has minimal performance impact due to async I/O
- Morgan skip filter prevents unnecessary logging of healthchecks
- File rotation prevents unbounded growth
- Production log level set to `info` to reduce overhead

## Troubleshooting

### Logs not appearing
1. Check `logs/` directory exists
2. Verify `NODE_ENV` is set correctly
3. Check file permissions on `logs/` directory
4. Verify Winston and Morgan are imported in `app.ts` and `server.ts`

### Logs too verbose
1. Reduce log level in production (currently set to `info`)
2. Use Morgan skip filter to exclude specific endpoints
3. Remove debug logs in production code

### Large log files
1. Check rotation settings in `logger.ts`
2. Verify oldest files are being deleted
3. Consider reducing retention count
