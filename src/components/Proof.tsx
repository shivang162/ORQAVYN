import React from 'react';
import content from '../content';
import { StatValue, MetricValue, type StatData, type MetricData } from './Odometer';
import AiConversation from './AiConversation';

function Bars({ heights }: { heights: readonly number[] }) {
  return (
    <div className="bars" aria-hidden="true">
      {heights.map((h, i) => (
        <i key={i} style={{ '--h': h, '--d': `${i * 0.1}s` } as React.CSSProperties}></i>
      ))}
    </div>
  );
}

export default function Proof() {
  const { proof } = content;
  return (
    <section className="sec">
      <div className="lab dec">{proof.label}</div>
      <h2 className="ls">{proof.heading}</h2>

      {proof.cases.map((c, i) => {
        const stat = c.stat as unknown as StatData;
        const ariaLabel = stat.digits.join('') + (stat.suffix || '') +
          (stat.afterDot?.join('') || '') + ((stat as unknown as Record<string,unknown>).afterSuffix as string || '');

        return (
          <article className="case" key={i}>
            <div className="cl">
              <small>{c.label}</small>
              <div className="stat">
                <StatValue data={stat} ariaLabel={ariaLabel} />
              </div>
              <div className="cap">{c.cap}</div>
            </div>
            <div className="cm">
              <h4>The Bottleneck</h4>
              <p>{c.bottleneck}</p>
              <h4>What Changed</h4>
              <p>{c.changed}</p>
              <div className="two">
                {c.metrics.map((m, j) => (
                  <div key={j}>
                    <MetricValue data={m as unknown as MetricData} />
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="cr">
              {c.visual === 'chat' && <AiConversation />}
              {c.visual === 'bars' && 'bars' in c && <Bars heights={(c as unknown as {bars: readonly number[]}).bars} />}
            </div>
          </article>
        );
      })}
    </section>
  );
}
