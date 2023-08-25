import express from 'express'
import cors from 'cors'
import productRoutes from './routes/productRoutes'
import cartRoutes from './routes/cartRoutes'
import path from 'path'

const app = express()

app.use(express.json())
app.use(cors())
app.use('/uploads', express.static(path.join(__dirname, '../uploads')))
app.use('/products', productRoutes)
app.use('/cart', cartRoutes)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
