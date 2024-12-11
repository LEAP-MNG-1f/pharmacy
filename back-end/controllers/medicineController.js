import { Medicine } from "../models/medicine.js";

const createMedicine = async (request, response) => {
  try {
    const result = await Medicine.create({
      name: "Adderall",
      categoryId: "6757b7f4658abbe8a2a585f2",
      price: "35000",
      balance: 1,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8HY5ixsrnRSONQxDlNiKIAitcXrC1_6TqAQ&s",
      location: "БЗД - 17 хороо, Улаанбаатар 13280",
      lat: "47.92929373542322",
      lng: "107.0053721134217",
    });
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

const getAllMedicine = async (rewuest, response) => {
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
