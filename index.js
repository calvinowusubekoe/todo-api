import express from "express";
import todoRouter from "./routes/todo.js";
import userRouter from './routes/user.js';
import mongoose  from "mongoose";

// Connect to DataBase
await mongoose.connect(process.env.MONGO_URI);

// Create an express app
const app = express();

// Use middlewares
app.use(express.json());

// Use routes
app.use(todoRouter);
app.use(userRouter);

// Listen for incoming requests
app.listen(3000, () => {
  console.log("App is listening on port 3000");
});
