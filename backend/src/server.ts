import { EnvVariables } from "./types/common/Environment.types";
import { client } from "./lib/prisma";
import { app } from "./app";
import { logger } from "./lib/logger";

(async function () {
  try {
    await client.$connect();
    logger.info("Database connected successfully");

    const server = app.listen(EnvVariables.PORT, () => {
      logger.info(`App running on http://localhost:${EnvVariables.PORT}`);
      logger.info(`Environment: ${process.env.NODE_ENV || "development"}`);
      logger.info(`Server is ready to accept connections`);
    });

    // Graceful shutdown
    process.on("SIGTERM", () => {
      logger.warn("SIGTERM signal received: closing HTTP server");
      server.close(async () => {
        logger.info("HTTP server closed");
        await client.$disconnect();
        logger.info("Database disconnected");
        logger.info("Application gracefully shutdown");
        process.exit(0);
      });
    });

    process.on("SIGINT", () => {
      logger.warn("SIGINT signal received: closing HTTP server");
      server.close(async () => {
        logger.info("HTTP server closed");
        await client.$disconnect();
        logger.info("Database disconnected");
        logger.info("Application gracefully shutdown");
        process.exit(0);
      });
    });
  } catch (error) {
    logger.error("Fatal error during application startup:");
    if (error instanceof Error) {
      logger.error(`Error message: ${error.message}`);
      logger.error(`Stack trace: ${error.stack}`);
    } else {
      logger.error(`Unexpected error: ${error}`);
    }
    process.exit(1);
  }
})();
