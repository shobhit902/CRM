import mongoose from "mongoose";
import dotenv from "dotenv";
import { user } from "../models/user.model.js";
dotenv.config();

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const state = mongoose.connection.readyState;
    if (state === 1) {
      console.log("MongoDB is connected");
    } else {
      console.log("MongoDB is NOT connected. State:", state);
    }
    
  } catch (error) {
    console.log(`Database not connectes`, error);
  }
};

export { connectDb };
