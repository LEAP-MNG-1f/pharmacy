import { Medicine } from "../models/medicine.js";

const createMedicine = async (request, response) => {
  try {
    const result = await Medicine.create({
      name: "Boloroo",
    });
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

const getAllMedicine = async () => {
  try {
    const allMedicine = await Medicine.find().populate("categoryId");
    response.json({ success: true, result: allMedicine });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

export { createMedicine, getAllMedicine };
