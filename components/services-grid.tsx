"use client"

import services from "@/data/services.json"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export function ServicesGrid() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[var(--brand-gold)]">
        Our Cleaning Services
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {[
          {
            title: "Residential Cleaning",
            details:
              "Thorough home cleaning that covers every corner — kitchens, bathrooms, living areas, and more.",
          },
          {
            title: "Commercial Cleaning",
            details:
              "Reliable cleaning for offices, shops, and facilities to keep your workspace fresh and professional.",
          },
          {
            title: "Deep Cleaning",
            details:
              "Intensive top-to-bottom service that targets built-up dirt, grime, and hidden spots regular cleaning misses.",
          },
          {
            title: "Move In / Move Out Cleaning",
            details:
              "Complete cleaning service before you move in or after you move out — ensuring spotless spaces.",
          },
          {
            title: "Post-Construction Cleaning",
            details:
              "Dust and debris removal after renovation or building work — readying your space for use.",
          },
          {
            title: "Eco-Friendly Cleaning",
            details:
              "Effective cleaning with safe, non-toxic, and sustainable products for a healthier home and planet.",
          },
        ].map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card
              className="relative overflow-hidden bg-[#0A0807]/80 border border-[var(--brand-gold)]/40 
              shadow-[0_0_20px_-5px_rgba(212,175,55,0.2)] hover:shadow-[0_0_35px_-5px_rgba(212,175,55,0.6)]
              hover:-translate-y-2 transition-all duration-500 backdrop-blur-md group"
            >
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--brand-gold)] to-transparent opacity-80" />
              
              <CardHeader>
                <CardTitle className="text-xl text-[var(--brand-gold)] font-bold group-hover:scale-105 transition-transform">
                  {s.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-gray-200 text-sm leading-relaxed">
                <p>{s.details}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Extra Services Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card
            className="relative overflow-hidden bg-[#0A0807]/80 border border-[var(--brand-gold)]/40 
            shadow-[0_0_20px_-5px_rgba(212,175,55,0.2)] hover:shadow-[0_0_35px_-5px_rgba(212,175,55,0.6)]
            hover:-translate-y-2 transition-all duration-500 backdrop-blur-md group"
          >
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--brand-gold)] to-transparent opacity-80" />
            
            <CardHeader>
              <CardTitle className="text-xl text-[var(--brand-gold)] font-bold group-hover:scale-105 transition-transform">
                Extra Services
              </CardTitle>
            </CardHeader>

            <CardContent className="text-gray-200 text-sm leading-relaxed space-y-2">
              <p>🛁 Extra Bathroom — add-on available upon request.</p>
              <p>🪟 Window Cleaning — streak-free glass and frame detailing.</p>
              <p>🧽 Custom Requests — flexible add-ons for unique cleaning needs.</p>
              <p className="text-[var(--brand-gold)] italic mt-3">
                * Senior citizens receive a 15% discount on all services.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
