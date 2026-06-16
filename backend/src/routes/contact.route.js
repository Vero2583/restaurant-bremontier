import express from "express";
import { createContact } from "../controllers/contact.controller.js";

const router = express.Router();

// /api/contact déjà présent
router.post("/", createContact);

export default router;
