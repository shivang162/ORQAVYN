import content from '../content';

export default function Tailored() {
  const { tailored } = content;
  return (
    <section className="sec light" id="who">
      <div className="lband" id="band">
        <div className="lab dec">{tailored.label}</div>
        <h2 className="ls">{tailored.heading}</h2>
        <div className="cards">
          {tailored.cards.map((card, i) => (
            <article className="card rv3" key={i} style={{ '--d': `${i * 0.12}s` } as React.CSSProperties}>
              <small>{card.cat}</small>
              <h3>{card.h}</h3>
              <h4>Current Problem</h4>
              <p>{card.problem}</p>
              <h4>Your Measured Outcome</h4>
              <p>{card.outcome}</p>
            </article>
          ))}
        </div>
        <p className="sub rv3">
          {tailored.sub}{' '}
          <a href="#contact">{tailored.subLink}</a>
        </p>
      </div>
    </section>
  );
}
