"use client"

import Navigation from "@/components/navigation"
import CustomCursor from "@/components/custom-cursor"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"

export default function StoryPage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <CustomCursor />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6 text-accent text-balance">The Ventus Story</h1>
          <p className="text-xl text-muted-foreground font-light">
            Excellence is not an act, but a habit. We craft not just fragrances, but legacies.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transform transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <img
              src="/images/whatsapp-20image-202025-11-22-20at-2012.jpg"
              alt="Heritage perfume"
              className="rounded-lg border border-accent/20 shadow-2xl"
            />
          </div>

          <div
            className={`transform transition-all duration-700 ${
              isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h2 className="font-serif text-4xl font-bold mb-6 text-accent">Luxury That Endures</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              At Ventus Noble, we believe luxury should never be rushed. Every fragrance is conceived, crafted, and
              perfected over months of meticulous work. We source only the rarest ingredients from the world's most
              prestigious gardens.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our philosophy is simple: slow, deliberate, noble. No compromises. No shortcuts. Just pure, unadulterated
              olfactory artistry.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every bottle tells a story. Every scent carries the weight of centuries of expertise, blended into a
              moment of pure elegance.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-background/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-16 text-accent">Our Values</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 border border-border rounded-lg hover:border-accent transition-all hover:shadow-lg">
              <h3 className="font-serif text-2xl font-bold mb-4 text-accent">Heritage</h3>
              <p className="text-muted-foreground leading-relaxed">
                Two centuries of mastery in perfumery. From Grasse to Mayfair, our lineage speaks of uncompromising
                excellence and tradition.
              </p>
            </div>

            <div className="bg-card p-8 border border-border rounded-lg hover:border-accent transition-all hover:shadow-lg">
              <h3 className="font-serif text-2xl font-bold mb-4 text-accent">Craftsmanship</h3>
              <p className="text-muted-foreground leading-relaxed">
                Each fragrance is a masterpiece. Handcrafted by our family of master perfumers using only the finest
                natural and ethically sourced ingredients.
              </p>
            </div>

            <div className="bg-card p-8 border border-border rounded-lg hover:border-accent transition-all hover:shadow-lg">
              <h3 className="font-serif text-2xl font-bold mb-4 text-accent">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We create for the elite. Every decision—from ingredient selection to bottle design—reflects our
                commitment to absolute perfection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
