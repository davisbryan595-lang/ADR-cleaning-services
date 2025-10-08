"use client"

import services from "@/data/services.json"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export function ServicesGrid() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Services</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {services.slice(0, 2).map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <Card className="glass hover:-translate-y-1 transition-transform">
              <CardHeader>
                <CardTitle>{s.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                {"firstTime" in s && <div>First-time: ${s.firstTime}</div>}
                {"monthly" in s && <div>Monthly: ${s.monthly}</div>}
                {"biWeekly" in s && <div>Bi-weekly: ${s.biWeekly}</div>}
                {"firstTimeDeep" in s && <div>First-time Deep Clean: ${s.firstTimeDeep}</div>}
                {"regularBiWeekly" in s && <div>Regular (Bi-weekly): ${s.regularBiWeekly}</div>}
                {"discount" in s && <div>{s.discount}</div>}
              </CardContent>
            </Card>
          </motion.div>
        ))}

        {/* Extras card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4, delay: 0.16 }}
        >
          <Card className="glass hover:-translate-y-1 transition-transform">
            <CardHeader>
              <CardTitle>Extra Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div>Extra Bathroom: $25</div>
              <div>Windows Cleaning: $22</div>
              <div>Custom extra services: typically $25</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
