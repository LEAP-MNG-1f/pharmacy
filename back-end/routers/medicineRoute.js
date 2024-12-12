import express from "express";
import {
  createMedicine,
  deleteMedicine,
  getAllMedicine,
} from "../controllers/medicineController.js";

const medicineRouter = express.Router();

medicineRouter.get("/medicines", getAllMedicine);
medicineRouter.post("/medicines", createMedicine);
medicineRouter.delete("/medicines", deleteMedicine);

export default medicineRouter;
