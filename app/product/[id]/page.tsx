"use client"

import { useState } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import CustomCursor from "@/components/custom-cursor"
import Footer from "@/components/footer"

const products = [
  {
    id: 1,
    name: "Ventus Noble Rose",
    category: "women",
    description: "A romantic and delicate composition. Soft rose petals blended with berry accords.",
    longDescription:
      "Ventus Noble Rose is an exquisite celebration of femininity and elegance. Crafted in our Grasse atelier, this composition features premium Damask rose absolute combined with fresh peony and subtle berry notes. Each spray transports you to a blooming English garden during spring.",
    notes: "Top: Rose, Peony\nHeart: Red Berries, Lily\nBase: Musk, Sandalwood",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water, Benzyl Benzoate, Linalool, Geraniol, Cinnamyl Alcohol",
    volume: "100ml",
    priceINR: "₹37,500",
    image: "/images/noble-rose.jpg",
  },
  {
    id: 2,
    name: "Ventus Noble Jasmine",
    category: "women",
    description: "Luminous and airy. Crisp citrus with delicate white florals.",
    longDescription:
      "A luminous fragrance that captures the essence of a Mediterranean summer night. Ventus Noble Jasmine combines fresh lime with the most delicate Tuscan jasmine, creating a sophisticated and uplifting composition.",
    notes: "Top: Lime, Neroli\nHeart: Jasmine, Gardenia\nBase: Vanilla, Amber",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water, Citral, Linalool, Geraniol, Coumarin",
    volume: "100ml",
    priceINR: "₹37,500",
    image: "/images/noble-jasmine.jpg",
  },
  {
    id: 3,
    name: "Ventus Noble Ember",
    category: "men",
    description: "Warm and smoky. A sophisticated blend of oud and precious woods.",
    longDescription:
      "Ventus Noble Ember represents the essence of refined masculinity. A sophisticated blend of charred wood smoke and rich oud creates a warm, mysterious aura. This is fragrance for the man who values depth and complexity.",
    notes: "Top: Charcoal, Smoke\nHeart: Oud, Amber\nBase: Leather, Myrrh",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water, Coumarin, Cinnamyl Alcohol, Benzyl Cinnamate, Linalool",
    volume: "100ml",
    priceINR: "₹39,375",
    image: "/images/noble-ember.jpg",
  },
  {
    id: 4,
    name: "Ventus Noble Oud",
    category: "men",
    description: "Deep and mysterious. Rich oud with exotic spice and warmth.",
    longDescription:
      "A masterpiece of oriental perfumery. Ventus Noble Oud blends premium Cambodian oud with warm cardamom and clove, creating a deeply sensual and utterly sophisticated fragrance. Perfect for evening wear and special occasions.",
    notes: "Top: Cardamom, Clove\nHeart: Oud, Sandalwood\nBase: Vanilla, Amber",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water, Coumarin, Linalool, Cinnamyl Alcohol, Eugenol",
    volume: "100ml",
    priceINR: "₹41,250",
    image: "/images/noble-oud.jpg",
  },
  {
    id: 5,
    name: "Ventus Noble Amber",
    category: "unisex",
    description: "Golden and sensuous. Amber resin with warm spices and vanilla.",
    longDescription:
      "A unisex masterpiece that transcends traditional gender boundaries. Ventus Noble Amber combines warm amber resin with black pepper spice and creamy vanilla, creating a deeply sensual and universally appealing fragrance.",
    notes: "Top: Black Pepper\nHeart: Amber, Honey\nBase: Vanilla, Tonka",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water, Coumarin, Benzyl Benzoate, Linalool",
    volume: "100ml",
    priceINR: "₹39,375",
    image: "/images/noble-amber.jpg",
  },
  {
    id: 6,
    name: "Ventus Noble Ironwood",
    category: "men",
    description: "Bold and masculine. Industrial elegance meets natural woods.",
    longDescription:
      "A bold statement for the modern gentleman. Ventus Noble Ironwood combines industrial sophistication with natural cedarwood and charcoal smoke. This fragrance speaks of confidence, craftsmanship, and timeless elegance.",
    notes: "Top: Cedar, Smoke\nHeart: Ironwood, Incense\nBase: Charcoal, Leather",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water, Limonene, Linalool, Geraniol, Cinnamyl Alcohol",
    volume: "100ml",
    priceINR: "₹41,250",
    image: "/images/noble-ironwood.jpg",
  },
  {
    id: 7,
    name: "Ventus Noble Blossom",
    category: "women",
    description: "Elegant and refined. A bouquet of spring flowers with fruity undertones.",
    longDescription:
      "A refined floral composition celebrating the beauty of springtime. Ventus Noble Blossom features premium peony and magnolia blended with subtle red berries and a woody cedarwood base, creating an elegant and timeless fragrance.",
    notes: "Top: Peony, Magnolia\nHeart: Red Berries, Rose\nBase: Musk, Cedarwood",
    ingredients: "Alcohol Denat., Fragrance (Parfum), Water, Linalool, Geraniol, Coumarin, Benzyl Cinnamate",
    volume: "100ml",
    priceINR: "₹37,500",
    image: "/images/noble-blossom.jpg",
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number.parseInt(params.id))
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  if (!product) {
    return (
      <main className="bg-background text-foreground min-h-screen">
        <Navigation />
        <CustomCursor />
        <div className="flex items-center justify-center min-h-screen pt-20">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Product not found</h1>
            <Link href="/" className="text-accent hover:underline">
              Back to home
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const handleAddToCart = () => {
    console.log("[v0] Added to cart:", { product: product.name, quantity })
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <CustomCursor />

      <div className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-accent hover:underline mb-8 inline-block">
            ← Back to Collections
          </Link>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="flex items-center justify-center bg-card rounded-lg p-8">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-auto max-h-96" />
            </div>

            {/* Product Details */}
            <div>
              <p className="text-accent font-semibold mb-2 uppercase text-sm">
                {product.category === "men" ? "Men's" : product.category === "women" ? "Women's" : "Unisex"} Collection
              </p>
              <h1 className="font-serif text-5xl font-bold mb-4">{product.name}</h1>
              <p className="text-3xl font-bold text-accent mb-6">{product.priceINR}</p>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{product.longDescription}</p>

              {/* Quantity & Add to Cart */}
              <div className="flex gap-4 mb-8">
                <div className="flex items-center gap-4 border border-muted rounded px-4 py-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-accent hover:opacity-70"
                  >
                    −
                  </button>
                  <span className="font-semibold">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="text-accent hover:opacity-70">
                    +
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 px-8 py-3 bg-accent text-background font-semibold hover:opacity-90 transition-opacity rounded"
                >
                  {addedToCart ? "Added to Cart ✓" : "Add to Cart"}
                </button>
              </div>

              {/* Fragrance Notes */}
              <div className="bg-card border border-muted rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-accent mb-3">Fragrance Notes</h3>
                <p className="text-sm text-muted-foreground whitespace-pre-line">{product.notes}</p>
              </div>

              {/* Ingredients */}
              <div className="bg-card border border-muted rounded-lg p-6">
                <h3 className="font-semibold text-accent mb-3">Ingredients</h3>
                <p className="text-sm text-muted-foreground">{product.ingredients}</p>
              </div>
            </div>
          </div>

          {/* Product Description */}
          <div className="bg-card border border-muted rounded-lg p-8">
            <h2 className="font-serif text-3xl font-bold mb-4">About This Fragrance</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">{product.longDescription}</p>
            <div className="grid md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-muted">
              <div>
                <h3 className="font-semibold text-accent mb-2">Volume</h3>
                <p className="text-muted-foreground">{product.volume}</p>
              </div>
              <div>
                <h3 className="font-semibold text-accent mb-2">Category</h3>
                <p className="text-muted-foreground">
                  {product.category === "men" ? "Men's" : product.category === "women" ? "Women's" : "Unisex"}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-accent mb-2">Heritage</h3>
                <p className="text-muted-foreground">Since 1896, Grasse</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
