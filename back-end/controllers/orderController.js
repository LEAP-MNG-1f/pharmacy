import { Order } from "../models/order.js";

const createOrder = async (request, response) => {
  try {
    const result = await Order.create({
      userId: "",
      orderNumber: "",
      medicineIds: foodIds,
      totalPrice: totalPrice,
      district: district,
      khoroo: khoroo,
      apartment: apartment,
      information: information,
      phoneNumber: phoneNumber,
      paymentType: paymentType,
    });

    response.json({
      success: true,
      data: result,
    });
  } catch (error) {
    response.json({ success: false });
  }
};
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
// const deleteOrder = async (request, response) => {
//   try {
//     const result = await Order.findByIdAndRemove({
//       _id: "",
//     });

//     response.json({
//       success: Food,
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
// const updateOrder = async (request, response) => {
//   try {
//     const result = await Order.findByIdAndUpdate({
//       _id: "",
//     });

//     response.json({
//       success: true,
//       data: result,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export { getAllOrders, createOrder };
