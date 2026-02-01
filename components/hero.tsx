"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; duration: number; delay: number }>
  >([])

  useEffect(() => {
    setIsLoaded(true)
    const newParticles = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 80,
      y: Math.random() * 100,
      duration: 2.5 + Math.random() * 2.5,
      delay: Math.random() * 0.6,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background pt-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/whatsapp-20image-202025-11-22-20at-2012.jpg"
          alt="Ventus Noble perfume bottle with spices"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background/95" />
      </div>

      {/* Enhanced spritz particles */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-gradient-to-b from-accent/80 to-accent/0 rounded-full blur-sm"
            style={{
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              left: `calc(50% + ${particle.x}px)`,
              top: `50%`,
              animation: `spray ${particle.duration}s ease-out forwards`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 transform transition-all duration-1000 ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-balance mb-6 text-accent">
          Ventus Noble
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 font-light max-w-2xl mx-auto">
          Where sophistication meets essence. The fragrance of refined nobility.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/category/men"
            className="px-8 py-3 bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity inline-block"
          >
            Discover
          </Link>
          <Link
            href="/concierge"
            className="px-8 py-3 border border-accent text-accent hover:bg-accent/10 transition-colors font-medium inline-block"
          >
            Concierge
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinecap="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style jsx>{`
        @keyframes spray {
          0% {
            opacity: 0.9;
            transform: translateY(0) translateX(0) scale(1);
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 0;
            transform: translateY(300px) translateX(var(--spread, 0)) scale(0.3);
          }
        }
      `}</style>
    </section>
  )
}
