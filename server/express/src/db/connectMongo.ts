
import { greenBright } from "colorette";
import mongoose, { MongooseError } from "mongoose";
import { MongoError, MongoErrorLabel } from "mongodb";

const handleMongoError = (error: unknown) => {
  if (error instanceof MongoError || error instanceof MongooseError) {
    throw error.message;
  } else {
    throw error;
  }
};

export const connectDatabase = async (url: string) => {
	try {
		console.log(greenBright("Looking for database..."));
		await mongoose.connect(url);
		console.log(greenBright("Database connected!"));
	} catch (error) {
		handleMongoError(error);
}}