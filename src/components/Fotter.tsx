import { motion, type Variants } from 'framer-motion';
import { FiArrowUp, FiMail, FiMapPin } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaTelegram, FaInstagram } from 'react-icons/fa6';
import type { IconType } from 'react-icons';

interface FooterLink {
  label: string;
  href: string;
}

interface Social {
  icon: IconType;
  href: string;
  label: string;
}

const navLinks: FooterLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#service' },
  { label: 'Contact', href: '#contact' },
];

const socials: Social[] = [
  { icon: FaGithub, href: 'https://github.com/Alazar-da', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/alazar-da', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: 'https://wa.me/+251922313333', label: 'WhatsApp' },
  { icon: FaTelegram, href: 'https://t.me/Alazar_da', label: 'Telegram' },
  { icon: FaInstagram, href: 'https://www.instagram.com/Alazar_da/', label: 'Instagram' },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="relative pt-16 pb-8 overflow-hidden transition-colors duration-300
                 bg-third-200/60 text-third-900
                 dark:bg-third-900 dark:text-third-100
                 border-t border-third-300/70 dark:border-third-800/60"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/4 w-[28rem] h-[28rem] rounded-full blur-[120px]
                        bg-primary-300/25 dark:bg-primary-600/10" />
        <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] rounded-full blur-[120px]
                        bg-secondary-200/30 dark:bg-secondary-600/8" />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="relative mx-auto max-w-7xl w-[90%] lg:w-4/5"
      >
        {/* ----------------------------- Top: 3-column layout ----------------------------- */}
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 pb-10 border-b border-third-300/70 dark:border-third-800/60">
          {/* Column 1: Logo + tagline */}
          <motion.div variants={item} className="flex flex-col gap-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 select-none"
            >
              <span className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white font-display font-bold flex items-center justify-center pb-0.5 shadow-lg shadow-primary-600/30">
                A
              </span>
              <span className="font-display text-xl font-semibold
                               text-third-900 dark:text-third-100">
                Alazar
              </span>
            </a>

            <p className="text-sm leading-relaxed max-w-xs
                          text-third-600 dark:text-third-400">
              Full Stack Software Engineer building production web applications
              across e-commerce, fintech, and business platforms.
            </p>

            {/* Location + email chips */}
            <div className="flex flex-col gap-2 pt-1 text-sm">
              <span className="inline-flex items-center gap-2
                               text-third-600 dark:text-third-400">
                <FiMapPin className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
                Addis Ababa, Ethiopia
              </span>
              <a
                href="mailto:alazar.damena01@gmail.com"
                className="inline-flex items-center gap-2 transition-colors
                           text-third-600 dark:text-third-400
                           hover:text-primary-700 dark:hover:text-primary-300"
              >
                <FiMail className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
                alazar.damena01@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Column 2: Navigation */}
          <motion.div variants={item} className="flex flex-col gap-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-medium
                           text-third-500 dark:text-third-500">
              Navigate
            </h4>

            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative inline-block text-sm transition-colors group
                               text-third-700 dark:text-third-300
                               hover:text-secondary-700 dark:hover:text-secondary-400"
                  >
                    {link.label}
                    <span className="absolute left-0 right-0 -bottom-0.5 h-px scale-x-0 origin-left
                                     transition-transform duration-300 group-hover:scale-x-100
                                     bg-secondary-700 dark:bg-secondary-400" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Socials + back to top */}
          <motion.div variants={item} className="flex flex-col gap-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-medium
                           text-third-500 dark:text-third-500">
              Find me on
            </h4>

            <div className="flex flex-wrap gap-2">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="w-10 h-10 flex items-center justify-center rounded-full transition-colors
                             border border-third-300 dark:border-third-700/60
                             bg-white/70 dark:bg-third-800/60
                             text-third-700 dark:text-third-200
                             hover:bg-primary-600 hover:text-white hover:border-primary-600
                             dark:hover:bg-primary-600 dark:hover:text-white dark:hover:border-primary-600"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>

            {/* Back to top button */}
            <motion.button
              type="button"
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="mt-2 inline-flex items-center gap-2 self-start px-4 py-2 rounded-full text-xs font-medium transition-colors
                         border border-third-300 dark:border-third-700/60
                         text-third-700 dark:text-third-300
                         hover:border-secondary-500 hover:text-secondary-700
                         dark:hover:border-secondary-500 dark:hover:text-secondary-400"
              aria-label="Back to top"
            >
              <FiArrowUp className="w-3.5 h-3.5" />
              Back to top
            </motion.button>
          </motion.div>
        </div>

        {/* ----------------------------- Bottom bar ----------------------------- */}
        <motion.div
          variants={item}
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-xs text-third-500 dark:text-third-500">
            © {currentYear} Alazar Damena. All rights reserved.
          </p>

          <p className="text-xs text-third-500 dark:text-third-500 inline-flex items-center gap-1.5">
            Built with React, Tailwind CSS &amp; Framer Motion
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}