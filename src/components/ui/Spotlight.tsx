interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({
  className = '',
  fill = 'white',
}: SpotlightProps) {
  return (
    <div
      className={`pointer-events-none absolute z-0 opacity-20 blur-[140px] ${className}`}
    >
      <div
        style={{
          background: `radial-gradient(circle, ${fill} 0%, rgba(255,255,255,0) 70%)`,
        }}
        className="w-[700px] h-[700px] rounded-full"
      />
    </div>
  );
}
