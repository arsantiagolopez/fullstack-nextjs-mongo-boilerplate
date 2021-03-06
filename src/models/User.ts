import mongoose from "mongoose";
import { UserEntity } from "../types";

const { model, models, Schema } = mongoose;

const UserSchema = new Schema<UserEntity>(
  {
    name: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    emailVerified: {
      type: Date,
      required: false,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

// Prevent model overwrite upon initial compile
const User = models.User || model<UserEntity>("User", UserSchema);

export { User };
