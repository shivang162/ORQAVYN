import { useEffect, useRef } from 'react';
import Intro from './components/Intro';
import TopBar from './components/TopBar';
import Dock from './components/Dock';
import Hero from './components/Hero';
import Bottleneck from './components/Bottleneck';
import SolutionsScene from './components/SolutionsScene';
import Tailored from './components/Tailored';
import Proof from './components/Proof';
import Partnership from './components/Partnership';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Cta from './components/Cta';
import Footer from './components/Footer';

import { useScrollFx, useSectionStack } from './hooks/useScrollFx';
import { useReveal, useSplitLines } from './hooks/useReveal';
import { useLenis } from './hooks/useLenis';
import { useCursor, useHeroParallax } from './hooks/useCursor';

export default function App() {
  const readyRef = useRef(false);

  useEffect(() => {
    readyRef.current = true;

    /* Magnetic pill buttons */
    const mags = document.querySelectorAll<HTMLElement>('.mag');
    const handlers = new Map<HTMLElement, { move: (e: MouseEvent) => void; leave: () => void }>();

    mags.forEach(m => {
      const move = (e: MouseEvent) => {
        const r = m.getBoundingClientRect();
        const cl = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
        m.style.transform = `translate(${cl((e.clientX - r.left - r.width / 2) * .2, -12, 12)}px,${cl((e.clientY - r.top - r.height / 2) * .3, -12, 12)}px)`;
      };
      const leave = () => { m.style.transform = ''; };
      m.addEventListener('mousemove', move);
      m.addEventListener('mouseleave', leave);
      handlers.set(m, { move, leave });
    });

    return () => {
      handlers.forEach(({ move, leave }, m) => {
        m.removeEventListener('mousemove', move);
        m.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  useSplitLines(true);
  useReveal(true);
  useScrollFx(true);
  useSectionStack(true);
  useLenis();
  useCursor();
  useHeroParallax();

  return (
    <>
      <div id="prog2"></div>
      <TopBar />
      <Dock />
      <div id="site">
        <main>
          <Hero />
          <Bottleneck />
          <SolutionsScene />
          <Tailored />
          <Proof />
          <Partnership />
          <Process />
          <Testimonials />
          <Faq />
          <Cta />
        </main>
        <Footer />
      </div>
      <Intro />
    </>
  );
}
