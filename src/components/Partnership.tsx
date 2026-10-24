import React from 'react';
import { IMG } from '../content';
import content from '../content';

export default function Partnership() {
  const { partnership } = content;
  return (
    <section className="sec">
      <div className="lab dec">{partnership.label}</div>
      <h2 className="pwh">
        {partnership.headingWords.map((w, i) => (
          <React.Fragment key={i}>
            <span className="pw">{w}</span>{' '}
          </React.Fragment>
        ))}
      </h2>
      <p className="sub rv3">{partnership.sub}</p>
      <div className="list">
        {partnership.rows.map(r => (
          <div className="row rv3" key={r.n}>
            <span className="n">{r.n}</span>
            <h3>{r.h}</h3>
            <p>{r.p}</p>
          </div>
        ))}
      </div>
      <blockquote className="quote">
        <div className="qq" data-px="-.08" data-rot="-6">
          <img src={IMG.ring} alt="" />
          <img src={IMG.slash} alt="" />
        </div>
        <p className="rv3">{partnership.quote}</p>
        <cite className="rv3">{partnership.cite}</cite>
      </blockquote>
    </section>
  );
}
