import { Router } from "express";
import { register, login, logout } from "../controllers/user.js";

const userRouter = Router();

userRouter.post('/users/register', register);

userRouter.post('/users/login', login);

userRouter.post('/users/logout', logout);

export default userRouter;