import React from 'react';
import { IMG } from '../content';
import content from '../content';

export default function Footer() {
  return (
    <footer>
      <div className="fr">
        <span>{content.footer.copy}</span>
        <span>{content.footer.address}</span>
      </div>
      <div className="fwl" id="fwl" role="img" aria-label="ORQAVYN">
        {content.footerSlices.map((clip, i) => (
          <span
            className="fl"
            key={i}
            style={{ '--i': i, clipPath: clip } as React.CSSProperties}
          >
            <img src={IMG.word} alt="" />
          </span>
        ))}
      </div>
    </footer>
  );
}
