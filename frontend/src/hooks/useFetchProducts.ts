import { useState, useEffect } from 'react'
import axiosInstance from '../services/axiosInstance.ts'
import { Product } from '../../../types/product.ts'

const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get('/products')
        setProducts(response.data as Product[])
        setLoading(false)
      } catch (err) {
        setError('Failed to fetch products.')
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { products, loading, error }
}

export default useFetchProducts
