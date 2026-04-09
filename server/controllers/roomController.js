import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

//add room
export const addRoom = async (req, res) => {
    try {
        const ownerId = req.auth.userId;

        const hotel = Hotel.findOne({ ownerId });

        if(!hotel){
            return res.status(400).json({
                message: "Hotel not found, register hotel first",
            });
        }

        const { roomType, pricePerNight, amenities, images } = req.body;

        const room = await Room.create({
            hotelId: hotel._id,
            ownerId,
            roomType,
            pricePerNight,
            amenities,
            images,
        });

        res.status(201).json({
            success: true,
            message: "Room added successfully",
            room
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message,
        });
    }
};

//get all rooms(admin)
export const getAdminRooms = async (req, res) => {
    try {
        const ownerId = req.auth.userId;

        const rooms = await Room.find({ownerId});
        res.status(200).json({
            success: true,
            rooms,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message,
        });
    }
};

//availability toggle
export const toggleRoom = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);

        room.isAvailable = !room.isAvailable;
        await room.save();

        res.status(200).json({
            success: true,
            message: `Room is now ${room.isAvailable ? "available" : "unavailable"}`,
            room,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message,
        });
    }
};

//delete room
export const deleteRoom = async (req, res) => {
    try {
        await Room.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Rooms Deleted Successfully",
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            error: error.message,
        });
    }
};
