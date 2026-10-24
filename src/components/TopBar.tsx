import { IMG } from '../content';
import content from '../content';

export default function TopBar() {
  return (
    <header className="top" id="top2">
      <a href="#top" aria-label="ORQAVYN">
        <img src={IMG.word} alt="ORQAVYN" />
      </a>
      <a className="pill" href="#contact">{content.topBar.cta}</a>
    </header>
  );
}
