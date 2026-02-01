"use client"

import type React from "react"
import { useState } from "react"

export default function Concierge() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    category: "men",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ firstName: "", lastName: "", email: "", phone: "", category: "men", message: "" })
    }, 3000)
  }

  return (
    <section className="py-20 px-4 md:px-8 bg-background" id="concierge">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4 text-center">Personal Concierge</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
          Experience bespoke fragrance consultation from our heritage experts. Our concierge team will guide you through
          our collections and help you discover your signature scent.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card rounded-lg p-8 border border-muted">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="bg-background border border-muted rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="bg-background border border-muted rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-background border border-muted rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="bg-background border border-muted rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full bg-background border border-muted rounded px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors"
          >
            <option value="men">Men's Fragrances</option>
            <option value="women">Women's Fragrances</option>
            <option value="unisex">Unisex Fragrances</option>
            <option value="all">Explore All Collections</option>
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your fragrance preferences, lifestyle, and what scents appeal to you..."
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-background border border-muted rounded px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
          />

          <button
            type="submit"
            className="w-full py-4 bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity rounded"
          >
            {isSubmitted ? "Thank You! We'll Be In Touch" : "Request Personal Consultation"}
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Our London and Grasse-based concierge team will respond within 24 hours with personalized recommendations
          tailored to your preferences.
        </p>
      </div>
    </section>
  )
}
