import mongoose from "mongoose";
import { userRoles } from "../../utils/enums";

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Username is required"],
		minLength: [3, "Min 3 characters in username"],
		maxLength: [20, "Max 20 characters in username"],
	},
	password: {
		type: String,
		required: [true, "Password is required"],
		minLength: [8, "Min 8 characters in password"],
	},
	role: {
		type: String,
		required: [true, "Role is required"],
		enum: Object.values(userRoles),
		default: userRoles.USER,
	}
})

export const UserModel = mongoose.model("User", userSchema);