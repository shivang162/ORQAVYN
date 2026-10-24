import React from 'react';

/** Odometer digit column */
function OdoDigit({ d, k }: { d: number; k: number }) {
  return (
    <span className="od" aria-hidden="true">
      <span className="dg" style={{ '--d': d, '--k': k } as React.CSSProperties}>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => <b key={n}>{n}</b>)}
      </span>
    </span>
  );
}

interface MetricData {
  digits?: readonly number[];
  suffix?: string;
  afterDot?: readonly number[];
  afterSuffix?: string;
  text?: string;
  label: string;
}

interface StatData {
  digits: readonly number[];
  suffix?: string;
  afterDot?: readonly number[];
  afterSuffix?: string;
}

/** Render stat or metric value with odometer digits */
function StatValue({ data, ariaLabel }: { data: StatData; ariaLabel: string }) {
  return (
    <span aria-label={ariaLabel}>
      {data.digits.map((d, k) => <OdoDigit key={`d${k}`} d={d} k={k} />)}
      {data.suffix && <span aria-hidden="true">{data.suffix}</span>}
      {data.afterDot?.map((d, k) => <OdoDigit key={`ad${k}`} d={d} k={data.digits.length + k} />)}
      {data.afterSuffix && <span aria-hidden="true">{data.afterSuffix}</span>}
    </span>
  );
}

function MetricValue({ data }: { data: MetricData }) {
  if (data.text) {
    return (
      <b>
        <span aria-label={data.text}>
          {[...data.text].map((c, i) => <span key={i} aria-hidden="true">{c}</span>)}
        </span>
      </b>
    );
  }

  const digits = data.digits || [];
  const ariaStr = digits.join('') + (data.suffix || '') + (data.afterDot?.join('') || '') + (data.afterSuffix || '');

  return (
    <b>
      <StatValue data={{ digits, suffix: data.suffix, afterDot: data.afterDot, afterSuffix: data.afterSuffix }} ariaLabel={ariaStr} />
    </b>
  );
}

export { OdoDigit, StatValue, MetricValue };
export type { MetricData, StatData };
