import { motion, type Variants } from 'framer-motion';
import { FiArrowUpRight, FiGithub, FiExternalLink } from 'react-icons/fi';

interface Project {
  title: string;
  company: string;
  description: string;
  image: string;
  link: string;
  code?: string;
  tags: string[];
  year: string;
}

const projects: Project[] = [
  {
    title: 'Full-Stack Developer',
    company: 'AMANAH Corporate Advisory',
    description:
      'Delivered a Dubai-based advisory firm’s corporate site end-to-end in one month — Next.js App Router with SSR, image optimization for SEO, contact form with email integration, and a responsive mobile drawer.',
    image: './portfolio1.png',
    link: 'https://amanahcorporateadvisory.com/', // add live URL when ready
    tags: ['Next.js', 'SSR', 'SEO'],
    year: '2024',
  },
  {
    title: 'Full-Stack Developer · Contract',
    company: 'Power Bet — Settlement Management',
    description:
      'Internal settlement platform replacing a manual Excel workflow. Excel ingestion with validation, cashier-agent matching, commission and payment logic, server-side pagination, and an analytics dashboard with NextAuth RBAC.',
    image: './portfolio2.png',
    link: '#', // add live URL when ready
    tags: ['Next.js 15', 'TypeScript', 'Supabase', 'Chart.js'],
    year: '2024',
  },
  {
    title: 'Full-Stack Developer · Personal',
    company: 'Task Management System',
    description:
      'Full-featured task and project platform with Kanban, List, and Calendar views. PostgreSQL schema with 8 tables and Row Level Security, real-time drag-and-drop via Supabase channels, and an analytics dashboard for team productivity.',
    image: './portfolio3.png',
    link: 'https://my-task-management-system.vercel.app/',
    code: 'https://github.com/Alazar-da/task-management-system',
    tags: ['Next.js 15', 'TypeScript', 'Supabase', 'shadcn/ui'],
    year: '2024',
  },
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-24 md:py-32 overflow-hidden transition-colors duration-300
                 bg-third-100 text-third-900
                 dark:bg-third-900 dark:text-third-100"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[32rem] h-[32rem] rounded-full blur-[120px]
                        bg-primary-300/40 dark:bg-primary-600/15" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full blur-[120px]
                        bg-secondary-200/50 dark:bg-secondary-600/10" />
      </div>

      <div className="relative mx-auto max-w-7xl w-[90%] lg:w-4/5 flex flex-col items-center gap-14">
        {/* ----------------------------- Section header ----------------------------- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-center gap-5 max-w-2xl text-center"
        >
          {/* Eyebrow */}
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium
                       text-secondary-700 dark:text-secondary-500"
          >
            <span className="w-8 h-px bg-secondary-700 dark:bg-secondary-500" />
            Selected Work
            <span className="w-8 h-px bg-secondary-700 dark:bg-secondary-500" />
          </motion.p>

          {/* Heading */}
          <motion.h2
            variants={item}
            className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight
                       text-third-900 dark:text-third-100"
          >
            Projects I’ve{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600
                             dark:from-primary-400 dark:to-secondary-500
                             bg-clip-text text-transparent">
              shipped
            </span>
            .
          </motion.h2>

          {/* Intro */}
          <motion.p
            variants={item}
            className="text-sm md:text-base leading-relaxed
                       text-third-600 dark:text-third-300"
          >
            A cross-section of production work — corporate platforms, internal
            tooling, and full-stack side projects. Each one shipped end-to-end:
            schema design, API integration, UI implementation, and deployment.
          </motion.p>
        </motion.div>

        {/* ----------------------------- Project grid ----------------------------- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {projects.map((project) => (
            <motion.article
              key={project.company}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              className="group relative flex flex-col rounded-2xl overflow-hidden backdrop-blur-sm
                         bg-white/70 border border-third-300/70
                         dark:bg-third-800/60 dark:border-third-700/60
                         hover:border-primary-500/60 dark:hover:border-primary-500/60
                         shadow-sm hover:shadow-2xl hover:shadow-primary-900/10
                         dark:shadow-none dark:hover:shadow-primary-900/30
                         transition-colors"
            >
              {/* Image header */}
              <div className="relative h-48 overflow-hidden bg-third-200 dark:bg-third-700">
                <img
                  src={project.image}
                  alt={project.company}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out
                             group-hover:scale-105"
                />

                {/* Soft gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t
                                from-black/40 to-transparent" />

                {/* Year badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-mono backdrop-blur-md
                                 bg-white/85 border border-third-200 text-third-800
                                 dark:bg-third-900/80 dark:border-third-700/60 dark:text-third-100">
                  {project.year}
                </span>

                {/* Code link — appears if present */}
                {project.code && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="View source code"
                    className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full backdrop-blur-md
                               bg-white/85 border border-third-200 text-third-800
                               dark:bg-third-900/80 dark:border-third-700/60 dark:text-third-100
                               hover:bg-primary-600 hover:text-white hover:border-primary-600
                               dark:hover:bg-primary-600 dark:hover:text-white dark:hover:border-primary-600
                               transition-colors"
                  >
                    <FiGithub className="w-4 h-4" />
                  </a>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 gap-4 p-6">
                {/* Role eyebrow */}
                <p className="text-[11px] uppercase tracking-[0.15em] font-medium
                              text-secondary-700 dark:text-secondary-500">
                  {project.title}
                </p>

                {/* Company / title */}
                <h3 className="font-display font-semibold text-lg leading-tight -mt-1
                               text-third-900 dark:text-third-100
                               group-hover:text-primary-700 dark:group-hover:text-primary-300
                               transition-colors">
                  {project.company}
                </h3>

                {/* Description */}
                <p className="text-xs leading-relaxed
                              text-third-600 dark:text-third-300">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full transition-colors
                                 bg-third-200/70 border border-third-300/70 text-third-700
                                 dark:bg-third-700/60 dark:border-third-600/50 dark:text-third-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer link */}
                <div className="mt-auto pt-2">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group/link inline-flex items-center gap-1.5 text-sm font-medium transition-colors
                               text-primary-700 hover:text-primary-500
                               dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    View project
                    <FiArrowUpRight className="w-4 h-4 transition-transform
                                               group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              {/* Hover ring */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent
                               group-hover:ring-primary-500/30 dark:group-hover:ring-primary-500/40
                               transition-all duration-300" />
            </motion.article>
          ))}
        </motion.div>

        {/* ----------------------------- Bottom CTA ----------------------------- */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.96 }}
          href="https://github.com/Alazar-da"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm transition-colors
                     border border-third-300 dark:border-third-600
                     text-third-700 dark:text-third-200
                     hover:border-secondary-500 hover:text-secondary-700
                     dark:hover:border-secondary-500 dark:hover:text-secondary-400"
        >
          <FiExternalLink className="w-4 h-4" />
          See more on GitHub
        </motion.a>
      </div>
    </section>
  );
}