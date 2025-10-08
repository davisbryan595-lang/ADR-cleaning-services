"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 backdrop-blur-md border-b border-border",
        scrolled
          ? "bg-[rgba(255,215,0,0.15)] shadow-lg"
          : "bg-transparent"
      )}
      aria-label="Primary Navigation"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center gap-3 group relative">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="ADR Cleaning Service logo"
              width={42}
              height={42}
              priority
              className="animate-float drop-shadow-[0_0_12px_rgba(255,215,0,0.6)] transition-all duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.4),transparent_70%)] blur-md opacity-60 animate-pulse" />
          </div>
          <span className="font-semibold tracking-tight text-black">
            ADR Cleaning Service
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {["Services", "About", "Gallery", "Testimonials", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative overflow-hidden text-black px-3 py-2 transition-all duration-300 before:absolute before:inset-0 before:bg-[var(--brand-gold)] before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 hover:text-black"
            >
              <span className="relative z-10">{item}</span>
            </a>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <LiquidButton href="tel:+15167127244" text="Call" className="gold-gradient" />
          <LiquidButton href="#contact" text="Get a Quote" variant="outline" />
        </div>
      </div>
    </header>
  )
}

/* Liquid Fill Button Component */
function LiquidButton({
  href,
  text,
  className,
  variant,
}: {
  href: string
  text: string
  className?: string
  variant?: "outline"
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative px-5 py-2 font-medium rounded-md overflow-hidden transition-all duration-500 group text-sm",
        variant === "outline"
          ? "border border-[var(--brand-gold)] text-[var(--brand-gold)] bg-transparent hover:text-black"
          : "text-black",
        className
      )}
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 bg-[var(--brand-gold)] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
    </Link>
  )
}
