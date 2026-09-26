import { useEffect } from "react";

/**
 * useScrollReveal — attaches IntersectionObserver to all elements
 * with the `.reveal-on-scroll` class within the page, adding
 * `.is-revealed` when they enter the viewport.
 *
 * Call this once at the top level of any page component.
 * Cleans up on unmount.
 */
export default function useScrollReveal() {
  useEffect(() => {
    // Small delay so the DOM has finished painting after route change
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll(".reveal-on-scroll");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer.unobserve(entry.target); // animate once only
            }
          });
        },
        {
          threshold: 0.01,
          rootMargin: "0px 0px -20px 0px",
        }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 80);

    return () => clearTimeout(timer);
  }, []);
}
