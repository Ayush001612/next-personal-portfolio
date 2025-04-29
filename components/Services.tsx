'use client';

import { motion } from 'framer-motion';

const services = [
  {
    id: '01',
    title: 'Frontend Developer Intern',
    description:
      'As a Frontend Developer Intern, I design responsive, intuitive user interfaces using React, JavaScript, and modern styling frameworks.',
  },
  {
    id: '02',
    title: 'Software Engineer Intern',
    description:
      'As a Software Engineer Intern, I build reliable and scalable solutions with a strong grasp of data structures, algorithms, and full-stack development.',
  },
  {
    id: '03',
    title: 'Freelance WebDev Projects',
    description:
      'As a Freelance Web Developer, I build fast, responsive websites using Next.js, TypeScript, and modern UI tools.',
  },
  {
    id: '04',
    title: 'FullStack Developer',
    description:
      'As a Full Stack Developer, I build scalable web apps using React, Next.js, TypeScript, Node.js, and MongoDB.',
  },
];

export const Services = () => {
  return (
    <section id='services' className='text-white py-20'>
      <div className='container mx-auto px-4 md:px-8 lg:px-12'>
        <div className='text-center mb-16'>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='text-5xl font-extrabold'
          >
            <span className='text-white'>Open to</span>{' '}
            <span className='text-purple-300'>Work As</span>
          </motion.h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                y: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: [0.5, 0, 0.2, 1],
                },
              }}
              className='glass p-6 rounded-xl'
            >
              <h3 className='text-2xl font-bold mb-2'>{service.title}</h3>
              <p className='text-gray-300'>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
