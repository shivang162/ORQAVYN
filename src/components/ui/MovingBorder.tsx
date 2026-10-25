import React from 'react';
import { motion } from 'motion/react';

interface MovingBorderButtonProps {
  borderRadius?: string;
  children: React.ReactNode;
  as?: React.ElementType;
  containerClassName?: string;
  _borderClassName?: string;
  duration?: number;
  className?: string;
  [key: string]: any;
}

export function MovingBorderButton({
  borderRadius = '9999px',
  children,
  as: Component = 'a',
  containerClassName = '',
  _borderClassName = '',
  duration = 3000,
  className = '',
  ...otherProps
}: MovingBorderButtonProps) {
  return (
    <Component
      className={`relative inline-block p-[1px] overflow-hidden rounded-[var(--border-radius)] ${containerClassName}`}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ borderRadius: borderRadius }}
      >
        <motion.div
          className={`absolute h-16 w-16 opacity-70 bg-[radial-gradient(circle,var(--warm)_0%,transparent_70%)] ${_borderClassName}`}
          animate={{
            x: ['0%', '250%', '250%', '0%', '0%'],
            y: ['0%', '0%', '150%', '150%', '0%'],
          }}
          transition={{
            duration: duration / 1000,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div
        className={`relative bg-[var(--warm)] text-[var(--bg)] border border-[var(--warm)] font-medium ${className}`}
        style={{
          borderRadius: `calc(${borderRadius} - 1px)`,
        }}
      >
        {children}
      </div>
    </Component>
  );
}
