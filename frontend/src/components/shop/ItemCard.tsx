import { FC } from 'react'
import { Product } from '../../../../types/product.ts'
import { useNavigate } from 'react-router-dom'

interface ItemCardProps {
  product: Product
}

const ItemCard: FC<ItemCardProps> = ({ product }) => {
  const navigate = useNavigate()

  return (
    <div
      className="flex flex-col items-center bg-[#F8F8E4] border border-tvsm-orange w-[300px] h-[300px] p-6 rounded-2xl hover:cursor-pointer"
      onClick={() => navigate(`/shop/item/${product.id}`)}
    >
      <img
        src={`${import.meta.env.VITE_API_ENDPOINT as string}/${product.filePath}`}
        alt={product.name}
        className="w-[200px] h-[200px] block object-cover"
      />
      <div className="text-gray-500">{product.name}</div>
      {product.size && <div className="text-gray-500">Size: {product.size}</div>}
      <div className="text-gray-500">${product.price}</div>
    </div>
  )
}

export default ItemCard
