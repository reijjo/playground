import { getAllUsers } from "../controllers/userController";
import { authCheck } from "../middleware/authCheck";
import { Router } from "express";

const userRouter = Router();

userRouter.get("/", authCheck("user"), getAllUsers);

export { userRouter };
