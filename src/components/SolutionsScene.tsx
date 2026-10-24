import content from '../content';

export default function SolutionsScene() {
  const { solutions } = content;
  return (
    <section className="scene" id="how" style={{ height: '600vh' }}>
      <div className="sc-in">
        <div className="sc-l">
          <div className="lab dec">{solutions.label}</div>
          <h2 className="ls">{solutions.heading}</h2>
          <p className="sub">{solutions.sub}</p>
          <div className="sc-num" aria-hidden="true">
            <div className="sc-col" id="scc">
              {solutions.items.map(item => (
                <b key={item.n}>{item.n}</b>
              ))}
            </div>
          </div>
        </div>
        <div className="sc-r">
          {solutions.items.map((item, i) => (
            <article className={`si${i === 0 ? ' on' : ''}`} key={item.n}>
              <span className="n">{item.n}</span>
              <small>{item.small}</small>
              <h3>{item.h}</h3>
              <p>{item.p}</p>
            </article>
          ))}
        </div>
        <div className="sc-t" aria-hidden="true">
          {solutions.items.map((_, i) => (
            <i key={i} className={i === 0 ? 'on' : ''}></i>
          ))}
        </div>
      </div>
    </section>
  );
}
