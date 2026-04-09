import Hotel from "../models/Hotel.js";
import User from "../models/User.js";

//Hotel register
export const registerHotel = async (req, res) => {
    try {
        const { name, phone, address, city } = req.body;

        const ownerId = req.auth.userId;

        //check already existing hotel for user
        const existingHotel = await Hotel.findOne({ ownerId})

        if(existingHotel){
            return res.status(400).json({
                success: false,
                message: "Hotel Already Registered",
            });
        }

        //hotel creation
        const hotel = await Hotel.create({
            ownerId,
            name,
            phone,
            email,
            address,
            city,
        });

        //updating user role to hotelOwner
        await User.findByIdAndUpdate(ownerId, {
            role: "hotelOwner"
        });

        res.status(201).json({
            success: true,
            hotel,
        });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            message: error.message, 
        });
    }
};

//getting my hotel
export const getMyHotel = async (req, res) => {
    try {
        const ownerId = req.auth.userId;
        
        const hotel = await Hotel.findOne({ ownerId })

        if(!hotel){
            return res.status(404).json({
                success: false,
                message: "Hotel Not Found",
            });
        }

        res.json({
            success: true,
            hotel,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,  
        });
    }
};