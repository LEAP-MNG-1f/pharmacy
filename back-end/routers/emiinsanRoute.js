import express from "express";
import {
  createEmiinsan,
  getAllEmiinsan,
} from "../controllers/emiinsan.Controller.js";

const emiinsanRouter = express.Router();

emiinsanRouter.get("/emiinsans", getAllEmiinsan);
emiinsanRouter.post("/emiinsans", createEmiinsan);

export default emiinsanRouter;
