import { useEffect, useRef, useCallback } from 'react';
import { cl, eOut } from '../lib/motion';

/**
 * All scroll-driven effects in a single rAF loop.
 * Mirrors the `upd()` function from the reference exactly.
 */
export function useScrollFx(ready: boolean) {
  const tickRef = useRef(false);
  const curRef = useRef(-1);

  const update = useCallback(() => {
    tickRef.current = false;
    const y = window.scrollY;
    const H = window.innerHeight;
    const doc = document.documentElement.scrollHeight - H;

    /* progress bar */
    const prog2 = document.getElementById('prog2');
    if (prog2) prog2.style.transform = `scaleX(${y / Math.max(1, doc)})`;

    /* hero Q parallax */
    const hq = document.getElementById('hq3');
    if (hq) {
      hq.style.transform = `translate(-50%,-50%) scale(${1 + y / H * .5})`;
      hq.style.opacity = String(.17 * (1 - cl(y / (H * .9))));
    }

    /* Focus list rows */
    document.querySelectorAll<HTMLElement>('.fo').forEach(e => {
      const r = e.getBoundingClientRect();
      e.style.setProperty('--f', cl(1 - Math.abs(r.top + r.height / 2 - H * .5) / (H * .5) * 1.25).toFixed(3));
    });

    /* Pinned solutions scene */
    const scene = document.getElementById('how');
    if (scene && window.innerWidth > 900) {
      const si = document.querySelectorAll<HTMLElement>('.si');
      const ticks = document.querySelectorAll<HTMLElement>('.sc-t i');
      const scc = document.getElementById('scc');
      const r = scene.getBoundingClientRect();
      const p = cl(-r.top / (scene.offsetHeight - H));
      const i = Math.min(si.length - 1, Math.floor(p * si.length));
      if (i !== curRef.current) {
        curRef.current = i;
        si.forEach((e, k) => {
          e.classList.toggle('on', k === i);
          e.classList.toggle('out', k < i);
        });
        ticks.forEach((e, k) => e.classList.toggle('on', k === i));
        if (scc) scc.style.transform = `translateY(${-i}em)`;
      }
    }

    /* Sections tilt/shrink as next section covers */
    const allSections = document.querySelectorAll<HTMLElement>('main > section');
    const secs = document.querySelectorAll<HTMLElement>('main > section:not(.scene)');
    secs.forEach(s => {
      const arr = Array.from(allSections);
      const idx = arr.indexOf(s);
      const n = arr[idx + 1];
      if (!n) return;
      const p = cl((H - n.getBoundingClientRect().top) / H);
      s.style.transformOrigin = '50% 100%';
      s.style.transform = p
        ? `perspective(1400px) rotateX(${p * 3}deg) translateY(${-p * 5}vh) scale(${1 - .03 * p})`
        : '';
      s.style.opacity = String(1 - .45 * p);
    });

    /* Diagonal wipe band */
    const band = document.getElementById('band');
    if (band) {
      const br = band.getBoundingClientRect();
      const q = cl((H - br.top) / H);
      if (q >= 1) band.style.clipPath = 'none';
      else {
        const yl = (1 - q) * H * .9;
        band.style.clipPath = `polygon(0 ${yl}px,100% ${yl - H * .16}px,100% 100%,0 100%)`;
      }
    }

    /* Case studies 3D tilt */
    document.querySelectorAll<HTMLElement>('.case').forEach(c => {
      const r = c.getBoundingClientRect();
      const p = cl((H * .97 - r.top) / (H * .5));
      c.style.transform = `perspective(1400px) rotateX(${(1 - p) * 16}deg) translateY(${(1 - p) * 40}px)`;
      c.style.opacity = String(.15 + .85 * p);
    });

    /* Partnership fill */
    const pwh = document.querySelector<HTMLElement>('.pwh');
    if (pwh) {
      const pws = document.querySelectorAll<HTMLElement>('.pw');
      const r = pwh.getBoundingClientRect();
      const P = cl((H * .85 - r.top) / (H * .55)) * pws.length;
      pws.forEach((w, i) => w.style.setProperty('--f', (cl(P - i) * 100).toFixed(1)));
    }

    /* Zigzag process */
    const zz = document.getElementById('zz');
    if (zz) {
      const zf = document.getElementById('zf');
      const zdot = document.getElementById('zdot');
      const r = zz.getBoundingClientRect();
      const p = cl((H * .6 - r.top) / r.height);
      if (zf) zf.style.transform = `scaleY(${p})`;
      if (zdot) zdot.style.top = p * r.height - 4 + 'px';
    }

    /* Giant CTA heading */
    document.querySelectorAll<HTMLElement>('.giant3 .ln > span').forEach((s, i) => {
      const r = s.parentElement!.getBoundingClientRect();
      const p = eOut(cl((H * .95 - r.top) / (H * .55)));
      s.style.transform = `translateX(${(i % 2 ? 1 : -1) * (1 - p) * 16}vw)`;
      s.style.opacity = String(p);
    });


    /* Dock highlights */
    document.querySelectorAll<HTMLElement>('.dock a').forEach(a => {
      const href = a.getAttribute('href');
      if (!href) return;
      const t = document.querySelector<HTMLElement>(href);
      if (!t) return;
      const r = t.getBoundingClientRect();
      a.classList.toggle('on', r.top < H * .5 && r.bottom > H * .5);
    });
  }, []);

  useEffect(() => {
    if (!ready) return;

    const req = () => {
      if (!tickRef.current) {
        tickRef.current = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', req, { passive: true });
    window.addEventListener('resize', req);
    window.addEventListener('intro:done', req);
    update();

    return () => {
      window.removeEventListener('scroll', req);
      window.removeEventListener('resize', req);
      window.removeEventListener('intro:done', req);
    };
  }, [ready, update]);
}

/** Set section positions and z-indexes */
export function useSectionStack(ready: boolean) {
  useEffect(() => {
    if (!ready) return;
    const secs = document.querySelectorAll<HTMLElement>('main > section:not(.scene)');
    const all = document.querySelectorAll<HTMLElement>('main > section');
    secs.forEach(s => {
      s.style.position = 'relative';
      if (!s.classList.contains('light')) s.style.background = 'var(--bg)';
    });
    all.forEach((s, i) => { s.style.zIndex = String(i + 1); });
  }, [ready]);
}
