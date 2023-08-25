import { Product } from './product'

type Cart = {
  id: string
  userId: string
  product: Product
  productId: string
  quantity: number
}

export type { Cart }
