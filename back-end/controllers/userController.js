import { User } from "../models/user.js";

const createUser = async (request, response) => {
  try {
    const result = await User.create({
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

const getAllUser = async () => {
  try {
    const allUser = User.find();
    response.json({ success: true, result: allUser });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

export { createUser, getAllUser };
