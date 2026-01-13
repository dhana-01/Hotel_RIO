# Hotel Rio - Habarana, Sri Lanka

A luxury hotel website built with **Astro 5**, **Tailwind CSS**, and **GSAP**, featuring a premium design inspired by the rich heritage of Sri Lanka's Cultural Triangle.

## 🌟 Features

*   **Modern Tech Stack**: Built on Astro 5.x for lightning-fast performance (Static Site Generation).
*   **Premium Design**: Custom "Hotel Rio" design system using Tailwind CSS v4 with a 60/30/10 color rule.
*   **Advanced Animations**:
    *   **Hero**: Full-screen video with glassmorphic overlay.
    *   **About**: Custom "Line Wipe" slideshow revealing images from right to left.
    *   **Dining**: Scroll-driven vertical stack animation using GSAP ScrollTrigger.
    *   **Testimonials**: Infinite marquee scroll with auto-pause on hover.
    *   **Navigation**: Transparent-to-dark scroll effect with animated link underlines.
*   **New Pages**: Dedicated **Contact Page** with inquiry form and stylized info section.
*   **Visual Polish**:
    *   **Section Dividers**: Smooth SVG wave transitions between sections (Dining → Location → Testimonials).
    *   **Footer**: Animated social media icons with glow effects.
*   **Glassmorphic UI**: Interactive booking bar and testimonial cards.
*   **Responsive**: Fully optimized for mobile, tablet, and desktop devices.

## 🛠️ Technology Stack

*   **Framework**: [Astro 5.x](https://astro.build)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
*   **Animations**: [GSAP](https://greensock.com/gsap/) & [GSAP ScrollTrigger](https://greensock.com/scrolltrigger)
*   **Icons**: Heroicons (Inline SVGs)
*   **Maps**: Google Maps Embed

## 📂 Project Structure

```text
/
├── public/
│   ├── images/          # Image assets (rooms, backgrounds, dining, about slides)
│   └── videos/          # Video assets (hero background)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Header.astro           # Nav & Logo
│   │   ├── Hero.astro             # Video Hero & Booking Bar
│   │   ├── About.astro            # Slideshow Animation
│   │   ├── Rooms.astro            # Room Cards
│   │   ├── Dining.astro           # Scroll Animation
│   │   ├── Location.astro         # Map & Attractions
│   │   ├── SectionDivider.astro   # Wave Dividers
│   │   ├── Testimonials.astro     # Marquee Reviews
│   │   └── Footer.astro           # Socials & Links
│   ├── layouts/
│   │   └── Layout.astro # Main page layout
│   ├── pages/
│   │   ├── index.astro  # Homepage
│   │   └── contact.astro # Contact Page
│   ├── styles/
│   │   └── global.css   # Global Tailwind/CSS styles
└── package.json
```

## 🚀 Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/dhana-01/Hotel_RIO.git
    cd Hotel_RIO
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Start the development server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:4321](http://localhost:4321) in your browser.

4.  **Build for production**:
    ```bash
    npm run build
    ```

## 🎨 Design System

*   **Primary Color**: Rio Red (`#C10206`)
*   **Background**: Off-White (`#FFFBF2`)
*   **Text/Accents**: Rio Black (`#211D21`)
*   **Typography**: `Playfair Display` (Headings) & `Inter` (Body)

## 📄 License

All rights reserved. Designed for Hotel Rio, Habarana.
