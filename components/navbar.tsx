"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

// Reusable Button
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
          ? "border border-[var(--brand-gold)] text-[var(--brand-gold)] hover:text-black"
          : "text-black",
        className
      )}
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute inset-0 bg-[var(--brand-gold)] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
    </Link>
  )
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-border backdrop-blur-md",
        scrolled || menuOpen
          ? "bg-[rgba(255,215,0,0.15)] shadow-lg"
          : "bg-[rgba(255,255,255,0.05)]"
      )}
      aria-label="Primary Navigation"
    >
      <div className="mx-auto max-w-6xl px-4 py-1 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center group relative">
          <div className="relative">
            <Image
              src="/logo.png"
              alt="ADR Cleaning Service logo"
              width={84}
              height={84}
              priority
              className="animate-float drop-shadow-[0_0_12px_rgba(255,215,0,0.6)] transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.4),transparent_70%)] blur-md opacity-60 animate-pulse" />
          </div>
        </Link>

        {/* Desktop Nav Links */}
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

        {/* CTA Buttons (Desktop Only) */}
        <div className="hidden md:flex items-center gap-2">
          <LiquidButton href="tel:+15167127244" text="Call" className="gold-gradient" />
          <LiquidButton href="#contact" text="Get a Quote" variant="outline" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white transition-transform duration-300 hover:scale-110"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed md:hidden top-[68px] left-0 w-full h-[calc(100vh-68px)] flex flex-col items-center justify-center gap-6 text-lg font-medium bg-[rgba(255,255,255,0.95)] backdrop-blur-lg transition-all duration-500",
          menuOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        )}
      >
        {["Services", "About", "Gallery", "Testimonials", "Pricing", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
            className="text-black hover:text-[var(--brand-gold)] transition-colors duration-300"
          >
            {item}
          </a>
        ))}

        <div className="flex flex-col gap-3 mt-6">
          <LiquidButton href="tel:+15167127244" text="Call Now" />
          <LiquidButton href="#contact" text="Get a Quote" variant="outline" />
        </div>
      </div>
    </header>
  )
}
