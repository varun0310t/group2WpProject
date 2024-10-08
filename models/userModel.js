import mongoose from "mongoose";
//make files url attribute in user model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    cloudUrl: [{
        type: String,
        required: true
    }],
    fileurl: [{
        type: String,
        required: true
    }],

    password: {
        type: String,
        required: true
    }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;