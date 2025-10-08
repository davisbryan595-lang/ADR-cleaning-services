"use client"

import pricing from "@/data/pricing.json"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PricingTable() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-[#F8F6F5]">Pricing</h2>

      <div className="grid gap-8 md:grid-cols-3">
        {pricing.plans.map((p) => (
          <Card
            key={p.name}
            className="relative bg-[#0A0807]/90 backdrop-blur-md border border-[#5E5C5B]/30 shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all duration-500 transform hover:-translate-y-2 rounded-2xl p-4 md:p-6"
          >
            <CardHeader className="text-center">
              <CardTitle className="text-2xl md:text-3xl font-semibold text-[#F8F6F5] tracking-wide">
                {p.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-2 text-sm text-[#F8F6F5]/80 text-center">
              {p.lines.map((l) => (
                <div key={l}>{l}</div>
              ))}

              <div className="mt-6 flex justify-center">
                <Button className="relative overflow-hidden px-6 py-3 text-black bg-gradient-to-r from-[#FFD700]/60 to-[#F8F6F5]/60 rounded-full font-medium border border-[#F8F6F5]/30 backdrop-blur-md transition-all duration-300 hover:border-[#FFD700] hover:shadow-[0_0_15px_#FFD700] hover:bg-gradient-to-r hover:from-[#FFD700]/80 hover:to-[#F8F6F5]/80">
                  <span className="relative z-10">Get a Quote</span>
                  <span className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="text-xs text-center text-[#F8F6F5]/70 mt-6">
        Senior citizens receive a <span className="text-[#FFD700] font-semibold">15% discount</span> on eligible services.
      </p>
    </div>
  )
}
