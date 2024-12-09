import { Admin } from "../models/admin.js";

const createAdmin = async (request, response) => {
  try {
    const result = await Admin.create({
      name: "Badamaa",
      email: "badamaa@email.com",
      password: "Badamaa123",
      phoneNumber: "77668899",
      role: "admin",
    });
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

const getAllAdmin = async (request, response) => {
  try {
    const allAdmin = await Admin.find();
    response.json({ success: true, result: allAdmin });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

export { createAdmin, getAllAdmin };
