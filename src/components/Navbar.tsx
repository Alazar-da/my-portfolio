import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaSun, FaMoon } from 'react-icons/fa6';
import { useTheme } from '../context/ThemeContext';

interface NavLink {
  label: string;
  href: string;
}

const links: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#service' },
];

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-third-900/70 backdrop-blur-lg border-b border-third-300/70 dark:border-third-700/60'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2.5 select-none"
        >
          <span className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white font-display font-bold flex items-center justify-center pb-0.5 shadow-lg shadow-primary-600/30">
            A
          </span>
          <span className="font-display text-xl font-semibold text-third-900 dark:text-third-100">
            Alazar
          </span>
        </motion.a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-3.5 py-2 text-sm font-medium text-third-600 dark:text-third-300 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors group"
              >
                {link.label}
                <span className="absolute left-3.5 right-3.5 -bottom-0.5 h-px bg-secondary-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileTap={{ scale: 0.9, rotate: 15 }}
            className="relative w-11 h-11 rounded-full flex items-center justify-center border border-third-300 dark:border-third-700/60 bg-white/70 dark:bg-third-800/60 hover:border-primary-500/60 text-third-700 dark:text-third-200 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors"
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'light' ? (
                <motion.span
                  key="moon"
                  initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  <FaMoon className="w-4 h-4" />
                </motion.span>
              ) : (
                <motion.span
                  key="sun"
                  initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                  className="flex"
                >
                  <FaSun className="w-4 h-4 text-secondary-500 dark:text-secondary-400" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Contact */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full bg-primary-600 hover:bg-primary-500 text-white text-sm font-medium shadow-lg shadow-primary-600/25 transition-colors"
          >
            Contact
          </motion.a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden w-11 h-11 rounded-full flex items-center justify-center border border-third-300 dark:border-third-700/60 bg-white/70 dark:bg-third-800/60 text-third-800 dark:text-third-100 hover:border-primary-500/60 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-third-300/70 dark:border-third-700/60 bg-white/95 dark:bg-third-900/95 backdrop-blur-lg"
          >
            <ul className="px-6 py-4 flex flex-col">
              {links.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.25 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-3 text-base font-medium text-third-700 dark:text-third-200 hover:text-secondary-600 dark:hover:text-secondary-400 transition-colors border-b border-third-200/70 dark:border-third-800/60"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.25 }}
                className="pt-4"
              >
                <a
                  href="#contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block text-center px-5 py-3 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-medium shadow-lg shadow-primary-600/25 transition-colors"
                >
                  Contact
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}