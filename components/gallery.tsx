"use client"

import Image from "next/image"
import { useMemo } from "react"
import { motion } from "framer-motion"

export function Gallery() {
  const items = useMemo(
    () => [
      {
        src: "https://images.unsplash.com/photo-1581579188871-45ea61f2a0c8?q=80&w=1200",
        alt: "Cleaner wiping a kitchen counter",
      },
      {
        src: "https://images.unsplash.com/photo-1603791452906-b0b7f4c5c1a3?q=80&w=1200",
        alt: "Vacuuming a clean living room",
      },
      {
        src: "https://images.unsplash.com/photo-1581578017423-3b38fcf47d09?q=80&w=1200",
        alt: "Polished bathroom sink",
      },
      {
        src: "https://images.unsplash.com/photo-1618221710640-c85757f3b6d5?q=80&w=1200",
        alt: "Spotless kitchen with sunlight",
      },
      {
        src: "https://images.unsplash.com/photo-1598300056393-4b9d7b8a5a19?q=80&w=1200",
        alt: "Cleaning supplies neatly arranged",
      },
      {
        src: "https://images.unsplash.com/photo-1581574208067-2d1a5e1e1cb5?q=80&w=1200",
        alt: "Freshly made bed in a clean bedroom",
      },
      {
        src: "https://images.unsplash.com/photo-1621605815932-09d4c2051d37?q=80&w=1200",
        alt: "Bright living room after cleaning",
      },
      {
        src: "https://images.unsplash.com/photo-1601572598019-20f507d43846?q=80&w=1200",
        alt: "Cleaner mopping a floor",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
        alt: "Neat modern interior",
      },
      {
        src: "https://images.unsplash.com/photo-1600047509358-7e4c12a3ea56?q=80&w=1200",
        alt: "Organized home office",
      },
      {
        src: "https://images.unsplash.com/photo-1616628182508-3c3b9f7b8c36?q=80&w=1200",
        alt: "Cleaner sanitizing a surface",
      },
      {
        src: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1200",
        alt: "Minimalistic spotless interior",
      },
    ],
    [],
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-[#F8F6F5]">
        Gallery
      </h2>

      <div className="columns-2 md:columns-3 gap-4 [column-fill:balance]">
        {items.map((it, i) => (
          <motion.div
            key={it.alt}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            viewport={{ once: true }}
            className="mb-4 break-inside-avoid overflow-hidden rounded-xl border border-[#5E5C5B]/30 shadow-[0_0_10px_rgba(255,215,0,0.15)] hover:shadow-[0_0_20px_rgba(255,215,0,0.35)] transition-all duration-500 hover:-translate-y-1"
          >
            <Image
              src={it.src}
              alt={it.alt}
              width={900}
              height={600}
              className="rounded-xl transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
