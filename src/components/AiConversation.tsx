import { useEffect, useRef } from 'react';
import { IMG } from '../content';
import content from '../content';

export default function AiConversation() {
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = chatRef.current;
    if (!c) return;

    const cb = c.querySelector<HTMLElement>('.cb')!;
    const bs = Array.from(cb.querySelectorAll<HTMLElement>('.b'));
    const full = bs.map(b => b.textContent || '');
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduce) {
      bs.forEach(b => b.classList.add('show'));
      return;
    }

    let runId = 0;
    const wait = (ms: number) => new Promise<void>(r => setTimeout(r, ms));

    async function play() {
      const id = ++runId;
      cb.querySelectorAll('.typing').forEach(t => t.remove());
      bs.forEach(b => { b.classList.remove('show'); b.textContent = ''; });
      cb.scrollTop = 0;

      for (let i = 0; i < bs.length; i++) {
        const b = bs[i];
        await wait(i ? 700 : 300);
        if (id !== runId) return;

        if (b.classList.contains('a')) {
          const t = document.createElement('div');
          t.className = 'b typing show';
          t.innerHTML = '<i></i><i></i><i></i>';
          cb.insertBefore(t, b);
          cb.scrollTop = cb.scrollHeight;
          await wait(1100);
          t.remove();
          if (id !== runId) return;
          b.classList.add('show');
          for (let k = 1; k <= full[i].length; k++) {
            if (id !== runId) return;
            b.textContent = full[i].slice(0, k);
            cb.scrollTop = cb.scrollHeight;
            await wait(16);
          }
        } else {
          b.textContent = full[i];
          b.classList.add('show');
          cb.scrollTop = cb.scrollHeight;
        }
      }
    }

    bs.forEach(b => b.textContent = '');

    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (entries[0].isIntersecting) { obs.disconnect(); play(); }
      },
      { threshold: 0.5 }
    );
    observer.observe(c);

    const replayBtn = c.querySelector<HTMLElement>('.rep');
    if (replayBtn) replayBtn.onclick = play;

    return () => {
      runId++;
      observer.disconnect();
    };
  }, []);

  const { aiConversation: ai } = content;

  return (
    <div className="chat" id="ai" ref={chatRef}>
      <div className="ch">
        <span className="av">
          <img src={IMG.ring} alt="" />
          <img src={IMG.slash} alt="" />
        </span>
        <div>
          <b>{ai.title}</b>
          <small>{ai.subtitle}</small>
        </div>
        <button className="rep" type="button">Replay</button>
        <span className="live"></span>
      </div>
      <div className="cb" role="log" aria-live="polite">
        {ai.messages.map((m, i) => (
          <div key={i} className={`b ${m.role === 'user' ? 'u' : 'a'}`}>{m.text}</div>
        ))}
      </div>
      <div className="cin">
        <span>Message…</span>
        <i></i>
      </div>
    </div>
  );
}
