/*
  _id string pk
  username string
  email email
  password string
  name string
  avatar string
  phone_no number
  createdAt date
  updatedAt date 
 */

import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 10
    },
    name: {
      type: String,
      required: true,
      trim: true,
      index: true,
    },
    avatar: {
      type: String, // cloudinary url
      required: true,
    },
    phone_no: {
      type: Number,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

console.log();

export const user = mongoose.model("User", userSchema);
