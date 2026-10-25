import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'motion/react';

export function TextGenerateEffect({
  words,
  className = '',
  filter = true,
  duration = 0.7,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none',
        transform: 'translateY(0px)',
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.06),
      }
    );
  }, [animate, filter, duration]);

  return (
    <div className={className} ref={scope}>
      {wordsArray.map((word, idx) => {
        return (
          <motion.span
            key={word + idx}
            className="opacity-0 inline-block mr-[0.25em]"
            style={{
              filter: filter ? 'blur(8px)' : 'none',
              transform: 'translateY(6px)',
            }}
          >
            {word}{' '}
          </motion.span>
        );
      })}
    </div>
  );
}
