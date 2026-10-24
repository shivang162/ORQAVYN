import content from '../content';

export default function Dock() {
  return (
    <nav className="dock" aria-label="Sections">
      {content.dock.links.map(l => (
        <a key={l.href} href={l.href}>{l.label}</a>
      ))}
    </nav>
  );
}
