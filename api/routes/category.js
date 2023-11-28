import express from "express";
import { getCategorys } from "../controllers/categoryController.js";

const router = express.Router();

router.get("/get", getCategorys);

export default router;
