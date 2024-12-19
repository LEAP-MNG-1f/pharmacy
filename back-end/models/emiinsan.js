import mongoose from "mongoose";

const emiinsanSchema = new mongoose.Schema({
  name: {
    type: String,
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
  phone: {
    type: String,
  },
  workingHours: {
    type: String,
  },
  emsId: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Yag",
      required: true,
    },
  ],
});

export const Emiinsan = mongoose.model("emiinsanSchema", emiinsanSchema);
