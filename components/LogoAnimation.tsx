// This line tells Next.js that this component uses client-side features
'use client';

// Import necessary components and libraries
import Image from 'next/image';
import { motion } from 'framer-motion';
import udemy from '../assets/udemy.png';
import fiverr from '../assets/fiverr.png';
import elementor from '../assets/elementor.png';
import logitech from '../assets/logitech.png';
import oracle from '../assets/oracle.png';
// Define an array of image objects, currently empty
const images = [
  { src: udemy, alt: 'figma' },
  { src: fiverr, alt: 'fiverr' },
  { src: elementor, alt: 'elementor' },
  { src: logitech, alt: 'logitech' },
  { src: oracle, alt: 'oracle' },
  { src: udemy, alt: 'figma' },
  { src: fiverr, alt: 'fiverr' },
  { src: elementor, alt: 'elementor' },
  { src: logitech, alt: 'logitech' },
  { src: oracle, alt: 'oracle' },
  { src: udemy, alt: 'figma' },
  { src: fiverr, alt: 'fiverr' },
  { src: elementor, alt: 'elementor' },
  { src: logitech, alt: 'logitech' },
  { src: oracle, alt: 'oracle' },
  { src: udemy, alt: 'figma' },
  { src: fiverr, alt: 'fiverr' },
  { src: elementor, alt: 'elementor' },
  { src: logitech, alt: 'logitech' },
  { src: oracle, alt: 'oracle' },
];

export const LogoAnimation = () => {
  return (
    <section className='py-20 text-white'>
      <div className='container mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='flex justify-center'
        >
          <div className='w-32 h-32 bg-purple-600 rounded-full flex items-center justify-center'>
            <span className='text-4xl font-bold'>A</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
