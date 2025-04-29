import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';

const socialLinks = [
  {
    href: 'https://github.com/Ayush001612',
    Icon: AiFillGithub,
    label: 'GitHub',
  },
  { href: 'https://x.com', Icon: AiOutlineTwitter, label: 'X (Twitter)' },
  {
    href: 'https://www.instagram.com/its_anand001/',
    Icon: AiFillInstagram,
    label: 'Instagram',
  },
];

export const Footer = () => {
  return (
    <footer className='py-8 max-w-[1200px] mx-auto px-4'>
      <div className='mt-12 flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
        <p className='text-gray-200'>Made with ❤️ Ayush Anand</p>

        <ul className='flex gap-5 flex-wrap items-center'>
          {/* Highlighted CV icon for resume download */}
          <a
            href='/assets/resume-4.pdf'
            download
            aria-label='Download Resume'
            className='flex items-center justify-center w-10 h-10 rounded-full border-2 border-purple-500 bg-purple-600 text-white font-bold text-lg shadow-lg hover:bg-white hover:text-purple-600 transition-colors'
          >
            CV
          </a>
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className='text-gray-200 flex items-center justify-center w-10 h-10 rounded-full
                         hover:text-gray-400 transition-colors'
              target='_blank'
            >
              <Icon size={30} />
            </a>
          ))}
        </ul>
      </div>
    </footer>
  );
};
