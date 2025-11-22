"use client"
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

const categoryInfo = {
  men: {
    title: "Men's Collection",
    description: "Sophisticated fragrances crafted for the discerning gentleman. Bold, confident, timeless.",
  },
  women: {
    title: "Women's Collection",
    description: "Elegant fragrances that celebrate femininity and grace. Romantic, refined, captivating.",
  },
  unisex: {
    title: "Unisex Collection",
    description: "Fragrances that transcend gender. Universal elegance for the modern individual.",
  },
}

export default function CategoryPage({ params }: { params: { type: string } }) {
  const categoryType = params.type.toLowerCase() as "men" | "women" | "unisex"
  const categoryProducts = products.filter((p) => p.category === categoryType)
  const info = categoryInfo[categoryType]

  if (!info) {
    return (
      <main className="bg-background text-foreground min-h-screen">
        <Navigation />
        <CustomCursor />
        <div className="flex items-center justify-center min-h-screen pt-20">
          <div className="text-center">
            <h1 className="font-serif text-4xl font-bold mb-4">Category not found</h1>
            <Link href="/" className="text-accent hover:underline">
              Back to home
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <CustomCursor />

      <div className="pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="text-accent hover:underline mb-8 inline-block">
            ← Back to home
          </Link>

          {/* Category Header */}
          <div className="text-center mb-16">
            <h1 className="font-serif text-6xl md:text-7xl font-bold mb-4">{info.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{info.description}</p>
          </div>

          {/* Products Grid */}
          {categoryProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {categoryProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/product/${product.id}`}
                  className="group cursor-pointer transition-all duration-300 hover:scale-105"
                >
                  <div className="relative bg-card rounded-lg overflow-hidden mb-4 h-80">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-accent font-semibold">{product.priceINR}</span>
                    <span className="text-sm text-muted-foreground">{product.volume}</span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No products in this category.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}
