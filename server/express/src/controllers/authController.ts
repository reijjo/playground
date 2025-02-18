import type { Request, Response, NextFunction } from "express";
import type { BasicApiResponse, LoginRegisterForm } from "../utils/types";
import { UserModel } from "../db/models/userModel";

import bcryptjs from 'bcryptjs';

export const register = async (
  req: Request,
  res: Response<BasicApiResponse>,
  next: NextFunction
): Promise<void> => {
	const { username, password } = req.body as LoginRegisterForm;

	console.log('BACKENDREQBODY', req.body)

	if (!username || !password) {
		res.status(400).json({
			success: false,
			message: "Username and password are required"
		});
		return;
	}

	if (password.length < 8 || password.length > 30) {
		res.status(400).json({
			success: false,
			message: "Password must be between 8 and 30 characters"
		});
		return;
	}

	try {
		const userExists = await UserModel.findOne({ username });
		if (userExists) {
			res.status(400).json({
				success: false,
				message: "Username already exists"
			});
			return
		}

		const hashPw = await bcryptjs.hash(password, 10)
		const newUser = new UserModel({ username: username.toLowerCase(), password: hashPw });
		await newUser.save();

    res.status(201).json({
      success: true,
      message: `User ${username} created successfully!`,
    });
  } catch (error) {
    next(error);
  }
};
