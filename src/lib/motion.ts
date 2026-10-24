/**
 * Cubic-bezier solver – same numerical approach as the reference.
 * Returns a function that maps t ∈ [0,1] → y ∈ [0,1].
 */
export const bez = (a: number, b: number, c: number, d: number) => (x: number): number => {
  if (x <= 0) return 0;
  if (x >= 1) return 1;
  let lo = 0, hi = 1, t = x;
  for (let i = 0; i < 22; i++) {
    const u = 1 - t;
    const cx = 3 * a * t * u * u + 3 * c * t * t * u + t * t * t;
    if (cx < x) {
      lo = t;
    } else {
      hi = t;
    }
    t = (lo + hi) / 2;
  }
  const u = 1 - t;
  return 3 * b * t * u * u + 3 * d * t * t * u + t * t * t;
};

/** Ease-out (.16,1,.3,1) – the primary motion curve */
export const eOut = bez(0.16, 1, 0.3, 1);

/** Ease-in-out (.76,0,.24,1) – used for the scan line, split reveal */
export const eIO = bez(0.76, 0, 0.24, 1);

/** Clamp value between a and b */
export const cl = (v: number, a = 0, b = 1): number => Math.min(b, Math.max(a, v));

/** Segment: normalise t within the [a,b] window → 0..1 */
export const seg = (t: number, a: number, b: number): number => cl((t - a) / (b - a));
