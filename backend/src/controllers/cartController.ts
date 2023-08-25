import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const createCart = async (req: Request, res: Response) => {
  const { userId, productId, quantity } = req.body
  try {
    const cart = await prisma.cart.create({
      data: { userId, productId, quantity },
    })
    res.json(cart)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export const getCartById = async (req: Request, res: Response) => {
  try {
    const cart = await prisma.cart.findUnique({
      where: { id: req.params.id },
      include: { product: true },
    })
    res.json(cart)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export const updateCart = async (req: Request, res: Response) => {
  try {
    const cart = await prisma.cart.update({
      where: { id: req.params.id },
      data: req.body,
    })
    res.json(cart)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export const deleteCart = async (req: Request, res: Response) => {
  try {
    const cart = await prisma.cart.delete({
      where: { id: req.params.id },
    })
    res.json(cart)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}

export const getAllCarts = async (_: Request, res: Response) => {
  try {
    const carts = await prisma.cart.findMany({
      include: { product: true },
    })
    res.json(carts)
  } catch (error: any) {
    res.status(400).json({ error: error.message })
  }
}
