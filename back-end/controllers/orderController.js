import { Order } from "../models/order.js";

import { v2 as cloudinary } from "cloudinary";

const createOrder = async (request, response) => {
  const {
    userId,
    orderNumber,
    medicineIds,
    totalPrice,
    district,
    khoroo,
    apartment,
    phoneNumber,
    information,
    paymentType = "Card",
  } = request.body;
  console.log(request.body);

  const file = request.file;

  if (!file) {
    return response
      .status(400)
      .json({ success: false, message: "Image is required" });
  }

  try {
    const uploadResult = await cloudinary.uploader.upload(file.path, {
      folder: "orders",
    });
    const parsedMedicineIds = JSON.parse(medicineIds);

    const objectIds = parsedMedicineIds.map((id) =>
      mongoose.Types.ObjectId(id)
    );

    const result = await Order.create({
      userId,
      orderNumber,
      medicineIds: objectIds,
      totalPrice,
      district,
      khoroo,
      apartment,
      phoneNumber,
      information,
      paymentType,
      image_jor: uploadResult.url,
    });

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    response.status(500).json({ success: false, error: error.message });
  }
};

export default createOrder;

const getAllOrders = async (request, response) => {
  try {
    const result = await Order.find()
      .populate("userId")
      .populate("medicineIds");

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export { getAllOrders, createOrder };
