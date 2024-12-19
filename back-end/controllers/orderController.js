import { Order } from "../models/order.js";
import mongoose from "mongoose";

const createOrder = async (request, response) => {
  try {
    const {
      userId,
      medicineIds,
      totalPrice,
      district,
      khoroo,
      apartment,
      phoneNumber,
      information,
      paymentType = "Card",
      image_jor,
    } = request.body;

    if (!userId || !medicineIds) {
      return response.status(400).json({
        success: false,
        error: "Required fields are missing",
      });
    }

    // Parse medicineIds if it's a string
    const parsedMedicineIds =
      typeof medicineIds === "string" ? JSON.parse(medicineIds) : medicineIds;

    // Map medicine data
    const medicinesWithQuantity = parsedMedicineIds.map((item) => ({
      name: item.name,
      quantity: item.quantity,
    }));

    // Create new order
    const result = await Order.create({
      userId,
      medicineIds: medicinesWithQuantity,
      totalPrice,
      district,
      khoroo,
      apartment,
      phoneNumber,
      information,
      paymentType,
      image_jor,
    });

    response.status(201).json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    response.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const getAllOrders = async (request, response) => {
  try {
    const result = await Order.find()
      .populate("userId")
      .sort({ createdAt: -1 }); // Sort by newest first

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    response.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

const updateOrder = async (request, response) => {
  try {
    const { orderId } = request.params;
    const { process } = request.body;

    console.log("Updating order:", orderId, "with process:", process); // Debug log

    // Validate orderId
    if (!mongoose.Types.ObjectId.isValid(orderId)) {
      console.log("Invalid order ID"); // Debug log
      return response.status(400).json({
        success: false,
        error: "Invalid order ID",
      });
    }

    // Update the order
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { $set: { process: process } },
      { new: true }
    );

    if (!updatedOrder) {
      console.log("Order not found"); // Debug log
      return response.status(404).json({
        success: false,
        error: "Order not found",
      });
    }

    console.log("Updated order:", updatedOrder); // Debug log

    response.json({
      success: true,
      data: updatedOrder,
    });
  } catch (error) {
    console.error("Error updating order:", error);
    response.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
export { getAllOrders, createOrder, updateOrder };
