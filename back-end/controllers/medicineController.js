import { Medicine } from "../models/medicine.js";

const createMedicine = async (request, response) => {
  try {
    const result = await Medicine.create({
      name: "Boloroo",
      email: "boloroo@email.com",
      password: "Boloroo123",
      phoneNumber: "99887766",
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
    const allMedicine = await Medicine.find();
    response.json({ success: true, result: allMedicine });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

export { createMedicine, getAllMedicine };
