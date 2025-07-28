/*
 _id string pk
  name string
  email email
  avatar string
  access string 
  createdAt date
  updatedAt date
*/

import mongoose, { Schema } from "mongoose";

const adminSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    access: {
      type: String,
    },
    avatar: {
      type: String, // cloudinary url
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const admin = mongoose.model("Admin", adminSchema);
