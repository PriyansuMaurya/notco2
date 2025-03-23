"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart } from "lucide-react"
import { useCart } from "../contexts/CartContext"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { getCartCount } = useCart()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-green-600">NOTCO2</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
            <AuthButtons />
            <CartButton count={getCartCount()} />
          </div>
          <div className="md:hidden flex items-center space-x-4">
            <CartButton count={getCartCount()} />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-green-50">
          <div className="px-4 pt-4 pb-3 space-y-2">
            <NavLinks mobile />
          </div>
          <div className="px-4 pt-4 pb-6 border-t border-green-200">
            <div className="space-y-2">
              <AuthButtons mobile />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const linkClass = mobile
    ? "block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
    : "text-gray-500 hover:text-gray-700 px-3 py-2 rounded-md text-sm font-medium"

  return (
    <>
      <Link href="/" className={linkClass}>
        Home
      </Link>
      <Link href="/about" className={linkClass}>
        About Us
      </Link>
      <Link href="/products" className={linkClass}>
        Products
      </Link>
      <Link href="/contact" className={linkClass}>
        Contact
      </Link>
    </>
  )
}

const AuthButtons = ({ mobile = false }: { mobile?: boolean }) => {
  return (
    <>
     <div className={`flex ${mobile ? "flex-col" : "items-center space-x-4"}`}>
  <Link href="/login">
    <Button variant={mobile ? "default" : "ghost"} className={mobile ? "w-full justify-start" : ""}>
      Log In
    </Button>
  </Link>
  <Link href="/signup">
    <Button variant="default" className={mobile ? "w-full justify-start" : ""}>
      Sign Up
    </Button>
  </Link>
</div>

    </>
  )
}

const CartButton = ({ count }: { count: number }) => {
  return (
    <Link href="/cart">
      <Button variant="ghost" className="relative">
        <ShoppingCart className="h-5 w-5" />
        {count > 0 && (
          <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
            {count}
          </span>
        )}
      </Button>
    </Link>
  )
}

export default Navbar

