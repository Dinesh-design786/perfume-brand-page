"use client"

import type React from "react"

import Navigation from "@/components/navigation"
import CustomCursor from "@/components/custom-cursor"
import Footer from "@/components/footer"
import { useState } from "react"

export default function ConciergePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "unisex",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your interest. Our concierge will contact you shortly.")
    setFormData({ name: "", email: "", category: "unisex", message: "" })
  }

  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <CustomCursor />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-background via-secondary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-6xl md:text-7xl font-bold mb-6 text-accent text-balance">
            Personal Concierge Service
          </h1>
          <p className="text-xl text-muted-foreground font-light">
            Bespoke fragrance experiences tailored exclusively for you.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 border border-border rounded-lg hover:border-accent transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Private Consultation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Meet with our master perfumers in our Mayfair salon or virtually. Discover your signature scent through
                personalized guidance.
              </p>
            </div>

            <div className="bg-card p-8 border border-border rounded-lg hover:border-accent transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Bespoke Creation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Commission a custom fragrance crafted exclusively for you. Our perfumers will work with you to create an
                olfactory masterpiece.
              </p>
            </div>

            <div className="bg-card p-8 border border-border rounded-lg hover:border-accent transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Seasonal Collections</h3>
              <p className="text-muted-foreground leading-relaxed">
                First access to limited-edition releases. Receive curated fragrances based on your preferences before
                the general public.
              </p>
            </div>

            <div className="bg-card p-8 border border-border rounded-lg hover:border-accent transition-colors">
              <h3 className="text-2xl font-semibold mb-4 text-accent">Gift Curation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Let us create the perfect fragrance gift. Our concierge will help you select or design the ideal present
                for your loved ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-background/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl font-bold mb-12 text-center text-accent">Begin Your Journey</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-input border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Fragrance Preference</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-input border border-border rounded text-foreground focus:outline-none focus:border-accent"
              >
                <option value="men">Men</option>
                <option value="women">Women</option>
                <option value="unisex">Unisex</option>
                <option value="bespoke">Bespoke Creation</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Tell us about yourself</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-input border border-border rounded text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent resize-none"
                placeholder="Share your fragrance preferences, interests, or any questions..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity rounded"
            >
              Request Concierge Service
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
