import mongoose from "mongoose";

const paymentEnum = {
  values: ["Card", "Cash"],
};

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
  orderNumber: {
    type: Number,
    required: true,
  },
  medicineIds: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Medicine",
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
    enum: paymentEnum,
  },
});

export const Order = mongoose.model("Order", orderSchema);
