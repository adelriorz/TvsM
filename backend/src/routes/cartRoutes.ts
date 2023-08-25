import { Router } from 'express'
import { createCart, getCartById, updateCart, deleteCart, getAllCarts } from '../controllers/cartController'

const router = Router()

router.post('/', createCart)
router.get('/:id', getCartById)
router.put('/:id', updateCart)
router.delete('/:id', deleteCart)
router.get('/', getAllCarts)

export default router
