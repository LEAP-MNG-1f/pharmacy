import express from "express";
import { createEm, getfilteredEm } from "../controllers/emController.js";

const emRouter = express.Router();

emRouter.post("/ems", createEm);
emRouter.get("/ems", getfilteredEm);

export default emRouter;
