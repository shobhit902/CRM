/*
 _id string pk
  message string  
  lead_id string 
  campaign_id string 
  sentBy string 
  createdAt date
  updatedAt date
*/
import mongoose, { Schema } from "mongoose";
const mailSchema = new Schema(
  {
    message: {
      type: String,
    },
    sentBy: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
