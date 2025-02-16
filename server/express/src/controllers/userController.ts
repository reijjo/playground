import type { Request, Response, NextFunction } from "express";

export const getAllUsers = async (_req: Request, res: Response, next: (NextFunction)) => {
	try {
		res.send("All users");
	} catch (error) {
		next(error);
	}
}