import { User } from "../models/user.js";

const createUser = async (request, response) => {
  try {
    const result = await User.create({
      name: "Sarnai",
      email: "Sarnai@email.com",
      password: "Sarnai123",
      phoneNumber: "88776655",
      role: "user",
    });
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

const getAllUser = async (request, response) => {
  try {
    const allUser = await User.find();
    response.json({ success: true, result: allUser });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

export { createUser, getAllUser };
