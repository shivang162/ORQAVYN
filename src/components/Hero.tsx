import { IMG } from '../content';
import content from '../content';

export default function Hero() {
  const { hero } = content;
  return (
    <section className="hero" id="top">
      <div className="hq3" id="hq3">
        <div className="hqs" id="hqs">
          <img src={IMG.ring} alt="" />
          <img src={IMG.slash} alt="" />
        </div>
      </div>
      <div className="hin">
        <div className="chip fade">{hero.chip}</div>
        <h1>
          {hero.h1.map((line, i) => (
            <span className="ln" key={i}>
              <span style={{ transitionDelay: `${i * .1}s` }}>{line}</span>
            </span>
          ))}
        </h1>
        <p className="lead fade">{hero.lead}</p>
        <div className="btns fade">
          <a className="pill solid mag" href="#contact">{hero.cta1}</a>
          <a className="pill" href="#how">{hero.cta2}</a>
        </div>
        <p className="trust fade">{hero.trust}</p>
      </div>
    </section>
  );
}
