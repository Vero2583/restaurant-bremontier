import express from 'express'
import { getMenus, createMenus, updateMenusById, getMenusById } from '../controllers/menus.controller.js'



const router = express.Router();

router.get('/', getMenus);
router.get('/:id', getMenusById);
router.post('/', createMenus);
router.put('/:id', updateMenusById)



export default router;