import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    hotelId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hotel",
        required: true,
    },
    ownerId: String,
    roomType: String,
    pricePerNight: Number,
    amenities: [String],
    images: [String],
    isAvailable: {
        type: Boolean,
        default: true,
    },
},{ timestamps: true });

const Room = mongoose.model("Room", roomSchema);

export default Room;