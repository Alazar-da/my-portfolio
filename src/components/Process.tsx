import { motion, type Variants } from 'framer-motion';
import { FiBookOpen, FiPenTool, FiCode } from 'react-icons/fi';
import { FaRocket } from 'react-icons/fa6';
import type { IconType } from 'react-icons';

interface Step {
  icon: IconType;
  header: string;
  subHeader: string;
}

const steps: Step[] = [
  {
    icon: FiBookOpen,
    header: 'Research',
    subHeader:
      'I begin by understanding your goals and audience — scoping requirements, business constraints, and technical feasibility before any code is written.',
  },
  {
    icon: FiPenTool,
    header: 'Design',
    subHeader:
      'I translate requirements into a wireframe and component plan, mapping user flows and defining reusable UI pieces before implementation.',
  },
  {
    icon: FiCode,
    header: 'Development',
    subHeader:
      'I build the product with React, Next.js, and TypeScript — clean component architecture, typed APIs, and mobile-first responsive layouts.',
  },
  {
    icon: FaRocket,
    header: 'Deployment',
    subHeader:
      'I ship to production on Vercel or cloud, wire up CI/CD, and stay available for iteration, monitoring, and ongoing improvements.',
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 overflow-hidden transition-colors duration-300
                 bg-third-100 text-third-900
                 dark:bg-third-900 dark:text-third-100"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -right-32 w-[28rem] h-[28rem] rounded-full blur-[120px]
                        bg-primary-300/40 dark:bg-primary-600/15" />
        <div className="absolute bottom-0 -left-32 w-[24rem] h-[24rem] rounded-full blur-[120px]
                        bg-secondary-200/50 dark:bg-secondary-600/10" />
      </div>

      <div className="relative mx-auto max-w-7xl w-[90%] lg:w-4/5">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* ----------------------------- Left column ----------------------------- */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-6 md:sticky md:top-24"
          >
            {/* Eyebrow */}
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium
                         text-secondary-700 dark:text-secondary-500"
            >
              <span className="w-8 h-px bg-secondary-700 dark:bg-secondary-500" />
              How I Work
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={item}
              className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight
                         text-third-900 dark:text-third-100"
            >
              A process built for{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600
                               dark:from-primary-400 dark:to-secondary-500
                               bg-clip-text text-transparent">
                shipping
              </span>
              , not just planning.
            </motion.h2>

            {/* Intro copy */}
            <motion.p
              variants={item}
              className="leading-relaxed text-third-600 dark:text-third-300"
            >
              Every project starts with understanding the actual goal — not
              jumping into code. I scope requirements, define the technical
              path, then build and ship in tight iterations so you see working
              software early.
            </motion.p>

            <motion.p
              variants={item}
              className="leading-relaxed text-third-600 dark:text-third-300"
            >
              Testing, deployment, and post-launch iteration are part of the
              same loop. I stay available after shipping — because production
              is where the real feedback lives.
            </motion.p>

            {/* Meta strip */}
            <motion.div
              variants={item}
              className="flex flex-wrap gap-4 pt-2 text-xs text-third-500 dark:text-third-400"
            >
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400" />
                Mobile-first
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary-600 dark:bg-secondary-500" />
                Typed end-to-end
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-600 dark:bg-primary-400" />
                CI/CD ready
              </span>
            </motion.div>
          </motion.div>

          {/* ----------------------------- Right column: step cards ----------------------------- */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid sm:grid-cols-2 gap-4 md:gap-5"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.header}
                  variants={item}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="group relative flex flex-col gap-4 p-6 rounded-2xl backdrop-blur-sm overflow-hidden
                             bg-white/70 border border-third-300/70
                             dark:bg-third-800/60 dark:border-third-700/60
                             hover:border-primary-500/60 dark:hover:border-primary-500/60
                             shadow-sm hover:shadow-2xl hover:shadow-primary-900/10
                             dark:shadow-none dark:hover:shadow-primary-900/30
                             transition-colors"
                >
                  {/* Step number — top-right watermark */}
                  <span className="absolute top-3 right-4 font-display text-4xl font-bold select-none
                                   text-third-300/60 dark:text-third-700/60">
                    0{index + 1}
                  </span>

                  {/* Icon badge */}
                  <div
                    className="relative w-11 h-11 flex items-center justify-center rounded-xl transition-colors
                               bg-secondary-100 text-secondary-700
                               dark:bg-secondary-600/15 dark:text-secondary-400
                               group-hover:bg-primary-600 group-hover:text-white
                               dark:group-hover:bg-primary-600 dark:group-hover:text-white"
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2 relative">
                    <h3 className="font-display font-semibold text-lg
                                   text-third-900 dark:text-third-100">
                      {step.header}
                    </h3>
                    <p className="text-xs leading-relaxed
                                  text-third-600 dark:text-third-300">
                      {step.subHeader}
                    </p>
                  </div>

                  {/* Bottom accent line — grows on hover */}
                  <span className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full
                                   bg-gradient-to-r from-primary-600 to-secondary-500
                                   transition-all duration-500 ease-out" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}