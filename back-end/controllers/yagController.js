import { Yag } from "../models/yag.js";

const createYag = async (request, response) => {
  try {
    const result = await Yag.create({
      name: "Vitamin C",
      categoryId: "6757b8206c8c791974a24742",
      price: "33000",
      balance: 5,
    });
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};
const getAllYag = async (request, response) => {
  try {
    const result = await Yag.find();
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

export { createYag, getAllYag };
