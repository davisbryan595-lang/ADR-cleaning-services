'use client'

import { useEffect } from 'react'

export default function AnchorSmooth() {
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return

      // Walk up the DOM tree to find the closest anchor element
      let el: HTMLElement | null = target
      while (el && el !== document.body && el.tagName !== 'A') {
        el = el.parentElement
      }

      if (!el) return
      const anchor = el as HTMLAnchorElement
      const href = anchor.getAttribute('href') || ''
      if (href.startsWith('#')) {
        e.preventDefault()
        const id = href.substring(1)
        const targetEl = document.getElementById(id)
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    document.addEventListener('click', handleSmoothScroll)
    return () => document.removeEventListener('click', handleSmoothScroll)
  }, [])

  return null
}
