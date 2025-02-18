import type { NextFunction, Request, Response } from "express";
import { MongooseError } from "mongoose";
import type { BasicApiResponse } from "../utils/types";

export const errorHandler = (error: Error, _req: Request, res: Response<BasicApiResponse>, _next: NextFunction) => {
	if (error instanceof MongooseError) {
		if (error.name === 'ValidationError') {
			console.log('VALIDATION ERROR', error.message)
			res.status(400).json({
				success: false,
				message: error.message
			})
		} else {
			console.log('MONGO ERROR', error)
		}
	} else {
		console.log('errorHandler', error);
	}
};