import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./src/routes/index.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/", userRouter);

await mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to the DB...!!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
