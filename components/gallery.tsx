"use client"

import Image from "next/image"
import { useMemo } from "react"

export function Gallery() {
  const items = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        src: `/placeholder.svg?height=600&width=900&query=clean%20home%20detail%20photo%20${i + 1}`,
        alt: `Gallery image ${i + 1} showing clean home detail`,
      })),
    [],
  )

  return (
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Gallery</h2>
      <div className="columns-2 md:columns-3 gap-4 [column-fill:balance]">
        {items.map((it) => (
          <div key={it.alt} className="mb-4 break-inside-avoid">
            <Image
              src={it.src || "/placeholder.svg"}
              alt={it.alt}
              width={900}
              height={600}
              className="rounded-lg border border-border"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
