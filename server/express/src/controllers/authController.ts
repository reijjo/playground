import bcryptjs from "bcryptjs";

import { UserModel } from "../db/models/userModel";
import type { BasicApiResponse, LoginRegisterForm } from "../utils/types";
import type { NextFunction, Request, Response } from "express";
import { connect } from "mongoose";

export const register = async (
  req: Request,
  res: Response<BasicApiResponse>,
  next: NextFunction,
): Promise<void> => {
  const { username, password } = req.body as LoginRegisterForm;

  console.log("BACKENDREQBODY", req.body);

  if (!username || !password) {
    res.status(400).json({
      success: false,
      message: "Username and password are required",
    });
    return;
  }

  if (password.length < 8 || password.length > 30) {
    res.status(400).json({
      success: false,
      message: "Password must be between 8 and 30 characters",
    });
    return;
  }

  try {
    const userExists = await UserModel.findOne({ username });
    if (userExists) {
      res.status(400).json({
        success: false,
        message: "Username already exists",
      });
      return;
    }

    const hashPw = await bcryptjs.hash(password, 10);
    const newUser = new UserModel({
      username: username.toLowerCase(),
      password: hashPw,
    });
    await newUser.save();

    res.status(201).json({
      success: true,
      message: `User ${username} created successfully!`,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { username, password } = req.body as LoginRegisterForm;

  if (!username || !password) {
    res.status(400).json({
      success: false,
      message: "Username and password are required",
    });
    return;
  }

  try {
    const user = await UserModel.findOne({ username });
    if (!user || !(await bcryptjs.compare(password, user.password))) {
      res.status(400).json({
        success: false,
        message: "Invalid username or password",
      });
      return;
    }

    req.session.user = {
      id: user._id,
      username: user.username,
      role: user.role,
    };
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req: Request, res: Response) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.status(200).json({
      success: true,
      message: "User logged out successfully",
    });
  });
};

export const getSessionUser = (req: Request, res: Response) => {
  if (req.session.user) {
    res.status(200).json({ success: true, data: req.session.user });
  } else {
    res.status(401).json({
      success: false,
      message: "No user session found",
    });
  }
};
