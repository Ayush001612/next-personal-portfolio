'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Giphy Website',
    description:
      'A fun and interactive Giphy website to search and explore trending GIFs using the Giphy API in real-time.',
    image: '/assets/giphy.png',
    tags: ['React','Tailwind CSS'],
  },
  {
    id: 2,
    title: 'Portfolio Website',
    description:
      'A sleek and responsive personal portfolio built with Next.js, showcasing projects, skills, and contact information with smooth navigation and modern UI',
    image: '/assets/portfolio.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 3,
    title: 'Pokemon Pokedex',
    description:
      'A dynamic Pokémon Pokédex web app built with JavaScript that fetches real-time data from an API and optimizes performance with lazy loading.',
    image: '/assets/pokemon.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
  },
];

export const Portfolio = () => {
  return (
    <section id='portfolio' className='py-20 text-white'>
      <div className='container mx-auto px-4'>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-5xl font-bold mb-12'
        >
          Projects
        </motion.h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className='glass rounded-xl overflow-hidden'
            >
              <div className='relative h-48 w-full bg-gray-800'>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.png';
                  }}
                />
              </div>
              <div className='p-6'>
                <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
                <p className='text-gray-300 mb-4'>{project.description}</p>
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className='px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
