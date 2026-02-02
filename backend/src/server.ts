import { EnvVariables } from "./types/common/Environment.types";
import { client } from "./lib/prisma";
import { app } from "./app";

(async function () {
  try {
    await client.$connect();
    console.log("Database connected successfully");

    app.listen(EnvVariables.PORT, () => {
      console.log("App successfully running");
    });
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Database connection failed app initialization aborted , Error: ${error.message}`,
      );
    } else {
        throw error
    }
  }
})();
