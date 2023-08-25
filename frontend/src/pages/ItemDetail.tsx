import { FC, useState } from 'react'
import useProduct from '../hooks/useProduct.ts'
import Header from '../components/common/Header.tsx'
import Footer from '../components/common/Footer.tsx'
import axiosInstance from '../services/axiosInstance.ts'

const ItemDetail: FC = () => {
  const { product, loading, error } = useProduct()
  const [quantity, setQuantity] = useState(1)
  const [savedMessage, setSavedMessage] = useState<string | null>(null)

  const handleAddToCart = async () => {
    try {
      const response = await axiosInstance.post('/cart', {
        // TODO: fix this after login feature is implemented
        userId: 'a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6',
        productId: product!.id,
        quantity,
      })
      console.log('Product added successfully!', response.data)
      setSavedMessage('Added!')
    } catch (error) {
      console.error('Error adding product:', error)
      setSavedMessage(null)
    }
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error}</p>
  if (!product) return <p>No product found.</p>

  return (
    <>
      <Header />
      <div className="h-screen">
        <div className="flex justify-center items-center h-[120px] mb-20">
          <h1 className="text-4xl font-ldr-kaet">SHOP</h1>
        </div>
        <div className="flex justify-center gap-14">
          <div className="flex flex-col justify-center items-center bg-[#F8F8E4] border border-tvsm-orange w-[300px] h-[300px] p-6 rounded-2xl hover:cursor-pointer">
            <img
              src={`${import.meta.env.VITE_API_ENDPOINT as string}/${product.filePath}`}
              alt={product.name}
              className="w-[200px] h-[200px] block object-cover"
            />
          </div>
          <div className="flex flex-col gap-4">
            <div>
              <span className="font-bold">Product Name:</span> {product.name}
            </div>
            <div>
              <span className="font-bold">Description:</span> {product.description}
            </div>
            {product.size && (
              <div>
                <span className="font-bold">Size:</span> {product.size}
              </div>
            )}
            <label>
              QTY:
              <input
                type="number"
                className="border border-tvsm-orange rounded-md w-[60px] h-[40px] ml-2 text-center p-3"
                value={quantity}
                onChange={e => setQuantity(parseInt(e.target.value))}
              />
            </label>
            <button className="w-[200px] h-[40px] bg-tvsm-orange text-tvsm-white rounded-md" onClick={handleAddToCart}>
              ADD TO CART
            </button>
            {savedMessage && <div className="text-tvsm-orange">{savedMessage}</div>}
          </div>
        </div>
        <div className="flex justify-center items-center h-[120px] mt-28">
          <h1 className="text-4xl font-ldr-kaet">YOU ALSO MAY LIKE</h1>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ItemDetail
