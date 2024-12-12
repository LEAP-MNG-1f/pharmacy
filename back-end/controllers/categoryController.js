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
const deleteCategory = async (request, response) => {
  const { _id } = body.request;
  try {
    const allCategory = await Category.find();
    const leftCategory = allCategory.filter((category) => {
      category?._id !== _id;
    });
    response.json({ success: true, result: leftCategory });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

export { createCategory, getAllCategory };
