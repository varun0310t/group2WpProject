import mongoose from "mongoose";

export default function MongooseConfig() {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    });
    mongoose.connection.on("connected", () => {
        console.log("Mongoose is connected");
    });
    mongoose.connection.on("error", (err) => {
        console.log(err);
    });
}