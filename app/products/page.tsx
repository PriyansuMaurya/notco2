"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useCart } from "../contexts/CartContext"

const products = [
  {
    id: 1,
    name: "Reusable Water Bottle",
    description: "Durable, BPA-free water bottle that keeps drinks cold for 24 hours.",
    price: 25.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Bamboo Cutlery Set",
    description: "Portable, eco-friendly cutlery set made from sustainable bamboo.",
    price: 15.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Organic Cotton Tote Bag",
    description: "Sturdy, reusable shopping bag made from 100% organic cotton.",
    price: 12.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Solar-Powered Charger",
    description: "Compact solar charger for your devices, perfect for outdoor adventures.",
    price: 39.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Beeswax Food Wraps",
    description: "Reusable, biodegradable alternative to plastic wrap for food storage.",
    price: 18.99,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Recycled Plastic Backpack",
    description: "Durable backpack made from recycled ocean plastics.",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function ProductsPage() {
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (product: (typeof products)[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    })
    toast({
      title: "Product added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-8">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64">
              <Image src={product.image || "/placeholder.svg"} alt={product.name} layout="fill" objectFit="cover" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-green-600">${product.price.toFixed(2)}</span>
                <Button onClick={() => handleAddToCart(product)}>Add to Cart</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

