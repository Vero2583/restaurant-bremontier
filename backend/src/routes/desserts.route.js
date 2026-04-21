import express from "express"
import { getDesserts, getDessertsById, createDesserts, updateDessertsById } from "../controllers/desserts.controller";



const router = express.Router();

router.get('/', getDesserts);
router.get('/:id', getDessertsById);
router.post('/', createDesserts);
router.put('/:id', updateDessertsById)



export default router;