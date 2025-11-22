"use client"

import { useState } from "react"
import Link from "next/link"

export default function Products() {
  const [activeProduct, setActiveProduct] = useState(0)
  const [filterCategory, setFilterCategory] = useState("all")

  const products = [
    {
      id: 1,
      name: "Ventus Noble Rose",
      category: "women",
      description: "A romantic and delicate composition. Soft rose petals blended with berry accords.",
      notes: "Top: Rose, Peony\nHeart: Red Berries, Lily\nBase: Musk, Sandalwood",
      volume: "100ml",
      priceINR: "₹37,500",
      image: "/images/noble-rose.jpg",
    },
    {
      id: 2,
      name: "Ventus Noble Jasmine",
      category: "women",
      description: "Luminous and airy. Crisp citrus with delicate white florals.",
      notes: "Top: Lime, Neroli\nHeart: Jasmine, Gardenia\nBase: Vanilla, Amber",
      volume: "100ml",
      priceINR: "₹37,500",
      image: "/images/noble-jasmine.jpg",
    },
    {
      id: 3,
      name: "Ventus Noble Ember",
      category: "men",
      description: "Warm and smoky. A sophisticated blend of oud and precious woods.",
      notes: "Top: Charcoal, Smoke\nHeart: Oud, Amber\nBase: Leather, Myrrh",
      volume: "100ml",
      priceINR: "₹39,375",
      image: "/images/noble-ember.jpg",
    },
    {
      id: 4,
      name: "Ventus Noble Oud",
      category: "men",
      description: "Deep and mysterious. Rich oud with exotic spice and warmth.",
      notes: "Top: Cardamom, Clove\nHeart: Oud, Sandalwood\nBase: Vanilla, Amber",
      volume: "100ml",
      priceINR: "₹41,250",
      image: "/images/noble-oud.jpg",
    },
    {
      id: 5,
      name: "Ventus Noble Amber",
      category: "unisex",
      description: "Golden and sensuous. Amber resin with warm spices and vanilla.",
      notes: "Top: Black Pepper\nHeart: Amber, Honey\nBase: Vanilla, Tonka",
      volume: "100ml",
      priceINR: "₹39,375",
      image: "/images/noble-amber.jpg",
    },
    {
      id: 6,
      name: "Ventus Noble Ironwood",
      category: "men",
      description: "Bold and masculine. Industrial elegance meets natural woods.",
      notes: "Top: Cedar, Smoke\nHeart: Ironwood, Incense\nBase: Charcoal, Leather",
      volume: "100ml",
      priceINR: "₹41,250",
      image: "/images/noble-ironwood.jpg",
    },
    {
      id: 7,
      name: "Ventus Noble Blossom",
      category: "women",
      description: "Elegant and refined. A bouquet of spring flowers with fruity undertones.",
      notes: "Top: Peony, Magnolia\nHeart: Red Berries, Rose\nBase: Musk, Cedarwood",
      volume: "100ml",
      priceINR: "₹37,500",
      image: "/images/noble-blossom.jpg",
    },
  ]

  const filteredProducts = filterCategory === "all" ? products : products.filter((p) => p.category === filterCategory)

  return (
    <section className="py-20 px-4 md:px-8 bg-background" id="products">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-center">The Collection</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Each fragrance in our collection tells a story of refinement and exclusivity.
        </p>

        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {["all", "men", "women", "unisex"].map((category) => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-6 py-2 rounded font-medium transition-all ${
                filterCategory === category
                  ? "bg-accent text-accent-foreground"
                  : "border border-accent text-accent hover:bg-accent/10"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredProducts.map((product, idx) => (
            <div
              key={product.id}
              onClick={() => setActiveProduct(products.indexOf(product))}
              className={`cursor-pointer transition-all duration-300 ${
                activeProduct === products.indexOf(product)
                  ? "scale-105 ring-2 ring-accent"
                  : "scale-95 opacity-70 hover:opacity-100"
              }`}
            >
              <div className="relative bg-card rounded-lg overflow-hidden mb-4 h-64">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
              </div>
              <h3 className="font-serif text-lg font-bold mb-2">{product.name}</h3>
              <p className="text-sm text-muted-foreground">{product.volume}</p>
            </div>
          ))}
        </div>

        {/* Featured product details */}
        <div className="bg-card rounded-lg p-8 md:p-12 border border-muted">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="font-serif text-4xl font-bold mb-4">{products[activeProduct].name}</h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {products[activeProduct].description}
              </p>
              <div className="mb-8">
                <h4 className="font-semibold mb-3 text-accent">Fragrance Notes</h4>
                <p className="text-sm text-muted-foreground whitespace-pre-line font-light">
                  {products[activeProduct].notes}
                </p>
              </div>
              <div className="flex justify-between items-center gap-4 flex-wrap">
                <span className="font-serif text-3xl font-bold text-accent">{products[activeProduct].priceINR}</span>
                <Link
                  href={`/product/${products[activeProduct].id}`}
                  className="px-8 py-3 bg-accent text-background font-medium hover:opacity-90 transition-opacity rounded inline-block"
                >
                  View Details
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <img
                src={products[activeProduct].image || "/placeholder.svg"}
                alt={products[activeProduct].name}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
