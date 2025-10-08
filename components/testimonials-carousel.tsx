"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import testimonials from "@/data/testimonials.json"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialsCarousel() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Testimonials</h2>
      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {testimonials.items.map((t, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <Card className="glass h-full">
                <CardContent className="p-6">
                  <div className="text-yellow-400" aria-label="5 stars">
                    {"★★★★★"}
                  </div>
                  <p className="mt-3">{t.text}</p>
                  <div className="mt-4 text-sm opacity-80">— {t.name}</div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
