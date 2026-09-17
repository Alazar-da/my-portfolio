import { motion, type Variants } from 'framer-motion';
import { FiLayers, FiServer, FiBarChart2, FiArrowRight } from 'react-icons/fi';
import type { IconType } from 'react-icons';

interface Service {
  icon: IconType;
  header: string;
  subHeader: string;
  tags: string[];
}

const services: Service[] = [
  {
    icon: FiLayers,
    header: 'Production Frontend',
    subHeader:
      'React and Next.js App Router interfaces built for real users — SSR, mobile-first layouts, data fetching with TanStack React Query, and reusable component architecture that survives feature additions.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'TanStack Query'],
  },
  {
    icon: FiServer,
    header: 'Full-Stack Applications',
    subHeader:
      'End-to-end features across the stack — NextAuth authentication, PostgreSQL schemas with Row Level Security, REST API integration, Stripe webhooks, and multi-role access control for real applications.',
    tags: ['NextAuth', 'Supabase', 'PostgreSQL', 'REST APIs', 'Stripe'],
  },
  {
    icon: FiBarChart2,
    header: 'Dashboards & Internal Tools',
    subHeader:
      'Data-heavy admin platforms that replace manual workflows — settlement reconciliation, inventory tracking, analytics views, server-side pagination, and role-based dashboards built to hold up under daily use.',
    tags: ['Chart.js', 'RBAC', 'Excel Ingestion', 'Analytics', 'Pagination'],
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

export default function Services() {
  return (
    <section
      id="service"
      className="relative py-24 md:py-32 overflow-hidden transition-colors duration-300
                 bg-third-100 text-third-900
                 dark:bg-third-900 dark:text-third-100"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-[28rem] h-[28rem] rounded-full blur-[120px]
                        bg-primary-300/40 dark:bg-primary-600/15" />
        <div className="absolute bottom-0 -right-32 w-[24rem] h-[24rem] rounded-full blur-[120px]
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
              What I Build
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={item}
              className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight
                         text-third-900 dark:text-third-100"
            >
              Full-stack work,{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600
                               dark:from-primary-400 dark:to-secondary-500
                               bg-clip-text text-transparent">
                frontend-first
              </span>
              .
            </motion.h2>

            {/* Intro copy */}
            <motion.p
              variants={item}
              className="leading-relaxed text-third-600 dark:text-third-300"
            >
              I ship production web applications end-to-end — from the React
              component that renders the button to the PostgreSQL table behind
              it. My strength is frontend architecture, but I work across the
              full stack: authentication, data modeling, API integration, and
              deployment.
            </motion.p>

            <motion.p
              variants={item}
              className="leading-relaxed text-third-600 dark:text-third-300"
            >
              Most of my recent work has been in e-commerce, fintech, and real
              estate — building the kind of internal tools and customer-facing
              platforms that replace spreadsheets, unify broken workflows, and
              survive daily use with real users and real data.
            </motion.p>

            {/* CTA */}
            <motion.div variants={item} className="pt-2">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-white transition-colors
                           bg-primary-600 hover:bg-primary-500
                           shadow-lg shadow-primary-600/25"
              >
                Start a Project
                <FiArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* ----------------------------- Right column: service cards ----------------------------- */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-5"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.header}
                  variants={item}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                  className="group relative flex flex-col gap-5 p-6 md:p-7 rounded-2xl backdrop-blur-sm overflow-hidden
                             bg-white/70 border border-third-300/70
                             dark:bg-third-800/60 dark:border-third-700/60
                             hover:border-primary-500/60 dark:hover:border-primary-500/60
                             shadow-sm hover:shadow-2xl hover:shadow-primary-900/10
                             dark:shadow-none dark:hover:shadow-primary-900/30
                             transition-colors"
                >
                  {/* Left accent bar — grows on hover */}
                  <span className="absolute left-0 top-0 h-full w-0.5 scale-y-0 group-hover:scale-y-100 origin-top
                                   bg-gradient-to-b from-primary-600 via-primary-500 to-secondary-500
                                   transition-transform duration-500 ease-out" />

                  {/* Icon + heading row */}
                  <div className="flex items-start gap-4">
                    <div
                      className="shrink-0 w-12 h-12 flex items-center justify-center rounded-xl transition-colors
                                 bg-secondary-100 text-secondary-700
                                 dark:bg-secondary-600/15 dark:text-secondary-400
                                 group-hover:bg-primary-600 group-hover:text-white
                                 dark:group-hover:bg-primary-600 dark:group-hover:text-white"
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex flex-col gap-2 flex-1">
                      <h3 className="font-display font-semibold text-lg leading-tight
                                     text-third-900 dark:text-third-100">
                        {service.header}
                      </h3>
                      <p className="text-sm leading-relaxed
                                    text-third-600 dark:text-third-300">
                        {service.subHeader}
                      </p>
                    </div>
                  </div>

                  {/* Tag row */}
                  <div className="flex flex-wrap gap-2 pl-16">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2.5 py-1 rounded-full transition-colors
                                   bg-third-200/70 border border-third-300/70 text-third-700
                                   dark:bg-third-700/60 dark:border-third-600/50 dark:text-third-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}