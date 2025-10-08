"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative w-full min-h-[80svh] md:min-h-[92svh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20 w-full h-full">
        <Image
          src="/modern-clean-home-interior-dark-background.jpg"
          alt="Clean modern home interior background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Gold Overlay */}
        <div className="absolute inset-0 pointer-events-none gold-gradient opacity-20" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 md:px-12 grid gap-8 md:grid-cols-2 md:items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="glass p-8 md:p-12 rounded-xl"
        >
          <p className="text-sm md:text-base font-medium text-primary/90">Dallas, Texas</p>
          <h1 className="text-4xl md:text-6xl font-semibold mt-3 md:mt-4">
            Professional Home Cleaning, Tailored for You
          </h1>
          <p className="text-base md:text-lg opacity-85 mt-4">
            Reliable residential cleaning — houses, apartments, and extra services.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <Button className="gold-gradient text-[color:var(--primary-foreground)] animate-pulse text-sm md:text-base md:px-6 md:h-14">
              Get a Quote
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-primary/60 text-primary hover:bg-primary/10 bg-transparent text-sm md:text-base md:px-6 md:h-14"
            >
              <a href="#services">View Services</a>
            </Button>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-4 text-center">
            <Stat label="Happy Clients" value="250+" />
            <Stat label="Avg. Rating" value="4.9/5" />
            <Stat label="Years Serving" value="5+" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="hidden md:block justify-self-end"
        >
          <Image src="/logo.png" alt="ADR Cleaning Service logo" width={500} height={500} />
        </motion.div>
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border/60 p-4 md:p-6 bg-black/30">
      <div className="text-xl md:text-2xl font-semibold">{value}</div>
      <div className="text-xs md:text-sm opacity-75">{label}</div>
    </div>
  )
}
