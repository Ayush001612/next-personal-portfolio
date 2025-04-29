'use client';

import { motion } from 'framer-motion';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiMongodb,
  SiHtml5,
  SiJavascript,
  SiGreensock,
} from 'react-icons/si';

const technologies = [
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'GSAP', icon: SiGreensock },
];

export const Stack = () => {
  return (
    <section id='stack' className='py-20 text-white overflow-hidden'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-5xl font-bold mb-12'
        >
          Tech Stack
        </motion.h2>
        <div className='relative w-full overflow-hidden'>
          <motion.div
            className='flex gap-8'
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 20,
                ease: 'linear',
              },
            }}
          >
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className='flex flex-col items-center justify-center glass p-8 rounded-xl w-[250px] h-[250px] flex-shrink-0'
              >
                <tech.icon className='text-5xl mb-4' />
                <span className='text-xl font-medium text-center'>
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
