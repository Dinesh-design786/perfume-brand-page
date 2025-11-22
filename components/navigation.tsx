"use client"

import Link from "next/link"
import { useState } from "react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="font-serif text-2xl font-bold text-accent">Ventus Noble</h1>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/category/men"
              className="text-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              Men
            </Link>
            <Link
              href="/category/women"
              className="text-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              Women
            </Link>
            <Link
              href="/category/unisex"
              className="text-foreground hover:text-accent transition-colors text-sm font-medium"
            >
              Unisex
            </Link>
            <Link href="/story" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
              Story
            </Link>
            <Link href="/heritage" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
              Heritage
            </Link>
            <Link href="/concierge" className="text-foreground hover:text-accent transition-colors text-sm font-medium">
              Concierge
            </Link>
          </div>

          {/* CTA Button */}
          <Link
            href="/cart"
            className="px-6 py-2 bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity text-sm rounded"
          >
            Cart
          </Link>
        </div>
      </div>
    </nav>
  )
}
