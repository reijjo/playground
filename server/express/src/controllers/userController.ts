import { UserModel } from "../db/models/userModel";
import type { NextFunction, Request, Response } from "express";

export const getAllUsers = async (
  _req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const users = await UserModel.find({});
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
