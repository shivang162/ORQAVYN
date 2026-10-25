"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { animate, useReducedMotion } from "motion/react";

export interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

export const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.01,
    proximity = 64,
    spread = 40,
    className,
    movementDuration = 1.6,
    borderWidth = 1.5,
    disabled = false,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);
    const shouldReduceMotion = useReducedMotion();

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1]
          );
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");

          if (!isActive) return;

          const currentAngle =
            parseFloat(element.style.getPropertyValue("--start")) || 0;
          const targetAngle =
            (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
              Math.PI +
            90;

          if (shouldReduceMotion) {
            element.style.setProperty("--start", String(targetAngle));
            return;
          }

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value));
            },
          });
        });
      },
      [inactiveZone, proximity, movementDuration, shouldReduceMotion]
    );

    useEffect(() => {
      if (disabled) return;

      const handleScroll = () => handleMove();
      const handlePointerMove = (e: PointerEvent) => handleMove(e);

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    // Premium monochrome palette: soft white/grey luminous gradients
    const monochromeGradient =
      "radial-gradient(circle, #ffffff 10%, rgba(255, 255, 255, 0) 25%), " +
      "radial-gradient(circle at 40% 40%, rgba(242, 240, 235, 0.8) 5%, rgba(242, 240, 235, 0) 20%), " +
      "radial-gradient(circle at 60% 60%, rgba(180, 180, 180, 0.6) 10%, rgba(180, 180, 180, 0) 25%), " +
      "repeating-conic-gradient(from 236.84deg at 50% 50%, #ffffff 0%, rgba(200, 200, 200, 0.85) calc(25% / var(--repeating-conic-gradient-times)), rgba(120, 120, 120, 0.4) calc(50% / var(--repeating-conic-gradient-times)), rgba(220, 220, 220, 0.85) calc(75% / var(--repeating-conic-gradient-times)), #ffffff calc(100% / var(--repeating-conic-gradient-times)))";

    return (
      <div
        ref={containerRef}
        style={
          {
            "--blur": `${blur}px`,
            "--spread": spread,
            "--start": "0",
            "--active": "0",
            "--glowingeffect-border-width": `${borderWidth}px`,
            "--repeating-conic-gradient-times": "5",
            "--gradient": monochromeGradient,
          } as React.CSSProperties
        }
        className={cn(
          "glowing-effect-container pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden",
          className,
          disabled && "!hidden"
        )}
      >
        <div className="glowing-effect-glow" />
        <div className="glowing-effect-fill" />
      </div>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

export default GlowingEffect;
