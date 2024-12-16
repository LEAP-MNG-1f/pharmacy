import express from "express";
import { createAptek } from "../controllers/aptekController.js";

const aptekRouter = express.Router();

aptekRouter.post("/apteks", createAptek);
// aptekRouter.post("/admins", createAdmin);

export default aptekRouter;
