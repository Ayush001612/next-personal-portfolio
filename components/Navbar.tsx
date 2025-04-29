'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [heartCount, setHeartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Load heart count from localStorage
    const savedCount = localStorage.getItem('heartCount');
    if (savedCount) {
      setHeartCount(parseInt(savedCount));
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHeartClick = () => {
    const newCount = heartCount + 1;
    setHeartCount(newCount);
    localStorage.setItem('heartCount', newCount.toString());
  };

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#stack', label: 'Stack' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <a href='#' className='text-2xl font-bold text-white'>
            Portfolio
          </a>
          <div className='hidden md:flex gap-8 absolute left-1/2 transform -translate-x-1/2'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className='text-gray-300 hover:text-white transition-colors'
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className='flex items-center gap-4'>
            <motion.button
              onClick={handleHeartClick}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='flex items-center gap-2 text-white bg-purple-500/20 px-4 py-2 rounded-full hover:bg-purple-500/30 transition-colors'
            >
              <FaHeart className='text-red-500' />
              <span className='font-medium'>{heartCount}</span>
            </motion.button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='md:hidden text-white p-2'
            >
              {isMenuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className='fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-md p-6 md:hidden'
          >
            <div className='flex flex-col gap-6 mt-16'>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className='text-gray-300 hover:text-white transition-colors text-lg'
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
