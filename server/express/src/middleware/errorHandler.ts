import type { NextFunction, Request, Response } from "express";
import { MongooseError } from "mongoose";



export const errorHandler = (error: Error, req: Request, res: Response, _next: NextFunction) => {

	if (error instanceof MongooseError) {
		console.log('MONGO ERROR', error)
	} else {
		console.log('errorHandler', error);

	}
};