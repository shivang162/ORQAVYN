import { useEffect } from 'react';
import Lenis from 'lenis';

/**
 * Starts smooth scrolling after the intro finishes.
 * Handles anchor link interception.
 */
export function useLenis() {
  useEffect(() => {
    let lenis: Lenis | null = null;
    let raf: number;

    const start = () => {
      lenis = new Lenis({ lerp: 0.09 });
      document.documentElement.classList.add('lenis');

      function loop(time: number) {
        lenis!.raf(time);
        raf = requestAnimationFrame(loop);
      }
      raf = requestAnimationFrame(loop);

      /* Intercept anchor links for smooth scroll */
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
          const target = document.querySelector<HTMLElement>(a.getAttribute('href')!);
          if (target && lenis) {
            e.preventDefault();
            lenis.scrollTo(target);
          }
        });
      });
    };

    window.addEventListener('intro:done', start);

    return () => {
      window.removeEventListener('intro:done', start);
      if (lenis) lenis.destroy();
      cancelAnimationFrame(raf);
    };
  }, []);
}
