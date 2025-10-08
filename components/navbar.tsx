"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on link click
  const handleLinkClick = () => setOpen(false)

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-500 border-b border-border",
        scrolled
          ? "bg-[rgba(255,215,0,0.15)] backdrop-blur-md shadow-lg"
          : "bg-[rgba(255,255,255,0.8)] backdrop-blur-sm"
      )}
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

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {["Services", "About", "Gallery", "Testimonials", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleLinkClick}
              className="relative overflow-hidden text-black px-3 py-2 transition-all duration-300 before:absolute before:inset-0 before:bg-[var(--brand-gold)] before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 hover:text-black"
            >
              <span className="relative z-10">{item}</span>
            </a>
          ))}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-2">
          <LiquidButton href="tel:+15167127244" text="Call" className="gold-gradient" />
          <LiquidButton href="#contact" text="Get a Quote" variant="outline" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black focus:outline-none z-[110]"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      {open && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-5 md:hidden animate-slideDown z-[99]">
          {["Services", "About", "Gallery", "Testimonials", "Pricing", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleLinkClick}
              className="w-full text-center py-3 text-black font-medium hover:bg-[var(--brand-gold)]/20 transition-colors"
            >
              {item}
            </a>
          ))}
          <div className="flex gap-2 mt-4">
            <LiquidButton href="tel:+15167127244" text="Call" className="gold-gradient" />
            <LiquidButton href="#contact" text="Get a Quote" variant="outline" />
          </div>
        </div>
      )}
    </header>
  )
}

/* 🔸 Liquid Fill Button Component */
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
