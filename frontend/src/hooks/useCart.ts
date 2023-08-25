import { useState } from 'react'
import axiosInstance from '../services/axiosInstance.ts'
import { Cart } from '../../../types/cart.ts'

const useCart = () => {
  const [cartItems, setCartItems] = useState<Cart[]>([])

  const fetchCart = async () => {
    try {
      const response = await axiosInstance.get('/cart')
      setCartItems(response.data as Cart[])
    } catch (error) {
      console.error('Failed to fetch cart:', error)
    }
  }

  return { cartItems, fetchCart }
}

export default useCart
