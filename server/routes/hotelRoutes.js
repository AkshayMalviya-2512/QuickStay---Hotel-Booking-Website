import express from "express";
import { registerHotel, getMyHotel } from "../controllers/hotelController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

//Protected Routes
router.post("/register", protect, registerHotel);
router.get("/my-hotel", protect, getMyHotel);

export default router;