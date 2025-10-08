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
        "sticky top-0 z-50 w-full transition-all",
        scrolled ? "bg-black/70 backdrop-blur border-b border-border" : "bg-transparent",
      )}
      aria-label="Primary"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-3">
          <Image src="/logo.png" alt="ADR Cleaning Service logo" width={36} height={36} />
          <span className="font-semibold tracking-tight">ADR Cleaning Service</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <a className="hover:text-primary" href="#services">
            Services
          </a>
          <a className="hover:text-primary" href="#about">
            About
          </a>
          <a className="hover:text-primary" href="#gallery">
            Gallery
          </a>
          <a className="hover:text-primary" href="#testimonials">
            Testimonials
          </a>
          <a className="hover:text-primary" href="#pricing">
            Pricing
          </a>
          <a className="hover:text-primary" href="#contact">
            Contact
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild variant="default" className="gold-gradient text-[color:var(--primary-foreground)]">
            <a href="tel:+12148139919" aria-label="Call ADR Cleaning Service">
              Call
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-primary/60 text-primary hover:bg-primary/10 bg-transparent"
          >
            <a href="#contact">Get a Quote</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
