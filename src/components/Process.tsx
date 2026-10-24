import content from '../content';

export default function Process() {
  const { process } = content;
  return (
    <section className="sec" id="process">
      <div className="lab dec">{process.label}</div>
      <h2 className="ls">{process.heading}</h2>
      <div className="zz" id="zz">
        <i className="zl"><b id="zf"></b></i>
        <i className="zdot" id="zdot"></i>
        {process.steps.map((step, i) => (
          <div className={`zs ${i % 2 === 0 ? 'l' : 'r'}`} key={step.n}>
            <span className="n">{step.n}</span>
            <small>{step.small}</small>
            <h3>{step.h}</h3>
            <p>{step.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
