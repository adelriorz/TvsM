import { FC } from 'react'
import ItemCard from '../components/shop/ItemCard.tsx'
import useFetchProducts from '../hooks/useFetchProducts.ts'
import Header from '../components/common/Header.tsx'
import Footer from '../components/common/Footer.tsx'

const Shop: FC = () => {
  const { products, loading, error } = useFetchProducts()

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <>
      <Header />
      <div className="h-[120px] flex justify-center items-center">
        <h1 className="text-4xl font-ldr-kaet">SHOP</h1>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-ldr-kaet">T-SHIRTS</h2>
        <div className="grid grid-cols-3 gap-12">
          {products
            .filter(product => product.category === 'TSHIRT')
            .map((product, index) => (
              <ItemCard key={index} product={product} />
            ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-ldr-kaet">KEYCHAINS</h2>
        <div className="grid grid-cols-3 gap-12">
          {products
            .filter(product => product.category === 'KEYCHAIN')
            .map((product, index) => (
              <ItemCard key={index} product={product} />
            ))}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-3xl font-ldr-kaet">GAMES/GAMING ACCESSORIES</h2>
        <div className="grid grid-cols-3 gap-12">
          {products
            .filter(product => product.category === 'ACCESSORIES')
            .map((product, index) => (
              <ItemCard key={index} product={product} />
            ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Shop
