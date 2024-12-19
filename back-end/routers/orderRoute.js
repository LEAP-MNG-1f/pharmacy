import express from "express";
import {
  createOrder,
  getAllOrders,
  updateOrder,
} from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/orders", createOrder);
orderRouter.get("/orders", getAllOrders);
orderRouter.put("/orders/:orderId", updateOrder);

export default orderRouter;
