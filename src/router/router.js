import { Router } from "express";
import { create, findAll, findOne, remove, update } from "../controller/user.controller.js";
import { validateCreateUser } from "../middlewares/validateCreateUser.middleware.js";

export const userRouter = Router();

userRouter.get('/users', findAll);
userRouter.get('/users/:id', findOne);
userRouter.post('/users', validateCreateUser, create);
userRouter.put('/users/:id', update);
userRouter.delete('/users/:id', remove);