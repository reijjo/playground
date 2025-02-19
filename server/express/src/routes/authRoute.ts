import {
  getSessionUser,
  login,
  logout,
  register,
} from "../controllers/authController";
import { Router } from "express";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", getSessionUser);

export { router as authRouter };
