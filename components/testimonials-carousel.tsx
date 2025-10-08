"use client"

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import testimonials from "@/data/testimonials.json"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export function TestimonialsCarousel() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-[var(--brand-gold)]">
        Testimonials
      </h2>

      <Carousel opts={{ align: "start", loop: true }}>
        <CarouselContent>
          {testimonials.items.map((t, i) => (
            <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card
                  className="glass h-full transition-all duration-500 hover:-translate-y-2 
                             border border-[var(--brand-gold)]/40 shadow-[0_0_12px_rgba(212,175,55,0.25)] 
                             hover:shadow-[0_0_25px_rgba(212,175,55,0.45)]"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className="text-[var(--brand-gold)] text-lg"
                      aria-label={`${t.stars || 5} stars`}
                    >
                      {"★".repeat(t.stars || 5)}
                    </div>
                    <p className="mt-4 italic text-sm leading-relaxed text-foreground/90">
                      “{t.text}”
                    </p>
                    <div className="mt-5 text-[var(--brand-gold)] font-medium">
                      — {t.name}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
