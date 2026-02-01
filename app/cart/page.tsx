"use client"

import Link from "next/link"
import Navigation from "@/components/navigation"
import CustomCursor from "@/components/custom-cursor"
import Footer from "@/components/footer"
import { useState } from "react"

export default function CartPage() {
  const [cartItems] = useState<any[]>([])

  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navigation />
      <CustomCursor />

      <div className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-accent hover:underline mb-8 inline-block">
            ← Continue Shopping
          </Link>

          <h1 className="font-serif text-5xl font-bold mb-12">Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="bg-card rounded-lg p-12 text-center border border-muted">
              <p className="text-muted-foreground text-xl mb-6">Your cart is empty</p>
              <p className="text-muted-foreground mb-8">
                Explore our collections and add your favorite fragrances to your cart.
              </p>
              <Link
                href="/"
                className="px-8 py-3 bg-accent text-background font-medium hover:opacity-90 transition-opacity rounded inline-block"
              >
                Explore Collections
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">{/* Cart items would go here */}</div>
              <div className="bg-card rounded-lg p-6 border border-muted h-fit">
                <h2 className="font-serif text-2xl font-bold mb-6">Order Summary</h2>
                <div className="space-y-4 border-t border-muted pt-4">
                  <button className="w-full px-8 py-3 bg-accent text-background font-semibold hover:opacity-90 transition-opacity rounded">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
