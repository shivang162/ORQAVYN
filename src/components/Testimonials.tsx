import { useEffect, useRef, useCallback } from 'react';
import content from '../content';

export default function Testimonials() {
  const { testimonials } = content;
  const currentRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const barRef = useRef<HTMLElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const slidesRef = useRef<HTMLDivElement>(null);

  const showRef = useRef<(i: number) => void>(() => {});

  const show = useCallback((i: number) => {
    const slides = slidesRef.current?.querySelectorAll<HTMLElement>('.slide');
    if (!slides) return;
    const total = slides.length;
    const n = ((i % total) + total) % total;

    slides.forEach((s, k) => {
      s.classList.toggle('on', k === n);
      s.classList.toggle('out', k < n && k !== n);
    });

    currentRef.current = n;
    if (countRef.current) {
      countRef.current.textContent = `0${n + 1} / 0${total}`;
    }

    if (barRef.current) {
      barRef.current.classList.remove('run');
      void barRef.current.offsetWidth;
      barRef.current.classList.add('run');
    }

    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => showRef.current(currentRef.current + 1), 6000);
  }, []);

  useEffect(() => {
    showRef.current = show;
  }, [show]);

  useEffect(() => {
    show(0);
    return () => clearInterval(timerRef.current);
  }, [show]);

  return (
    <section className="sec">
      <div className="lab dec">{testimonials.label}</div>
      <h2 className="ls">{testimonials.heading}</h2>
      <div className="slider" id="sl">
        <div className="slides" ref={slidesRef}>
          {testimonials.slides.map((slide, i) => (
            <figure className="slide" key={i}>
              <blockquote>{slide.quote}</blockquote>
              <p>{slide.p}</p>
              <figcaption>{slide.cite}</figcaption>
            </figure>
          ))}
        </div>
        <div className="sctl">
          <button className="pill" id="prev" aria-label="Previous" onClick={() => show(currentRef.current - 1)}>←</button>
          <span id="scount" ref={countRef}>01 / 03</span>
          <button className="pill" id="next" aria-label="Next" onClick={() => show(currentRef.current + 1)}>→</button>
        </div>
        <div className="sbar"><i id="sbf" ref={barRef}></i></div>
      </div>
    </section>
  );
}
