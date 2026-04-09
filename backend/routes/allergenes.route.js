import express from 'express'
import { createAllergenes, getALLlergenes, getAllergenesById, updateAllergenesById, deleteAllergenesById } from '../controllers/allergenes.controller.js'
import { authMiddleware } from '../middlewares/auth.middleware.js';


const router = express.Router();

router.get("/", getALLlergenes)
router.get("/:id", getAllergenesById)
router.post("/", authMiddleware,  createAllergenes)
router.put("/:id", authMiddleware, updateAllergenesById)
router.put("/:id", authMiddleware, deleteAllergenesById)






export default router;