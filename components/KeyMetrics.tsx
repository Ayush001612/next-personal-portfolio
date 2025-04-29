'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';

const metrics = [
  {
    id: 1,
    value: '5+',
    label: 'Years of Experience',
    description: 'Dedicated to honing my skills in full-stack development.',
  },
  {
    id: 2,
    value: '50+',
    label: 'Projects Completed',
    description: 'From small applications to complex web platforms.',
  },
  {
    id: 3,
    value: '10+',
    label: 'Technologies Mastered',
    description: 'Proficient in various programming languages and frameworks.',
  },
  {
    id: 4,
    value: '99%',
    label: 'Code Quality',
    description:
      'Committed to writing clean, efficient, and maintainable code.',
  },
  {
    id: 5,
    value: '1000+',
    label: 'Commits on GitHub',
    description: 'Active contributor to open-source and personal projects.',
  },
];

/* Commented out the entire KeyMetrics component for now
export const KeyMetrics = () => {
  return (
    <section className='py-20 text-white'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8'>
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='glass p-6 rounded-xl text-center'
            >
              <h3 className='text-4xl font-bold mb-2'>{metric.value}</h3>
              <p className='text-xl font-semibold mb-2'>{metric.label}</p>
              <p className='text-gray-300'>{metric.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
*/
