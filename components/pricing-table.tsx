"use client"

import pricing from "@/data/pricing.json"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function PricingTable() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[var(--brand-gold)]">
        Pricing Plans
      </h2>

      <div className="grid gap-10 md:grid-cols-3">
        {pricing.plans.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card
              className="relative overflow-hidden bg-[#0A0807]/80 border border-[var(--brand-gold)]/40 
                shadow-[0_0_25px_-6px_rgba(212,175,55,0.3)] hover:shadow-[0_0_45px_-6px_rgba(212,175,55,0.7)] 
                hover:-translate-y-3 transition-all duration-500 backdrop-blur-md group rounded-2xl p-2"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--brand-gold)] to-transparent opacity-80" />

              <CardHeader className="pb-2">
                <CardTitle className="text-2xl font-bold text-[var(--brand-gold)] text-center group-hover:scale-105 transition-transform">
                  {p.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-gray-200 text-sm leading-relaxed space-y-3 px-4 pb-8 pt-4">
                {p.lines.map((l) => (
                  <div key={l} className="text-center">
                    {l}
                  </div>
                ))}

                <div className="flex justify-center mt-8">
                  <Button
                    asChild
                    className="relative overflow-hidden gold-gradient text-black font-semibold py-3 px-8 rounded-md shadow-md 
                    transition-all duration-500 before:absolute before:inset-0 before:bg-[var(--brand-gold)] 
                    before:scale-x-0 before:origin-left before:transition-transform before:duration-500 hover:before:scale-x-100 
                    hover:text-black z-10"
                  >
                    <a href="#contact">Get a Quote</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <p className="text-xs text-center opacity-70 mt-6">
        ✨ Senior citizens receive a <span className="text-[var(--brand-gold)] font-semibold">15% discount</span> on eligible services.
      </p>
    </section>
  )
}
