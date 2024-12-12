import { Medicine } from "../models/medicine.js";

const createMedicine = async (request, response) => {
  try {
    const result = await Medicine.create({
      name: "Vitamin D 100",
      categoryId: "6757b8206c8c791974a24742",
      price: "55000",
      balance: 2,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzfX3Tp8M9BMYgqPWBehmkJDbFLUjQUTPUw&s",
      location: "Гачууртын Зам 19, БЗД - 20 хороо, Гачуурт, Улаанбаатар 13221",
      lat: "47.92559096519269",
      lng: "107.14157922953537",
    });
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

const getAllMedicine = async (request, response) => {
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
const deleteMedicine = async (request, response) => {
  const { _id } = body.request;

  try {
    const allMedicine = await Medicine?.find();
    const leftMedicine = allMedicine?.filter((medicine) => {
      medicine?._id !== _id;
    });

    response.json({
      success: true,
      result: leftMedicine,
    });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

export { createMedicine, getAllMedicine, deleteMedicine };
