import express from "express";
import { getPlats, getPlatsById, createPlats, updatePlatsById } from "../controllers/plats.controller";




const router = express.Router();

router.get('/', getPlats);
router.get('/:id', getPlatsById);
router.post('/', createPlats);
router.put('/:id', updatePlatsById)



export default router;