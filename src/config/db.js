/*import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

export default connectDB; */

import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

/*const mongoURI = process.env.MONGO_URI; */
const mongoURI = "mongodb+srv://sukantotech:tGh3MQ7dJ4UdTOPv@cluster0.w9qih.mongodb.net/itemdb?retryWrites=true&w=majority&&authSource=admin"

if (!mongoURI) {
  console.error("MongoDB connection string is missing. Set MONGO_URI in .env");
  process.exit(1);
}

const connectDB = async () => {
    try {
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("MongoDB Connected");
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

  export default connectDB;