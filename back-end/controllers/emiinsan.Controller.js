import { Emiinsan } from "../models/emiinsan.js";

const createEmiinsan = async (request, response) => {
  try {
    const result = await Emiinsan.create({
      name: "emiin san",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNQTXhJ8o2sLv_yqmia4s5XLkOZU1uOGsd8w&s",
      location:
        "Хүүхдийн урлан бүтээх төв, Metro mall-н урд, Бага тойруу, Ulaanbaatar",
      lat: 47.92618381773358,
      lng: 106.91598332124309,
      emsId: ["675edc0441ebda3cd8676e2e", "675edc52519d64389e47f14d"],
    });
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};
const getAllEmiinsan = async (request, response) => {
  try {
    const result = await Emiinsan.find().populate("emsId");

    response.json({ success: true, data: result });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

export { createEmiinsan, getAllEmiinsan };
