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
        {services.slice(0, 2).map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="relative overflow-hidden bg-[#0A0807]/80 border border-[var(--brand-gold)]/40 
              shadow-[0_0_20px_-5px_rgba(212,175,55,0.2)] hover:shadow-[0_0_35px_-5px_rgba(212,175,55,0.6)]
              hover:-translate-y-2 transition-all duration-500 backdrop-blur-md group">
              
              <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--brand-gold)] to-transparent opacity-80" />
              
              <CardHeader>
                <CardTitle className="text-xl text-[var(--brand-gold)] font-bold group-hover:scale-105 transition-transform">
                  {s.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="text-gray-200 text-sm leading-relaxed">
                {s.details ? (
                  <p>{s.details}</p>
                ) : (
                  <p>
                    Professional {s.title.toLowerCase()} services tailored to fit your home’s
                    specific cleaning needs. Expect a spotless finish every time.
                  </p>
                )}
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
          <Card className="relative overflow-hidden bg-[#0A0807]/80 border border-[var(--brand-gold)]/40 
            shadow-[0_0_20px_-5px_rgba(212,175,55,0.2)] hover:shadow-[0_0_35px_-5px_rgba(212,175,55,0.6)]
            hover:-translate-y-2 transition-all duration-500 backdrop-blur-md group">
            
            <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--brand-gold)] to-transparent opacity-80" />
            
            <CardHeader>
              <CardTitle className="text-xl text-[var(--brand-gold)] font-bold group-hover:scale-105 transition-transform">
                Extra Services
              </CardTitle>
            </CardHeader>

            <CardContent className="text-gray-200 text-sm leading-relaxed space-y-2">
              <p>✨ Extra Bathroom — add-on available upon request.</p>
              <p>🪟 Window Cleaning — detailed glass and frame service.</p>
              <p>🧼 Custom Requests — any additional cleaning typically costs $25 per service.</p>
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
