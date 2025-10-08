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
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-black/70 backdrop-blur-md border-b border-border shadow-md"
          : "bg-transparent"
      )}
      aria-label="Primary Navigation"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link href="#home" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="ADR Cleaning Service logo"
            width={40}
            height={40}
            priority
          />
          <span className="font-semibold tracking-tight text-white">
            ADR Cleaning Service
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a className="hover:text-[var(--brand-gold)] transition-colors" href="#services">
            Services
          </a>
          <a className="hover:text-[var(--brand-gold)] transition-colors" href="#about">
            About
          </a>
          <a className="hover:text-[var(--brand-gold)] transition-colors" href="#gallery">
            Gallery
          </a>
          <a className="hover:text-[var(--brand-gold)] transition-colors" href="#testimonials">
            Testimonials
          </a>
          <a className="hover:text-[var(--brand-gold)] transition-colors" href="#pricing">
            Pricing
          </a>
          <a className="hover:text-[var(--brand-gold)] transition-colors" href="#contact">
            Contact
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <Button
            asChild
            className="gold-gradient text-[color:var(--primary-foreground)] shadow-md"
          >
            <a href="tel:+15167127244" aria-label="Call ADR Cleaning Service">
              Call
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-[var(--brand-gold)] text-[var(--brand-gold)] hover:bg-[var(--brand-gold)]/10"
          >
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
