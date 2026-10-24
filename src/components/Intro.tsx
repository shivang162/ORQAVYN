import { useEffect, useRef, useCallback, useState } from 'react';
import { IMG } from '../content';
import content from '../content';
import { eOut, eIO, seg } from '../lib/motion';

/** Intro timing config – identical to the reference */
const T = {
  grid: .1, letters: 1, stagger: .085, letterDur: .85,
  ringA: 1.9, ringB: 2.9, slashA: 2.5, slashB: 3.2,
  scanA: 3, scanB: 3.9, tagA: 3.2, tagB: 3.7,
  hold: 4.2, splitB: 5.3, heroGo: 4.8, unlock: 5.9,
};

/** Layout constants */
const L = {
  qw: .244, qAspect: 1098 / 1175, gap: .011,
  ww: .745, wTop: .0742, H: .228, wAspect: 194 / 1600,
};

/** Letter-slice boundaries (ORQAVYN) */
const B: [number, number][] = [
  [-.01, -.01], [.157, .157], [.308, .308], [.5, .459],
  [.554, .628], [.716, .72], [.87, .87], [1.01, 1.01],
];

const mask = (el: HTMLElement, v: string) => {
  el.style.webkitMaskImage = v;
  el.style.maskImage = v;
};

export default function Intro() {
  const introRef = useRef<HTMLDivElement>(null);
  const [isReduced] = useState(() =>
    typeof window !== 'undefined' ? matchMedia('(prefers-reduced-motion: reduce)').matches : false
  );

  const finish = useCallback(() => {
    introRef.current?.remove();
    const site = document.getElementById('site');
    if (site) { site.style.transform = ''; site.style.opacity = ''; }
    document.documentElement.classList.remove('lock');
    document.body.classList.add('go');
    window.dispatchEvent(new Event('intro:done'));
  }, []);

  useEffect(() => {
    if (isReduced) {
      introRef.current?.remove();
      document.body.classList.add('go');
      window.dispatchEvent(new Event('intro:done'));
      return;
    }

    const intro = introRef.current!;
    const q2 = intro.querySelector<HTMLElement>('#q2')!;
    const w2 = intro.querySelector<HTMLElement>('#w2')!;
    const r2 = intro.querySelector<HTMLImageElement>('#r2')!;
    const s2 = intro.querySelector<HTMLImageElement>('#s2')!;
    const ui = intro.querySelector<HTMLElement>('#ui')!;
    const lk = intro.querySelector<HTMLElement>('#lk')!;
    const pt = intro.querySelector<HTMLElement>('.pt')!;
    const pb = intro.querySelector<HTMLElement>('.pb')!;
    const grid = intro.querySelector<HTMLElement>('#grid')!;
    const site = document.getElementById('site')!;

    /* Build grid lines */
    const lines: HTMLElement[] = [];
    [.2, .5, .8].forEach(p => {
      const i = document.createElement('i');
      i.className = 'gl gh';
      i.style.top = p * 100 + '%';
      lines.push(i);
    });
    [.125, .25, .375, .5, .625, .75, .875].forEach(p => {
      const i = document.createElement('i');
      i.className = 'gl gv';
      i.style.left = p * 100 + '%';
      lines.push(i);
    });
    grid.append(...lines);

    /* Build letter slices */
    const lw = B.slice(0, 7).map((a, idx) => {
      const b = B[idx + 1];
      const d = document.createElement('div');
      d.className = 'lw';
      d.style.clipPath = `polygon(${a[0] * 100}% 0,${b[0] * 100}% 0,${b[1] * 100}% 100%,${a[1] * 100}% 100%)`;
      const im = new Image();
      im.src = IMG.word;
      im.alt = '';
      d.append(im);
      w2.append(d);
      return im;
    });

    /* Layout function */
    const layout = () => {
      const vw = innerWidth, vh = innerHeight;
      const mob = vw < 700;
      const LW = mob ? vw * .84 : Math.min(vw * .64, 1150);
      const left = (vw - LW) / 2;
      const top = (vh - LW * L.H) / 2 - vh * .02;
      const qw = L.qw * LW;

      Object.assign(q2.style, {
        left: left + 'px', top: top + 'px',
        width: qw + 'px', height: qw * L.qAspect + 'px',
      });
      Object.assign(w2.style, {
        left: left + (L.qw + L.gap) * LW + 'px',
        top: top + L.wTop * LW + 'px',
        width: L.ww * LW + 'px',
        height: L.ww * LW * L.wAspect + 'px',
      });

      const tg = intro.querySelector<HTMLElement>('#tg');
      if (tg) tg.style.top = top + LW * L.H + Math.max(32, vh * .06) + 'px';
    };
    layout();
    window.addEventListener('resize', layout);

    /* Frame function – the heart of the intro */
    const frame = (t: number) => {
      lines.forEach((l, i) => {
        const p = eOut(seg(t, T.grid + i * .07, T.grid + i * .07 + .9));
        l.style.transform = i < 3 ? `scaleX(${p})` : `scaleY(${p})`;
      });
      lw.forEach((im, i) => {
        const p = eOut(seg(t, T.letters + i * T.stagger, T.letters + i * T.stagger + T.letterDur));
        im.style.transform = `translateY(${(1 - p) * 115}%)`;
      });

      const rp = eOut(seg(t, T.ringA, T.ringB));
      r2.style.opacity = String(Math.min(1, rp * 3));
      r2.style.transform = `rotate(${-120 * (1 - rp)}deg) scale(${.55 + .45 * rp})`;
      r2.style.clipPath = rp >= 1 ? 'none' : `circle(${rp * 75}% at 50% 50%)`;

      const sp = eOut(seg(t, T.slashA, T.slashB));
      s2.style.opacity = String(Math.min(1, sp * 4));
      s2.style.transform = `translate(${-30 * (1 - sp)}%,${-30 * (1 - sp)}%)`;
      mask(s2, sp >= 1 ? 'none' : `linear-gradient(125deg,#000 ${sp * 100}%,transparent ${sp * 100}%)`);

      const sc = eIO(seg(t, T.scanA, T.scanB));
      const scan = intro.querySelector<HTMLElement>('#scan');
      if (scan) { scan.style.left = sc * 100 + 'vw'; scan.style.opacity = (sc > 0 && sc < 1) ? '1' : '0'; }

      const tgP = seg(t, T.tagA, T.tagB);
      const tg = intro.querySelector<HTMLElement>('#tg');
      if (tg) { tg.style.opacity = String(tgP); tg.style.transform = `translateY(${10 * (1 - tgP)}px)`; }

      const pr = seg(t, 0, T.hold);
      const prog = intro.querySelector<HTMLElement>('#prog');
      if (prog) prog.style.transform = `scaleX(${pr})`;
      const cnt = intro.querySelector<HTMLElement>('#cnt');
      if (cnt) cnt.textContent = String(Math.round(pr * 100)).padStart(3, '0');

      const sp2 = eIO(seg(t, T.hold, T.splitB));
      pt.style.transform = `translateY(${-sp2 * 100}%)`;
      pb.style.transform = `translateY(${sp2 * 100}%)`;
      ui.style.opacity = String(1 - seg(t, T.hold, T.hold + .5));
      lk.style.transform = `scale(${1 + .1 * sp2})`;

      site.style.transform = sp2 >= 1 ? '' : `scale(${1.1 - .1 * sp2})`;
      site.style.opacity = String(.35 + .65 * sp2);
    };

    document.documentElement.classList.add('lock');
    frame(0);

    /* Load images & fonts, then start animation loop */
    (async () => {
      await Promise.all(
        Object.values(IMG).map(s => new Promise<void>(r => {
          const i = new Image();
          i.onload = i.onerror = () => r();
          i.src = s;
        }))
      );
      await Promise.race([
        document.fonts ? document.fonts.ready : Promise.resolve(),
        new Promise(r => setTimeout(r, 1200)),
      ]);

      let t0 = performance.now();
      let went = false;

      const skipBtn = intro.querySelector<HTMLElement>('#skip');
      if (skipBtn) {
        skipBtn.onclick = () => { t0 = Math.min(t0, performance.now() - T.hold * 1000); };
      }

      (function loop(now: number) {
        const t = (now - t0) / 1000;
        frame(t);
        if (!went && t >= T.heroGo) { went = true; document.body.classList.add('go'); }
        if (t >= T.unlock) { finish(); return; }
        requestAnimationFrame(loop);
      })(t0);
    })();

    return () => {
      window.removeEventListener('resize', layout);
    };
  }, [finish, isReduced]);

  if (isReduced) return null;

  return (
    <div id="intro2" ref={introRef} aria-label="ORQAVYN">
      <div className="pt"></div>
      <div className="pb"></div>
      <div id="ui">
        <div id="grid"></div>
        <div id="lk">
          <div className="bx" id="q2">
            <img id="r2" src={IMG.ring} alt="" />
            <img id="s2" src={IMG.slash} alt="" />
          </div>
          <div className="bx" id="w2"></div>
        </div>
        <div id="scan"></div>
        <div id="tg">{content.intro.tagline}</div>
        <div className="hud" id="cnt" style={{ left: 'var(--m)', bottom: '20px' }}>000</div>
        <div className="hud" style={{ left: 'var(--m)', top: '20px' }}>{content.intro.hudLoading}</div>
        <div className="hud" style={{ right: 'var(--m)', top: '20px' }}>{content.intro.hudYear}</div>
        <button id="skip">{content.intro.skip}</button>
        <div id="prog"></div>
      </div>
    </div>
  );
}
