"use client"
import Navigation from "@/components/navigation"
import CustomCursor from "@/components/custom-cursor"
import Hero from "@/components/hero"
import Products from "@/components/products"
import Story from "@/components/story"
import Concierge from "@/components/concierge"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Navigation />
      <CustomCursor />
      <Hero />
      <Products />
      <Story />
      <Concierge />
      <Footer />
    </main>
  )
}
