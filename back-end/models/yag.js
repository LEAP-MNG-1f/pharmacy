import mongoose from "mongoose";

const yagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  categoryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
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
});

export const Yag = mongoose.model("Yag", yagSchema);
