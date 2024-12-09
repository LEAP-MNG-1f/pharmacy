import express from "express";
import {
  createMedicine,
  getAllMedicine,
} from "../controllers/medicineController.js";

const medicineRouter = express.Router();

medicineRouter.get("/medicines", getAllMedicine);
medicineRouter.post("/medicines", createMedicine);

export default medicineRouter;
