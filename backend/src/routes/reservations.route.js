import express from 'express'
import { getReservations, createReservations, updateReservationsById, getReservationsById } from '../controllers/reservations.controller.js'



const router = express.Router();

router.get('/', getReservations);
router.get('/:id', getReservationsById);
router.post('/', createReservations);
router.put('/:id', updateReservationsById)



export default router;