/*
  _id string pk 
  name string
  email email
  phone_no number
  assignedTo string 
  status string
  createdAt date
  updatedAt date
*/

import mongoose, { Schema } from "mongoose";

const leadSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      tirm: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phone_no: {
      type: Number,
      required: true,
      trim: true,
    },
    assigned_to: {
      type: String,
    },
    status: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
export const lead = mongoose.model("Lead", leadSchema);
