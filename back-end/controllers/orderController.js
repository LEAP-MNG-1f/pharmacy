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

export { getAllOrders, createOrder };
