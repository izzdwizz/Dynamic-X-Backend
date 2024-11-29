import { AppDataSource } from "./data-source";
import app from "./index";

AppDataSource.initialize()
  .then(() => {
    app.listen(3000, () => console.log("Server is running on port 3000"));
  })
  .catch((error) => console.error("Database connection failed:", error));
