import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id:{
        type: String, // Clerk userId
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    username:{
        type: String,
    },
    image:{
        type: String,
    },
    role:{
        type: String,
        enum: ["User", "hotelOwner"],
        default: "user",
    },

}, { timestamps: true });

const User = mongoose.model("User", userSchema);

export default User;