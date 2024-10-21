import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const Counter = ({ targetCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval;
    if (count < targetCount) {
      interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 50);  // 50 ms for faster increment
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [count, targetCount]);

  return (
    <AnimatePresence>
      <motion.div
        key={count}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
      >
        {count}
      </motion.div>
    </AnimatePresence>
  );
};

export default Counter;
