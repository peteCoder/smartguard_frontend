import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const FadeInWhenVisible = ({ children, delay = 0 }: {children: React.ReactNode, delay?: number}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -100px 0px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
};
