import { Admin } from "../models/admin.js";

const createAdmin = async (request, response) => {
  try {
    const result = await Admin.create({
      name: "Sarnai",
      email: "sarnai@email.com",
      password: "Sarnai123",
      phoneNumber: "99445566",
    });
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

const getAllAdmin = async () => {
  try {
    const allAdmin = Admin.find();
    response.json({ success: true, result: allAdmin });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

export { createAdmin, getAllAdmin };
