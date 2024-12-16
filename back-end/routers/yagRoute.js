import express from "express";
import { createYag, getAllYag } from "../controllers/yagController.js";

const yagRouter = express.Router();

yagRouter.get("/yags", getAllYag);
yagRouter.post("/yags", createYag);

export default yagRouter;
