import express from "express";
import { createOrder, getAllOrders } from "../controllers/orderController.js";
import multer from "multer";

const upload = multer({ dest: "./uploads/" });
const orderRouter = express.Router();

orderRouter.post("/orders", upload.single("image_jor"), createOrder);
orderRouter.get("/orders", getAllOrders);
// orderRouter.post("/orders", createOrder);

export default orderRouter;
