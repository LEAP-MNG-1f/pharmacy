import { Category } from "../models/category.js";

const createCategory = async (request, response) => {
  try {
    const result = await Category.create({
      name: "Хүүхдийн бүтээгдэхүүн",
    });
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

const getAllCategory = async (request, response) => {
  try {
    const allCategory = await Category.find();
    response.json({ success: true, result: allCategory });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

export { createCategory, getAllCategory };
