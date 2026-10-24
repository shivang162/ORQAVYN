import { useCallback } from 'react';
import content from '../content';

export default function Faq() {
  const { faq } = content;

  const handleClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const qa = btn.parentNode as HTMLElement;
    const isOpen = qa.classList.contains('open');

    /* Close all */
    document.querySelectorAll('.qa').forEach(x => {
      x.classList.remove('open');
      x.querySelector('button')?.setAttribute('aria-expanded', 'false');
    });

    /* Open this one if it wasn't already open */
    if (!isOpen) {
      qa.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  }, []);

  return (
    <section className="sec" id="faq">
      <div className="faqwrap">
        <div className="faqh">
          <div className="lab dec">{faq.label}</div>
          <h2 className="ls">{faq.heading}</h2>
          <p className="sub rv3">{faq.sub}</p>
        </div>
        <div className="faq">
          {faq.items.map((item, i) => (
            <div className="qa rv3" key={i}>
              <button aria-expanded="false" onClick={handleClick}>
                <span>{item.q}</span>
                <i></i>
              </button>
              <div className="ans">
                <div><p>{item.a}</p></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
