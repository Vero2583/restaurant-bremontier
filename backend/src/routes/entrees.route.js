import express from 'express'
import { createEntrees } from '../controllers/entrees.controller.js'




const router = express.Router();

//router.get("/", getAllergenes)
//router.get("/:id", getAllergenesById)
router.post("/",  createEntrees)
//router.put("/:id", authMiddleware, updateAllergenesById)
//router.put("/:id", authMiddleware, deleteAllergenesById)






export default router;
