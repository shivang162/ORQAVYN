"use client";
import type { ReactNode } from "react";
import { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

export const MovingBorder = ({
  children,
  duration = 3500,
  rx = "30%",
  ry = "30%",
  ...otherProps
}: {
  children: ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  [key: string]: any;
}) => {
  const pathRef = useRef<SVGRectElement | null>(null);
  const progress = useMotionValue<number>(0);
  const shouldReduceMotion = useReducedMotion();

  useAnimationFrame((time) => {
    if (shouldReduceMotion) return;
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x ?? 0,
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y ?? 0,
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full pointer-events-none"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      {!shouldReduceMotion && (
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            display: "inline-block",
            transform,
            pointerEvents: "none",
          }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export function Button({
  borderRadius = "9999px",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration = 3500,
  className,
  ...otherProps
}: {
  borderRadius?: string;
  children: ReactNode;
  as?: any;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "moving-border-btn relative inline-flex items-center justify-center overflow-hidden",
        containerClassName,
      )}
      style={{
        borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="moving-border-track absolute inset-0 pointer-events-none"
        style={{ borderRadius }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn("moving-border-glow", borderClassName)}
          />
        </MovingBorder>
      </div>

      <div
        className={cn("moving-border-content", className)}
        style={{
          borderRadius,
        }}
      >
        {children}
      </div>
    </Component>
  );
}

export { Button as MovingBorderButton };
export default Button;
