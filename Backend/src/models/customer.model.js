/*
_id string pk
  name string
  email email 
  phone_no number
  address string
  total_profit number
  status boolean 
  type isTopCustomer
  createdAt date
  updatedAt date
*/
import mongoose, { Schema } from "mongoose";
const mailSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
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
    phone_no: {
      type: Number,
      required: true,
      trim: true,
    },
    address: {
      type: address,
      required: true,
    },
    total_profit: {
      type: Number,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
    type: {
      isTopCustomer: Boolean,
    },
  },
  {
    timestamps: true,
  }
);
