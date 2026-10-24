import content from '../content';

export default function Bottleneck() {
  const { bottleneck } = content;
  return (
    <section className="sec">
      <div className="lab dec">{bottleneck.label}</div>
      <h2 className="ls">{bottleneck.heading}</h2>
      <div className="list">
        {bottleneck.rows.map(r => (
          <div className="row fo" key={r.n}>
            <span className="n">{r.n}</span>
            <h3>{r.h}</h3>
            <p>{r.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
