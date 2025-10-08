"use client"

import Image from "next/image"
import { useMemo } from "react"
import { motion } from "framer-motion"

export function Gallery() {
  const items = useMemo(
    () => [
      { seed: "kitchen", alt: "Cleaner wiping a kitchen counter" },
      { seed: "livingroom", alt: "Vacuuming a living room" },
      { seed: "bathroom", alt: "Polished bathroom sink" },
      { seed: "modernkitchen", alt: "Spotless modern kitchen" },
      { seed: "supplies", alt: "Cleaning tools on tray" },
      { seed: "bedroom", alt: "Neat bedroom interior" },
      { seed: "living", alt: "Bright clean living area" },
      { seed: "floor", alt: "Mopping floor" },
      { seed: "minimal", alt: "Minimal interior" },
      { seed: "office", alt: "Home office clean" },
      { seed: "countertop", alt: "Sanitizing a countertop" },
      { seed: "room", alt: "Modern spotless room" },
    ],
    []
  )

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-[var(--brand-gold)]">
        Gallery
      </h2>

      <div className="columns-2 md:columns-3 gap-4 [column-fill:balance]">
        {items.map((it, i) => {
          // Using picsum with seed to get deterministic but varied images
          const src = `https://picsum.photos/seed/${encodeURIComponent(it.seed)}/900/600`

          return (
            <motion.div
              key={it.alt + i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="mb-4 break-inside-avoid overflow-hidden rounded-lg border border-[var(--brand-gold)]/30 shadow-[0_0_10px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative w-full h-[220px] md:h-[260px]">
                <Image
                  src={src}
                  alt={it.alt}
                  fill
                  className="rounded-lg object-cover transition-transform duration-700 hover:scale-105"
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <figcaption className="p-3 text-xs text-foreground/70 bg-black/5">
                {it.alt}
              </figcaption>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
