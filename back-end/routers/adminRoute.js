import express from "express";
import { createAdmin, getAllAdmin } from "../controllers/adminController.js";

const adminRouter = express.Router();

adminRouter.get("/admins", getAllAdmin);
adminRouter.post("/admins", createAdmin);

export default adminRouter;
