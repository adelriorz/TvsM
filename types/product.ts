type Category = 'ACCESSORIES' | 'TSHIRT' | 'KEYCHAIN' | 'OTHER'
type Size = 'SMALL' | 'MEDIUM' | 'LARGE' | 'XLARGE'

export type Product = {
  id: string
  name: string
  description: string
  category: Category
  size: Size
  price: number
  stockQty: number
  fileName: string
  filePath: string
}
