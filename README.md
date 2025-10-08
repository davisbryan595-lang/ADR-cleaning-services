// <CHANGE> Imported the provided project spec for reference
// ... existing code ...
\`\`\`

```txt file="README.md"
Project name: ADR Cleaning Service LLC
Primary contact: Gustavo Alexis Reyes Santos
Tagline: Professional Home Cleaning, Tailored for You
Location focus: Dallas, Texas

Purpose / Requirements (high priority)

Build a single-page responsive Next.js demo site (App Router preferred) for a residential cleaning business. The website must be highly aesthetic, professional, and performance-focused, using black-and-gold styling. Include HD media, sliding/drag animations, micro-interactions, and carefully themed styling. Provide a Git repo-ready scaffold and README with deploy instructions.

Important: Extract the theme colors from the provided logo. If extraction fails, use these fallback palettes:

#000000

#E3C671

#2F221D

#685E53

The site should maintain a black-and-gold look with gold gradients for buttons, glows, hovers, and accent styling.

Tech stack & libraries (must use)

Next.js (latest, App Router)

Tailwind CSS v4 using @theme inline for tokens

shadcn/ui for UI primitives

Framer Motion for animations

lucide-react for icons

next/image for optimized images

embla-carousel or react-swipeable for carousels

react-intersection-observer for reveal-on-scroll

react-hook-form + Zod for client-side validation (form only)

API route for contact form (simulated email/send; returns JSON success)

JSON-LD LocalBusiness schema + Open Graph meta per page

Pages & Sections (single-page with anchors)

Hero (#home): full-screen split hero with headline, subheading, 2 CTAs (Get Quote, View Services), small location badge (Dallas TX), animated foreground elements (floating shapes), background parallax image/video.

Services (#services): card/grid layout showing cleaning options:

1 bedroom, 1 bathroom: $175 first-time, $150 monthly, $125 bi-weekly

3 bedroom, 2 bathroom: $200 first-time deep clean, $150 regular bi-weekly

Senior citizens: 15% discount

Extra bathroom: $25

Windows cleaning: $22

Extra services requested by client: typically $25
Include an “Extra Services” card/menu type section for custom services. Each card should have animated reveal and hover lift.

About (#about): brief company description, mission statement, team roles, cleaning expertise. Include optional timeline or grid layout.

Gallery (#gallery): masonry + lightbox layout with at least 12 high-res images of cleaned homes, cleaning team in action, before/after comparisons. Include draggable sliders for before/after images.

Testimonials (#testimonials): carousel with 6 placeholder entries (customer will provide content). Include avatar, rating stars, animated quote reveal.

Pricing (#pricing): concise pricing snapshot from the services above. Show extra services pricing clearly. Include downloadable PDF (stub or HTML->PDF).

Contact (#contact): validated form (name, email, phone, service, date, message). Clickable tel link. Map embed for Dallas, TX service area. Social media links integrated.

Visual / Theming instructions (explicit)

Brand tokens — create CSS variables at :root inside globals.css or @theme inline:

Primary/Accent Gold: #E3C671

Secondary Dark: #2F221D

Background Black/Neutral: #000000

Accent/Shadow: #685E53

Hero uses layered backgrounds: muted base image/video, gold overlay gradient, blurred card holding CTAs.

Buttons: primary = gold gradient (#E3C671), secondary = dark/gold. Hover effects and glows should emphasize gold accents.

Cards: glass effect with backdrop-filter, rounded corners, hover translateY(-6px) and shadow intensification.

Ensure accessibility: 4.5:1 contrast on actionable text. Add semi-transparent overlay if background images are busy.

Components to build (deliverables)

AppLayout (global layout + theme tokens + header & footer)

Hero (animated headline, location badge, video/image background, dual CTAs)

Navbar (sticky, glossy logo, nav links, responsive CTA dialing button)

ServicesGrid (cards for each service + extra services menu)

BeforeAfterSlider (draggable for cleaning before/after)

Gallery (masonry, lightbox)

TestimonialsCarousel (autoplay + drag)

PricingTable (download PDF)

BookingForm (validation + API submit to /api/contact)

Map (Leaflet or Google Maps showing Dallas service area)

Seo util (meta tags, JSON-LD)

ThemeSwitch (optional light/dark with black/gold consistent)

data/pricing.json, data/services.json, data/testimonials.json

Animations & micro-interactions (must include)

Entrance animations for all sections (Framer Motion + intersection observer, staggered)

Hover lifts & glow on cards

CTA pulse on primary CTAs

Parallax hero background / floating SVG shapes

Smooth draggable sliders for before/after and gallery

Toast on form submit success with confetti/check animation

Small animated counters/stats in hero section

Accessibility & Performance

Descriptive alt text for all images

Keyboard-accessible modals, lightbox, carousels

next/image for optimized images, lazy-load non-critical assets

Preload hero images and critical fonts

Lighthouse-friendly: minimal unused JS, fast loading

SEO & Structured data

Server-rendered meta tags: title, description, og:image, og:type, twitter card

JSON-LD LocalBusiness including:

Name: ADR Cleaning Service LLC

URL: placeholder for demo

Logo: /public/logo.png

Telephone: +1 516-712-7244

Address: Dallas, TX

serviceArea: Dallas and surrounding areas

openingHours: Mon-Sat 8:00-18:00, Sunday by appointment

Backend stubs (API)

POST /api/contact accepts { name, email, phone, service, date, message }

Validates input via Zod

Returns 200 { ok: true } and logs CONTACT_SUBMISSION (simulate email send)

File structure (suggested)

/app
  /(components)
    layout.tsx
    navbar.tsx
    footer.tsx
  /home
    page.tsx
    hero.tsx
    services.tsx
    gallery.tsx
    testimonials.tsx
    pricing.tsx
    contact.tsx
/public
  /media
    hero.mp4
    hero.jpg
    gallery-*.jpg
/data
  pricing.json
  services.json
  testimonials.json
/styles
  globals.css
/pages/api/contact.ts
/README.md
/vercel.json


Developer instructions (README snippet)

npm i
npm run dev

How to swap theme colors: edit globals.css :root tokens --brand-*
How to replace logo: /public/logo.png and update favicon
How to wire email provider: update .env and replace sendMailStub with real provider


Exact copy snippets (verbatim)

Hero headline: Professional Home Cleaning, Tailored for You

Hero sub: Reliable residential cleaning — houses, apartments, extra services

CTA primary: Get a Quote

CTA secondary: View Services

Contact footer text: Serving Dallas, TX & surrounding areas — Mobile consultations available

Extras (nice-to-have)

Generate short marketing hero video (10s) with subtle motion

Admin page to edit pricing.json and testimonials.json (no auth required for demo)

Print-friendly pricing page

Final deliverable expectations

GitHub-ready Next.js repo with all components, assets, data files, README

Working dev server with animations visible

Clear instructions for swapping theme colors or uploading a logo
