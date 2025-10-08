"use client"

import Image from "next/image"
import { useMemo } from "react"
import { motion } from "framer-motion"

export function Gallery() {
  const items = useMemo(
    () => [
      {
        src: "https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?auto=format&fit=crop&w=900&q=80",
        alt: "Cleaner wiping a kitchen counter",
      },
      {
        src: "https://images.unsplash.com/photo-1603791452906-b0b7f4c5c1a3?auto=format&fit=crop&w=900&q=80",
        alt: "Vacuuming a living room",
      },
      {
        src: "https://images.unsplash.com/photo-1581578017423-3b38fcf47d09?auto=format&fit=crop&w=900&q=80",
        alt: "Polished bathroom sink",
      },
      {
        src: "https://images.unsplash.com/photo-1618221710640-c85757f3b6d5?auto=format&fit=crop&w=900&q=80",
        alt: "Spotless modern kitchen",
      },
      {
        src: "https://images.unsplash.com/photo-1598300056393-4b9d7b8a5a19?auto=format&fit=crop&w=900&q=80",
        alt: "Cleaning tools on tray",
      },
      {
        src: "https://images.unsplash.com/photo-1581574208067-2d1a5e1e1cb5?auto=format&fit=crop&w=900&q=80",
        alt: "Neat bedroom interior",
      },
      {
        src: "https://images.unsplash.com/photo-1621605815932-09d4c2051d37?auto=format&fit=crop&w=900&q=80",
        alt: "Bright clean living area",
      },
      {
        src: "https://images.unsplash.com/photo-1601572598019-20f507d43846?auto=format&fit=crop&w=900&q=80",
        alt: "Mopping floor",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
        alt: "Minimal interior",
      },
      {
        src: "https://images.unsplash.com/photo-1600047509358-7e4c12a3ea56?auto=format&fit=crop&w=900&q=80",
        alt: "Home office clean",
      },
      {
        src: "https://images.unsplash.com/photo-1616628182508-3c3b9f7b8c36?auto=format&fit=crop&w=900&q=80",
        alt: "Sanitizing a countertop",
      },
      {
        src: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?auto=format&fit=crop&w=900&q=80",
        alt: "Modern spotless room",
      },
    ],
    []
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-[var(--brand-gold)]">
        Gallery
      </h2>

      <div className="columns-2 md:columns-3 gap-4 [column-fill:balance]">
        {items.map((it, i) => (
          <motion.div
            key={it.alt}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="mb-4 break-inside-avoid overflow-hidden rounded-lg border border-[var(--brand-gold)]/30 shadow-[0_0_10px_rgba(255,215,0,0.2)] hover:shadow-[0_0_25px_rgba(255,215,0,0.5)] transition-all duration-500 hover:-translate-y-1"
          >
            <Image
              src={it.src}
              alt={it.alt}
              width={900}
              height={600}
              className="rounded-lg object-cover transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
