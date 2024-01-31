import { Router } from "express";
import { addUser } from "../controller/user.controller.js";

const userRouter = Router();

userRouter.post("/add-user", addUser);

export default userRouter;
