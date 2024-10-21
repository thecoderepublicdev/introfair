import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function AnimatedText({className, children}) {
  const sentence = children;
  const letters = sentence.split("");
  
  const controls = useAnimation();
  
  useEffect(() => {
    const sequence = async () => {
      await controls.start("visible");
      controls.set("end");
    };

    sequence();
  }, [controls]);

  return (
    <motion.div
      initial="hidden"
      className='tracking-tighter	text-8xl mb-4 font-white'
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: { 
          opacity: 1,
          transition: { delay: 0.5, staggerChildren: 0.08 }
        },
        end: {}
      }}
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className={className}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: [0.6, 0.01, 0.05, 0.95] }
            },
            end: {}
          }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
