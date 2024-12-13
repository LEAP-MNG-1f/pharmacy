import { Em } from "../models/emnuud.js";

const createEm = async (request, response) => {
  try {
    const result = await Em.create({
      name: "em 2",
      categoryId: "6757b809de2c80b9e65c89e3",
      aptekId: "675bac9ccc0a633b8f898b26",
      price: "15000",
      balance: 2,
    });
    response.json({ success: true, data: result });
  } catch (error) {
    response.json({
      success: false,
      error: error,
    });
  }
};

// const getfilteredEm = async (request, response) => {
//   const { searchValue } = request.query;
//   try {
//     const all = await Em.find().populate("aptekId");
//     const fiteredArray = all.filter((single) => {
//       for (let i = 0; i < searchValue.lenth; i++) {
//         searchVlue == single.name;
//       }
//     });
//     response.json({ success: true, result: all });
//   } catch (error) {
//     response.json({
//       success: false,
//       error: error,
//     });
//   }
// };

const getfilteredEm = async (request, response) => {
  const { searchValue } = request.query;
  try {
    const all = await Em.find().populate("aptekId");

    // Ensure searchValue is an array
    const searchTerms = Array.isArray(searchValue)
      ? searchValue
      : [searchValue];

    // Filter Em objects based on searchTerms
    const filteredArray = all.filter((single) => {
      // Check if the name contains all the search terms
      return searchTerms.every((term) => single.name.includes(term));
    });

    response.json({ success: true, result: filteredArray });
  } catch (error) {
    response.json({
      success: false,
      error: error.message,
    });
  }
};

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

export { createEm, getfilteredEm };
