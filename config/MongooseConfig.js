import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default function connectDB() {
    mongoose.connect(process.env.MONGODB_URI, {
   
    });
    mongoose.connection.on("connected", () => {
        console.log("Mongoose is connected");
    });
    mongoose.connection.on("error", (err) => {
        console.log(err);
    });
}