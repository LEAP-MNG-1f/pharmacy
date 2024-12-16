import { Aptek } from "../models/aptek.js";

const createAptek = async (request, response) => {
  try {
    const result = await Aptek.create({
      name: "Emiin san 2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0RLruvxGEK8pU4HQpo5mi04ZIzGjNxni8iw&s",
      location: "shd 1 khorooo 88",
      lat: "47.91907821038292",
      lng: "106.90856725297219",
    });
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

// const getAllAptek = async (request, response) => {
//   try {
//     const allAptek = await Aptek.find().populate("");
//     response.json({ success: true, result: allCategory });
//   } catch (error) {
//     response.json({
//       success: false,
//       error: error,
//     });
//   }
// };
// const deleteCategory = async (request, response) => {
//   const { _id } = body.request;
//   try {
//     const allCategory = await Category.find();
//     const leftCategory = allCategory.filter((category) => {
//       category?._id !== _id;
//     });
//     response.json({ success: true, result: leftCategory });
//   } catch (error) {
//     response.json({
//       success: false,
//       error: error,
//     });
//   }
// };

export { createAptek };
