import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const createProduct = async (req: Request, res: Response) => {
  const { name, description, category, size, price, stockQty } = req.body
  if (req.file == null) {
    return res.status(400).json({ error: 'Image is required' })
  }
  const { originalname: fileName, path: filePath } = req.file

  try {
    const baseData = {
      name,
      description,
      category,
      price: parseInt(price),
      stockQty: parseInt(stockQty),
      fileName,
      filePath,
    }
    const product = await prisma.product.create({
      data: size
        ? {
            ...baseData,
            size,
          }
        : baseData,
    })

    res.json(product)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await prisma.product.findMany()
    res.json(products)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const product = await prisma.product.findUnique({ where: { id } })
    if (product) {
      res.json(product)
    } else {
      res.status(404).json({ error: 'Product not found' })
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const product = await prisma.product.update({
      where: { id },
      data: req.body,
    })
    res.json(product)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const product = await prisma.product.delete({ where: { id } })
    res.json(product)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}
