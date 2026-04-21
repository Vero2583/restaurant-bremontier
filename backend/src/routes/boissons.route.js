import express from 'express'
import { getBoissons, createBoissons, updateBoissonsById, getBoissonsById } from '../controllers/boissons.controller.js'



const router = express.Router();

router.get('/', getBoissons);
router.get('/:id', getBoissonsById);
router.post('/', createBoissons);
router.put('/:id', updateBoissonsById)



export default router;