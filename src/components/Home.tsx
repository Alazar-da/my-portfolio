import { motion, type Variants } from 'framer-motion';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import { HiOutlineSparkles } from 'react-icons/hi2';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '3+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Completed' },
  { value: '10+', label: 'Happy Clients' },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden
                 bg-third-100 text-third-900
                 dark:bg-third-900 dark:text-third-100
                 transition-colors duration-300"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 w-[36rem] h-[36rem] rounded-full blur-[120px]
                        bg-primary-300/50 dark:bg-primary-600/20" />
        <div className="absolute bottom-0 -right-32 w-[32rem] h-[32rem] rounded-full blur-[120px]
                        bg-secondary-200/60 dark:bg-secondary-600/15" />
        <div className="absolute inset-0 bg-grid opacity-[0.5] dark:opacity-[0.35]
                        bg-grid-pattern-light dark:bg-grid-pattern" />
      </div>

      <div className="relative mx-auto max-w-7xl w-[90%] lg:w-4/5 grid md:grid-cols-2 gap-12 items-center">
        {/* ----------------------------- Left column ----------------------------- */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-10"
        >
          <div className="flex flex-col gap-5">
            {/* Availability pill */}
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full text-xs font-medium
                         border border-secondary-500/40 bg-secondary-100/70 text-secondary-800
                         dark:border-secondary-600/40 dark:bg-secondary-600/10 dark:text-secondary-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-secondary-500 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary-500" />
              </span>
              Open to Remote &amp; Relocation
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={item}
              className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-[1.08] tracking-tight
                         text-third-900 dark:text-third-100"
            >
              Hello, I&apos;m{' '}
              <span className="block bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600
                               dark:from-primary-400 dark:via-primary-300 dark:to-secondary-500
                               bg-clip-text text-transparent">
                Alazar Damena
              </span>
            </motion.h1>

            {/* Role line */}
            <motion.p
              variants={item}
              className="text-sm uppercase tracking-[0.2em] font-medium
                         text-third-500 dark:text-third-400"
            >
              Full Stack Software Engineer
            </motion.p>

            {/* Summary */}
            <motion.p
              variants={item}
              className="text-sm md:text-base leading-relaxed max-w-xl
                         text-third-600 dark:text-third-300"
            >
              Full Stack Software Engineer with hands-on experience building
              and deploying production web applications across{' '}
              <span className="text-secondary-700 dark:text-secondary-400 font-medium">e-commerce</span>,{' '}
              <span className="text-secondary-700 dark:text-secondary-400 font-medium">fintech</span>,{' '}
              <span className="text-secondary-700 dark:text-secondary-400 font-medium">real estate</span>, and
              business platforms. Co-founder at Mina Technologies, specializing
              in React, Next.js, TypeScript, and PostgreSQL.
            </motion.p>

            {/* Location chip */}
            <motion.p
              variants={item}
              className="inline-flex items-center gap-1.5 self-start text-xs
                         text-third-500 dark:text-third-400"
            >
              <FiMapPin className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
              Addis Ababa, Ethiopia
            </motion.p>
          </div>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-white
                         bg-primary-600 hover:bg-primary-500
                         shadow-lg shadow-primary-600/25 transition-colors"
            >
              <HiOutlineSparkles className="w-4 h-4" />
              Say Hello
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm
                         border border-third-300 dark:border-third-600
                         text-third-700 dark:text-third-200
                         hover:border-secondary-500 hover:text-secondary-700
                         dark:hover:border-secondary-500 dark:hover:text-secondary-400
                         transition-colors"
            >
              View Work
              <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={item} className="grid grid-cols-3 gap-3 max-w-md">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center py-3 rounded-xl backdrop-blur-sm
                           bg-white/70 border border-third-300/70
                           dark:bg-third-800/60 dark:border-third-700/60"
              >
                <span className="font-display text-2xl font-bold
                                 text-secondary-700 dark:text-secondary-500">
                  {stat.value}
                </span>
                <span className="text-[10px] uppercase tracking-wider mt-1 text-center leading-tight
                                 text-third-500 dark:text-third-400">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ----------------------------- Right column ----------------------------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden md:flex justify-center items-center"
        >
          {/* Gradient ring / glow */}
          <div className="absolute w-[26rem] h-[26rem] rounded-full blur-3xl
                          bg-gradient-to-br from-primary-300/70 to-secondary-200/70
                          dark:from-primary-600/30 dark:to-secondary-600/20" />

          {/* Rotating dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[24rem] h-[24rem] rounded-full border border-dashed
                       border-primary-400/40 dark:border-primary-500/30"
          />

          {/* Image card */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="relative w-80 h-96 rounded-3xl overflow-hidden backdrop-blur-sm
                       border border-third-300/70 dark:border-third-700/60
                       bg-white/60 dark:bg-third-800/40
                       shadow-2xl shadow-primary-900/20 dark:shadow-primary-900/40"
          >
            <img
              src='./hero.png'
              alt="Alazar Damena"
              className="w-full h-full object-cover"
            />

            {/* Floating badge — top */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full backdrop-blur-md text-[11px] font-medium
                            bg-white/85 border border-third-200 text-secondary-800
                            dark:bg-third-900/80 dark:border-third-700/60 dark:text-secondary-400">
              Full Stack Engineer
            </div>

            {/* Floating badge — bottom */}
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full backdrop-blur-md text-[11px] font-mono
                            bg-white/85 border border-third-200 text-third-700
                            dark:bg-third-900/80 dark:border-third-700/60 dark:text-third-200">
              &lt;/&gt; React · Next.js
            </div>
          </motion.div>

          {/* Floating accent dot */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-10 right-10 w-3 h-3 rounded-full
                       bg-secondary-500 shadow-lg shadow-secondary-500/50"
          />
        </motion.div>
      </div>
    </section>
  );
}