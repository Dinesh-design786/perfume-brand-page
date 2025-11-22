"use client"

import { useRef } from "react"
import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const capRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      if (capRef.current) {
        capRef.current.style.left = `${e.clientX - 12}px`
        capRef.current.style.top = `${e.clientY - 12}px`
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [isVisible])

  return (
    <>
      <div ref={capRef} className="cursor-cap" />
      <style jsx>{`
        .cursor-cap {
          position: fixed;
          width: 24px;
          height: 28px;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: lighten;
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }
        
        .cursor-cap::before {
          content: '';
          position: absolute;
          width: 20px;
          height: 6px;
          background: linear-gradient(to bottom, #c6a667 0%, #a68956 100%);
          border-radius: 2px;
          top: 0;
          left: 2px;
          box-shadow: 0 2px 4px rgba(198, 166, 103, 0.4);
        }
        
        .cursor-cap::after {
          content: '';
          position: absolute;
          width: 18px;
          height: 22px;
          background: linear-gradient(135deg, #d4af92 0%, #b8934a 50%, #9d7f3d 100%);
          border-radius: 1px;
          top: 6px;
          left: 3px;
          border: 1px solid #a68956;
          box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.2), 0 3px 8px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    </>
  )
}
