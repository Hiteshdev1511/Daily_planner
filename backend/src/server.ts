import { EnvVariables } from "./types/common/Environment.types";
import { client } from "./lib/prisma";
import { app } from "./app";

(async function () {
  try {
    await client.$connect();

    const server = app.listen(EnvVariables.PORT, () => {
      console.log(`App running on http://localhost:${EnvVariables.PORT}`);
      console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
    });

    // Graceful shutdown
    process.on("SIGTERM", () => {
      console.log("SIGTERM signal received: closing HTTP server");
      server.close(async () => {
        console.log("HTTP server closed");
        await client.$disconnect();
        console.log("Database disconnected");
        process.exit(0);
      });
    });

    process.on("SIGINT", () => {
      console.log("SIGINT signal received: closing HTTP server");
      server.close(async () => {
        console.log("HTTP server closed");
        await client.$disconnect();
        console.log("Database disconnected");
        process.exit(0);
      });
    });
  } catch (error) {
    console.error("Fatal error during application startup:");
    if (error instanceof Error) {
      console.error(error.message);
      console.error(error.stack);
    } else {
      console.error(error);
    }
    process.exit(1);
  }
})();
