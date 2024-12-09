import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema({
  name: {
    type: String,
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
  image: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  lat: {
    type: Number,
    required: true,
  },
  lng: {
    type: Number,
    required: true,
  },
  recipeType: {
    type: String,
    enum: ["prescribed", "notprescribed"],
    default: "prescribed",
  },
});

export const Medicine = mongoose.model("Medicine", medicineSchema);
