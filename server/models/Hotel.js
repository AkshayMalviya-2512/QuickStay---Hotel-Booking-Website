import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
    ownerId: {
        type: String, 
        required: true
    },
    name: {
        type: String, 
        required: true
    },
    phone: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true
    },
    address: {
        type: String, 
        required: true
    },
    city: {
        type: String, 
        required: true
    },

}, {timestamps: true});

const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;