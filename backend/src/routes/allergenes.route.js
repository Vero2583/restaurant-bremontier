import express from 'express'
import { createAllergenes, getAllergenes, getAllergenesById, updateAllergenesById, deleteAllergenesById } from '../controllers/allergenes.controller.js'



const router = express.Router();

router.get("/", getAllergenes)
router.get("/:id", getAllergenesById)
router.post("/", createAllergenes)
router.put("/:id", updateAllergenesById)
router.put("/:id", deleteAllergenesById)






export default router;