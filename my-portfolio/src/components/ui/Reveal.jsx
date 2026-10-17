import React from 'react';
import { motion } from 'motion/react';

export default function Reveal({
  children,
  delay = 0,
  duration = 0.5,
  yOffset = 20,
  className = '',
  threshold = 0.1,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
