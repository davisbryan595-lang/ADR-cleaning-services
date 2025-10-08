"use client"

import Image from "next/image"
import { useMemo } from "react"
import { motion } from "framer-motion"

export function Gallery() {
  const items = useMemo(
    () => [
      { query: "cleaning kitchen counter", alt: "Cleaner wiping a kitchen counter" },
      { query: "vacuuming living room", alt: "Vacuuming a living room" },
      { query: "clean bathroom sink", alt: "Polished bathroom sink" },
      { query: "spotless modern kitchen", alt: "Spotless modern kitchen" },
      { query: "cleaning supplies tray", alt: "Cleaning tools on tray" },
      { query: "neat bedroom interior", alt: "Neat bedroom interior" },
      { query: "bright clean living room", alt: "Bright clean living area" },
      { query: "mopping floor", alt: "Mopping floor" },
      { query: "minimalist interior", alt: "Minimal interior" },
      { query: "home office clean", alt: "Home office clean" },
      { query: "sanitizing countertop", alt: "Sanitizing a countertop" },
      { query: "modern spotless room", alt: "Modern spotless room" },
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
          // source.unsplash.com returns a relevant photo for the query.
          // adding &sig=i helps get unique images for each item
          const src = `https://source.unsplash.com/900x600/?${encodeURIComponent(it.query)}&sig=${i}`

          return (
            <motion.div
              key={it.alt + i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="mb-4 break-inside-avoid overflow-hidden rounded-lg border border-[var(--brand-gold)]/30 shadow-[0_0_10px_rgba(212,175,55,0.18)] hover:shadow-[0_0_30px_rgba(212,175,55,0.38)] transition-all duration-500 hover:-translate-y-1"
            >
              <div className="relative w-full h-[220px] md:h-[260px]">
                <Image
                  src={src}
                  alt={it.alt}
                  fill
                  className="rounded-lg object-cover transition-transform duration-700 hover:scale-105"
                  unoptimized // IMPORTANT: avoids needing next.config image domains in dev/prod
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={false}
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
