# Hotel Rio - Habarana, Sri Lanka

A luxury hotel website built with **Astro 5**, **Tailwind CSS**, and **GSAP**, featuring a premium design inspired by the rich heritage of Sri Lanka's Cultural Triangle.

![Hotel Rio Banner](/public/images/room1.png)

## 🌟 Features

*   **Modern Tech Stack**: Built on Astro 5.x for lightning-fast performance (Static Site Generation).
*   **Premium Design**: Custom "Hotel Rio" design system using Tailwind CSS v4 with a 60/30/10 color rule.
*   **Immersive Animations**: Smooth scroll-triggered animations and parallax effects powered by GSAP.
*   **Glassmorphic UI**: Interactive booking bar with date, room type, and guest selectors.
*   **Video Hero Section**: Full-screen cinematic background video.
*   **Responsive**: Fully optimized for mobile, tablet, and desktop devices.
*   **Accessible Components**: Semantic HTML and keyboard-navigable UI elements.

## 🛠️ Technology Stack

*   **Framework**: [Astro 5.x](https://astro.build)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
*   **Animations**: [GSAP](https://greensock.com/gsap/)
*   **Icons**: Heroicons (Inline SVGs)
*   **Maps**: Google Maps Embed

## 📂 Project Structure

```text
/
├── public/
│   ├── images/          # Image assets (rooms, backgrounds)
│   └── videos/          # Video assets (hero background)
├── src/
│   ├── components/      # Reusable UI components
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── BookingBar.astro
│   │   ├── About.astro
│   │   ├── Rooms.astro
│   │   ├── Dining.astro
│   │   ├── Location.astro
│   │   ├── Testimonials.astro
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro # Main page layout
│   ├── pages/
│   │   └── index.astro  # Homepage
│   ├── styles/
│   │   └── global.css   # Global Tailwind/CSS styles
│   └── scripts/
│       └── animations.js # GSAP animation logic
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
