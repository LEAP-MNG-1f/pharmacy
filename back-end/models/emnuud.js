import mongoose from "mongoose";

const emiinSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
    required: true,
  },
  aptekId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Aptek",
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    required: true,
  },
  recipeType: {
    type: String,
    enum: ["prescribed", "notprescribed"],
    default: "prescribed",
  },
});

export const Em = mongoose.model("Em", emiinSchema);
