import express from "express";
import dotenv from "dotenv";;
import cors from "cors";
import connectDB from "./configs/db.js";
import { clerkMiddleware } from '@clerk/express';
import webHookRoutes from "./routes/webHookRoutes.js";
import bodyParser from "body-parser";
import hotelRoutes from "./routes/hotelRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";

dotenv.config();

const app = express();

connectDB(); //DB

//Middleware
app.use(cors());         //enable cross-origin resource sharing
app.use(express.json());
app.use(clerkMiddleware());

//Routes
app.use("/api/hotel", hotelRoutes)
app.use("/api/room", roomRoutes);

//WebHook
app.use("/api/webhooks/clerk", bodyParser.raw({ type: "application/json" }));
app.use("/api/webhooks", webHookRoutes);

//test
app.get('/', (req, res) => res.send("API is working"))

//server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));