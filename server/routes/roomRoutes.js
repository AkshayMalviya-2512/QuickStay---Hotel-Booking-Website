import express from "express";
import { addRoom, getAdminRooms, toggleRoom, deleteRoom } from "../controllers/roomController.js";
import { protect } from "../middleware/authMiddleware.js";


const router = express.Router();

router.post("/add", protect, addRoom);
router.get("/admin", protect, getAdminRooms);
router.patch("/toggle/:id", protect, toggleRoom);
router.delete("/:id", protect, deleteRoom);

export default router;