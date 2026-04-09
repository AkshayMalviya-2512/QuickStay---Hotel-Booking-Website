import express from "express";
import clerkWebHooks from "../controllers/clerkWebHooks.js";

const router = express.Router();

router.post("/clerk", clerkWebHooks);

export default router;