import mongoose from "mongoose";
import dotnev from "dotenv";

dotnev.config();

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

export { connectDb }
