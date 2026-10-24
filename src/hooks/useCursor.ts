import { useEffect } from 'react';

/**
 * Crosshair cursor on desktop (hover:hover + pointer:fine).
 * Uses direct DOM like the reference.
 */
export function useCursor() {
  useEffect(() => {
    if (!matchMedia('(hover:hover) and (pointer:fine)').matches) return;

    const c = document.createElement('div');
    c.id = 'cx';
    c.innerHTML = '<div class="ci"><i></i><i></i></div>';
    document.body.appendChild(c);
    document.body.classList.add('cur');

    let x = -99, y = -99, rx = -99, ry = -99;
    let raf: number;

    const onMove = (e: MouseEvent) => { x = e.clientX; y = e.clientY; };

    function frame() {
      rx += (x - rx) * .2;
      ry += (y - ry) * .2;
      c.style.transform = `translate(${rx}px,${ry}px)`;
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    const onOver = (e: MouseEvent) => {
      c.classList.toggle('hot', !!(e.target as HTMLElement).closest('a,button,.card,.case,figure,input,select,textarea'));
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      c.remove();
      document.body.classList.remove('cur');
    };
  }, []);
}

/**
 * Hero Q parallax – follows mouse position.
 */
export function useHeroParallax() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const hqs = document.getElementById('hqs');
      if (!hqs) return;
      const x = e.clientX / window.innerWidth - .5;
      const y = e.clientY / window.innerHeight - .5;
      hqs.style.transform = `translate(${x * -30}px,${y * -30}px) rotate(${x * 6}deg)`;
    };

    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
}
