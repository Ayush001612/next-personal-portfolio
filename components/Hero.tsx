'use client';

import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className='min-h-screen flex items-center justify-center relative overflow-hidden'>
      <div className='bg-circle-container'>
        <div className='bg-circle-background'></div>
        <div className='bg-circle'></div>
      </div>

      <div className='container mx-auto px-4 z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-center'
        >
          <h1 className='text-6xl md:text-8xl font-bold mb-6'>
            <span className='text-white'>Hi, I'm </span>
            <span className='text-purple-400'>Ayush</span>
          </h1>
          <p className='text-2xl md:text-3xl text-gray-300 mb-8'>
            A FullStack Developer Based in India
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className='flex justify-center gap-4'
          >
            <a
              href='#contact'
              className='px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors'
            >
              Contact Me
            </a>
            <a
              href='#portfolio'
              className='px-8 py-3 border border-purple-600 text-white rounded-full hover:bg-purple-600 transition-colors'
            >
              View Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
