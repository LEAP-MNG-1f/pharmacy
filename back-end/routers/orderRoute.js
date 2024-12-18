import express from "express";
import { createOrder, getAllOrders } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/orders", createOrder);
orderRouter.get("/orders", getAllOrders);

export default orderRouter;
