
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // Animate sections on scroll
  const sections = document.querySelectorAll('section');
  
  sections.forEach((section) => {
    // Animate the content container inside the section
    const content = section.querySelector('.container') || section.children[0];
    
    if (content) {
      gsap.fromTo(content, 
        { 
          y: 50, 
          opacity: 0 
        },
        {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none reverse"
          },
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out"
        }
      );
    }
  });

  // Parallax for Hero Image if possible
  const heroImg = document.querySelector('.hero-bg');
  if (heroImg) {
      gsap.to(heroImg, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
              trigger: "body",
              start: "top top",
              end: "bottom top",
              scrub: true
          }
      });
  }
}
