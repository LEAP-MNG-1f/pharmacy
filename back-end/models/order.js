import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  orderNumber: {
    type: String,
    required: true,
  },
  image_jor: {
    type: String,
  },
  medicineIds: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Yag",
      required: true,
    },
  ],
  totalPrice: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  district: {
    type: String,
    required: true,
  },
  khoroo: {
    type: String,
    required: true,
  },
  apartment: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  information: {
    type: String,
    required: true,
  },
  paymentType: {
    type: String,
    default: "Card",
  },
});

export const Order = mongoose.model("Order", orderSchema);
