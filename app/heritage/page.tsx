"use client"

import Navigation from "@/components/navigation"
import CustomCursor from "@/components/custom-cursor"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"

export default function HeritagePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const timeline = [
    {
      year: "1823",
      location: "Grasse, France",
      title: "The Beginning",
      description:
        "Ventus Noble founded in the jasmine gardens of Grasse, where master perfumers first learned the language of scent. Our founder, Jean-Baptiste Ventus, established a legacy of uncompromising quality.",
      icon: "🌿",
    },
    {
      year: "1889",
      location: "London, England",
      title: "Royal Appointment",
      description:
        "Appointed as the official fragrance maker to the British Royal Family. Ventus Noble fragrances became synonymous with nobility, grace, and timeless elegance.",
      icon: "👑",
    },
    {
      year: "1952",
      location: "India",
      title: "The Spice Routes",
      description:
        "Established partnerships with saffron farmers in Kashmir and rose growers in Grasse. These rare ingredients became the heart of our most celebrated collections.",
      icon: "✨",
    },
    {
      year: "2024",
      location: "Global",
      title: "Modern Mastery",
      description:
        "Ventus Noble now serves connoisseurs across six continents. We remain committed to artisanal craftsmanship, sustainable sourcing, and the pursuit of olfactory perfection.",
      icon: "🌍",
    },
  ]

  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <CustomCursor />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background to-background/80">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6 text-accent text-balance">Our Heritage</h1>
          <p className="text-lg text-muted-foreground mb-8 font-light">
            Two centuries of masterful craftsmanship, from the jasmine gardens of Grasse to the drawing rooms of
            Mayfair.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-16">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`transform transition-all duration-700 ${
                  isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-8 items-start">
                  {/* Timeline connector */}
                  <div className="flex flex-col items-center">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    {index < timeline.length - 1 && (
                      <div className="w-1 h-24 bg-gradient-to-b from-accent/80 to-accent/20" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8 border-l border-accent/30 pl-8">
                    <div className="flex items-baseline gap-4 mb-2">
                      <h3 className="font-serif text-3xl font-bold text-accent">{item.year}</h3>
                      <p className="text-sm text-muted-foreground">{item.location}</p>
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="py-20 px-4 bg-background/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-center mb-12 text-accent">Our Global Presence</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 border border-border rounded-lg hover:border-accent transition-colors">
              <div className="text-5xl mb-4">🇫🇷</div>
              <h3 className="text-xl font-semibold mb-3 text-accent">Grasse, France</h3>
              <p className="text-muted-foreground">
                Our origin. Where the finest jasmine and rose absolutes are sourced from heritage gardens dating back to
                1823.
              </p>
            </div>

            <div className="bg-card p-8 border border-border rounded-lg hover:border-accent transition-colors">
              <div className="text-5xl mb-4">🇬🇧</div>
              <h3 className="text-xl font-semibold mb-3 text-accent">Mayfair, London</h3>
              <p className="text-muted-foreground">
                Our heart. Where British aristocracy meets French refinement. Royal appointments and bespoke
                consultations.
              </p>
            </div>

            <div className="bg-card p-8 border border-border rounded-lg hover:border-accent transition-colors">
              <div className="text-5xl mb-4">🇮🇳</div>
              <h3 className="text-xl font-semibold mb-3 text-accent">India, 2025</h3>
              <p className="text-muted-foreground">
                Our expansion. Bringing luxury to the connoisseurs of the East. Premium saffron, cardamom, and rare
                florals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
