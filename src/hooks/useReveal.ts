import { useEffect } from 'react';

const CH = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/';

function decode(e: HTMLElement) {
  const t = e.dataset.t!;
  let f = 0;
  const id = setInterval(() => {
    f++;
    e.textContent = [...t].map((c, i) =>
      c === ' ' || i < f / 2 ? c : CH[Math.random() * CH.length | 0]
    ).join('');
    if (f / 2 >= t.length) {
      clearInterval(id);
      e.textContent = t;
    }
  }, 28);
}

/**
 * One-way reveal observer: adds `.in` class to elements when they enter viewport.
 * Handles `.dec` (scramble decode), `.ls` (line split), `.rv3`, `.row`, `.case`, `.zs`, `.sec`, `.fwl`.
 */
export function useReveal(ready: boolean) {
  useEffect(() => {
    if (!ready) return;

    /* Store original text for decode */
    document.querySelectorAll<HTMLElement>('.dec').forEach(e => {
      if (!e.dataset.t) e.dataset.t = e.textContent || '';
    });

    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (!e.isIntersecting) return;
        const t = e.target as HTMLElement;
        t.classList.add('in');
        observer.unobserve(t);
        if (t.classList.contains('dec')) decode(t);
      }),
      { threshold: 0.2 }
    );

    document.querySelectorAll('.dec,.ls,.rv3,.row,.case,.zs,.sec,.fwl').forEach(e =>
      observer.observe(e)
    );

    return () => observer.disconnect();
  }, [ready]);
}

/**
 * Split headings into masked lines at runtime.
 * Re-splits on resize and after fonts load.
 */
export function useSplitLines(ready: boolean) {
  useEffect(() => {
    if (!ready) return;

    function splitLines(el: HTMLElement) {
      const txt = el.dataset.t || (el.dataset.t = el.textContent?.trim() || '');
      el.innerHTML = txt.split(/\s+/).map(w => `<span class="w3">${w}</span>`).join(' ');
      const lines: string[][] = [];
      let top: number | null = null;
      Array.from(el.children).forEach(w => {
        const t = (w as HTMLElement).offsetTop;
        if (top === null || Math.abs(t - top) > 4) { lines.push([]); top = t; }
        lines[lines.length - 1].push(w.textContent || '');
      });
      el.innerHTML = lines.map((l, i) =>
        `<span class="ln"><span style="transition-delay:${i * .1}s">${l.join(' ')}</span></span>`
      ).join('');
    }

    const resplit = () => {
      document.querySelectorAll<HTMLElement>('.ls').forEach(splitLines);
    };
    resplit();

    if (document.fonts) document.fonts.ready.then(resplit);

    let rt: ReturnType<typeof setTimeout>;
    const onResize = () => { clearTimeout(rt); rt = setTimeout(resplit, 250); };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      clearTimeout(rt);
    };
  }, [ready]);
}
