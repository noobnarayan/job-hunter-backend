import dotenv from "dotenv";
import { connectDB } from "../src/db/db.js";
import { app } from "../src/app.js";

// Load environment variables
dotenv.config();

// Connect to database
connectDB()
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((error) => {
        console.error("Database connection failed:", error);
    });

// Export the Express app as a Vercel serverless function
export default app;
