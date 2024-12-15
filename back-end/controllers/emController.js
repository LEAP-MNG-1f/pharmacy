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
  try {
    // Parse queryItems from the request query string
    const queryItems = JSON.parse(request.query.queryItems);

    // Validate input
    if (
      !Array.isArray(queryItems) ||
      !queryItems.every((item) => typeof item === "string")
    ) {
      return response
        .status(400)
        .json({ error: "queryItems must be an array of strings" });
    }

    // Find all documents matching the queryItems
    const allData = await Em.find({ name: { $in: queryItems } });

    // Group data by aptekId
    const groupedData = allData.reduce((acc, item) => {
      acc[item.aptekId] = acc[item.aptekId] || new Set();
      acc[item.aptekId].add(item.name);
      return acc;
    }, {});

    // Filter aptekIds that contain all queryItems
    const apteks = Object.keys(groupedData).filter((aptekId) =>
      queryItems.every((name) => groupedData[aptekId].has(name))
    );

    // Respond with the filtered apteks
    response.status(200).json({ apteks });
  } catch (error) {
    console.error("Error in getfilteredEm:", error);
    response.status(500).json({ error: "Internal server error" });
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
