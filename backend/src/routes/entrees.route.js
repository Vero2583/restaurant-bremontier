import express from 'express'
import { createEntrees, getEntreesById, getEntrees, updateEntreesById, deleteEntreesById } from '../controllers/entrees.controller.js'




const router = express.Router();

router.get("/", getEntrees)
router.get("/:id", getEntreesById)
router.post("/",  createEntrees)
router.put("/:id", updateEntreesById)
router.delete("/:id", deleteEntreesById)



export default router;
