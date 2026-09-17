import { motion, type Variants } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaTelegram, FaInstagram } from 'react-icons/fa6';
import type { IconType } from 'react-icons';

interface Social {
  icon: IconType;
  href: string;
  label: string;
}

const socials: Social[] = [
  { icon: FaGithub, href: 'https://github.com/Alazar-da', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/alazar-da', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: 'https://wa.me/+251922313333', label: 'WhatsApp' },
  { icon: FaTelegram, href: 'https://t.me/Alazar_da', label: 'Telegram' },
  { icon: FaInstagram, href: 'https://www.instagram.com/Alazar_da/', label: 'Instagram' },
];

const skills: string[] = [
  'React',
  'Next.js',
  'TypeScript',
  'PostgreSQL',
  'Node.js',
  'Tailwind CSS',
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden transition-colors duration-300
                 bg-third-100 text-third-900
                 dark:bg-third-900 dark:text-third-100"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 -left-32 w-[28rem] h-[28rem] rounded-full blur-[120px]
                        bg-primary-300/40 dark:bg-primary-600/15" />
        <div className="absolute bottom-0 right-0 w-[24rem] h-[24rem] rounded-full blur-[120px]
                        bg-secondary-200/50 dark:bg-secondary-600/10" />
      </div>

      <div className="relative mx-auto max-w-7xl w-[90%] lg:w-4/5">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* ----------------------------- Image column ----------------------------- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Gradient ring behind */}
              <div className="absolute -inset-4 rounded-[2rem] blur-2xl
                              bg-gradient-to-br from-primary-300/50 via-transparent to-secondary-200/50
                              dark:from-primary-600/25 dark:to-secondary-600/20" />

              {/* Photo card */}
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="relative rounded-3xl overflow-hidden backdrop-blur-sm
                           border border-third-300/70 dark:border-third-700/60
                           bg-white/60 dark:bg-third-800/40
                           shadow-2xl shadow-primary-900/20 dark:shadow-primary-900/40"
              >
                <img
                  src='./hero.png'
                  alt="Alazar Damena"
                  className="w-full h-auto object-cover"
                />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl
                                from-secondary-400/30 dark:from-secondary-600/30 to-transparent" />
              </motion.div>

              {/* Socials bar — floating below */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.5 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-2.5 rounded-full backdrop-blur-md
                           bg-white/90 border border-third-300/70 shadow-xl shadow-primary-900/10
                           dark:bg-third-800/90 dark:border-third-700/60 dark:shadow-black/30"
              >
                {socials.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-9 h-9 flex items-center justify-center rounded-full transition-colors
                               text-third-600 hover:text-white hover:bg-primary-600
                               dark:text-third-300 dark:hover:text-white dark:hover:bg-primary-600"
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* ----------------------------- Text column ----------------------------- */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-7"
          >
            {/* Eyebrow */}
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium
                         text-secondary-700 dark:text-secondary-500"
            >
              <span className="w-8 h-px bg-secondary-700 dark:bg-secondary-500" />
              About Me
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={item}
              className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight
                         text-third-900 dark:text-third-100"
            >
              Full Stack Engineer building{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600
                               dark:from-primary-400 dark:to-secondary-500
                               bg-clip-text text-transparent">
                production-grade
              </span>{' '}
              web platforms.
            </motion.h2>

            {/* Summary — from CV */}
            <motion.p
              variants={item}
              className="leading-relaxed text-third-600 dark:text-third-300"
            >
              Full Stack Software Engineer with hands-on experience building
              and deploying production web applications across e-commerce,
              financial operations, real estate, and business platforms.
              Co-founder and software engineer at{' '}
              <span className="font-medium text-secondary-700 dark:text-secondary-400">
                Mina Technologies
              </span>
              , contributing primarily to frontend development while also
              working across backend integration and application workflows.
            </motion.p>

            <motion.p
              variants={item}
              className="leading-relaxed text-third-600 dark:text-third-300"
            >
              Strong in{' '}
              <span className="text-primary-700 dark:text-primary-300">React</span>,{' '}
              <span className="text-primary-700 dark:text-primary-300">Next.js</span>,{' '}
              <span className="text-primary-700 dark:text-primary-300">TypeScript</span>, and{' '}
              <span className="text-primary-700 dark:text-primary-300">PostgreSQL</span>, with
              additional experience in authentication, RBAC, dashboards, and
              production deployment. Currently expanding backend and cloud
              expertise across Node.js, NestJS, Prisma, Docker, CI/CD, and AWS.
            </motion.p>

            {/* Highlight chips */}
            <motion.div variants={item} className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs px-3 py-1.5 rounded-full transition-colors
                             bg-white/70 border border-third-300/70 text-third-700
                             dark:bg-third-800/70 dark:border-third-700/60 dark:text-third-200"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={item} className="flex flex-wrap gap-3 pt-2">
              <motion.a
                href="#portfolio"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="px-6 py-3 rounded-full font-medium text-sm text-white transition-colors
                           bg-primary-600 hover:bg-primary-500
                           shadow-lg shadow-primary-600/25"
              >
                View My Projects
              </motion.a>
              <motion.a
                href="/Alazar_Damena_CV.pdf"
                download
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-colors
                           border border-third-300 dark:border-third-600
                           text-third-700 dark:text-third-200
                           hover:border-secondary-500 hover:text-secondary-700
                           dark:hover:border-secondary-500 dark:hover:text-secondary-400"
              >
                <FiDownload className="w-4 h-4" />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}