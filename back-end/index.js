import express, { request, response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRouter from "./routers/userRoute.js";
import medicineRouter from "./routers/medicineRoute.js";
import adminRouter from "./routers/adminRoute.js";
import orderRouter from "./routers/orderRoute.js";
import categoryRouter from "./routers/categoryRoute.js";
import aptekRouter from "./routers/aptekRoute.js";
import emRouter from "./routers/emRouter.js";
import emiinsanRouter from "./routers/emiinsanRoute.js";
import yagRouter from "./routers/yagRoute.js";
// import { v2 as cloudinary } from "cloudinary";

const server = express();
const PORT = 8368;
dotenv.config();
server.use(bodyParser.json());
server.use(express.json());

mongoose.connect(process.env.MONGODB_URL);

server.use(cors());
server.use("/api", userRouter);
server.use("/api", medicineRouter);
server.use("/api", adminRouter);
server.use("/api", orderRouter);
server.use("/api", categoryRouter);
server.use("/api", aptekRouter);
server.use("/api", emRouter);
server.use("/api", emiinsanRouter);
server.use("/api", yagRouter);

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT} server ajillaj ehellee`);
});

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });
