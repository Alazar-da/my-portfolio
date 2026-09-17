import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { FiSearch, FiPlus, FiMinus } from 'react-icons/fi';

interface Skill {
  name: string;
  level: number;
  category: Category;
  description: string;
}

type Category =
  | 'Languages'
  | 'Frontend'
  | 'Backend'
  | 'Databases'
  | 'Auth & Security'
  | 'Testing'
  | 'DevOps & Tools'
  | 'Practices';

const skillsData: Skill[] = [
  // Languages
  { name: 'TypeScript', level: 85, category: 'Languages', description: 'Strong typing, interfaces, generics, and advanced patterns for scalable applications.' },
  { name: 'JavaScript (ES6+)', level: 90, category: 'Languages', description: 'Modern syntax: async/await, destructuring, modules, closures, and functional programming.' },
  { name: 'SQL', level: 80, category: 'Languages', description: 'Complex queries, joins, indexing, and performance tuning for relational databases.' },
  { name: 'HTML5', level: 95, category: 'Languages', description: 'Semantic markup, accessibility, forms, and modern APIs.' },
  { name: 'CSS3', level: 90, category: 'Languages', description: 'Flexbox, Grid, animations, responsive design, and preprocessors.' },

  // Frontend
  { name: 'React', level: 90, category: 'Frontend', description: 'Hooks, context, suspense, concurrent mode, and performance optimization.' },
  { name: 'Next.js (App Router)', level: 85, category: 'Frontend', description: 'Server components, streaming, routing, API routes, and static generation.' },
  { name: 'React Native', level: 70, category: 'Frontend', description: 'Cross-platform mobile apps with native components and Expo.' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend', description: 'Utility-first styling, custom themes, responsive design, and plugins.' },
  { name: 'shadcn/ui', level: 85, category: 'Frontend', description: 'Accessible, customizable component library built on Radix UI.' },
  { name: 'TanStack React Query', level: 80, category: 'Frontend', description: 'Server state management, caching, and optimistic updates.' },

  // Backend
  { name: 'Node.js', level: 85, category: 'Backend', description: 'Event-driven, non-blocking I/O, streams, and REST API development.' },
  { name: 'Express.js', level: 85, category: 'Backend', description: 'Middleware, routing, error handling, and RESTful API design.' },
  { name: 'REST APIs', level: 90, category: 'Backend', description: 'Designing, consuming, and documenting robust RESTful services.' },
  { name: 'Supabase', level: 75, category: 'Backend', description: 'Postgres database, authentication, real-time subscriptions, and storage.' },
  { name: 'NextAuth.js', level: 75, category: 'Backend', description: 'Authentication for Next.js with OAuth, JWT, and session management.' },
  { name: 'Stripe API/Webhooks', level: 75, category: 'Backend', description: 'Payment processing, subscriptions, and webhook handling.' },

  // Databases
  { name: 'PostgreSQL', level: 80, category: 'Databases', description: 'Relational design, complex queries, transactions, and indexing.' },
  { name: 'MySQL', level: 75, category: 'Databases', description: 'Schema design, stored procedures, and performance tuning.' },
  { name: 'MongoDB', level: 75, category: 'Databases', description: 'Document modeling, aggregation pipeline, and Mongoose ODM.' },

  // Auth & Security
  { name: 'JWT', level: 80, category: 'Auth & Security', description: 'Token-based authentication, signing, verification, and refresh strategies.' },
  { name: 'RBAC', level: 75, category: 'Auth & Security', description: 'Role-based access control, permissions, and policy enforcement.' },
  { name: 'Row Level Security (RLS)', level: 70, category: 'Auth & Security', description: 'Supabase/Postgres policies for fine-grained data access.' },
  { name: 'Authentication/Authorization', level: 85, category: 'Auth & Security', description: 'Secure session management, OAuth, and protected routes.' },

  // Testing
  { name: 'Jest', level: 80, category: 'Testing', description: 'Unit, integration, and snapshot testing with mocking.' },
  { name: 'React Testing Library', level: 80, category: 'Testing', description: 'User-centric component testing and accessibility checks.' },

  // DevOps & Tools
  { name: 'Docker', level: 70, category: 'DevOps & Tools', description: 'Containerization, multi-stage builds, and compose.' },
  { name: 'Git', level: 90, category: 'DevOps & Tools', description: 'Version control, branching strategies, and collaboration.' },
  { name: 'GitHub Actions', level: 75, category: 'DevOps & Tools', description: 'CI/CD pipelines, automated testing, and deployment.' },
  { name: 'Vercel', level: 85, category: 'DevOps & Tools', description: 'Deployment, preview environments, and edge functions.' },
  { name: 'CI/CD', level: 75, category: 'DevOps & Tools', description: 'Automated build, test, and deployment workflows.' },

  // Practices
  { name: 'Responsive/Mobile-first', level: 90, category: 'Practices', description: 'Fluid layouts, breakpoints, and touch-friendly interfaces.' },
  { name: 'SSR', level: 80, category: 'Practices', description: 'Server-side rendering for performance and SEO.' },
  { name: 'API Integration', level: 85, category: 'Practices', description: 'Third-party APIs, data fetching, and error handling.' },
  { name: 'Database Design', level: 80, category: 'Practices', description: 'Normalization, relationships, and schema optimization.' },
  { name: 'Performance Optimization', level: 80, category: 'Practices', description: 'Lazy loading, code splitting, caching, and Core Web Vitals.' },
  { name: 'Reusable Component Architecture', level: 85, category: 'Practices', description: 'Atomic design, composition, and maintainable UI systems.' },
  { name: 'Agile', level: 85, category: 'Practices', description: 'Scrum, Kanban, sprint planning, and iterative delivery.' },
];

const categories: Array<'All' | Category> = [
  'All',
  ...(Array.from(new Set(skillsData.map((s) => s.category))) as Category[]),
];

const getBarColor = (level: number): string => {
  if (level >= 90) return 'bg-primary-600 dark:bg-primary-500';
  if (level >= 80) return 'bg-primary-500 dark:bg-primary-400';
  if (level >= 70) return 'bg-primary-400 dark:bg-primary-300';
  if (level >= 60) return 'bg-primary-300 dark:bg-primary-200';
  return 'bg-primary-200 dark:bg-primary-100';
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'All' | Category>('All');
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSkills = useMemo<Skill[]>(() => {
    let filtered = skillsData;
    if (activeCategory !== 'All') {
      filtered = filtered.filter((s) => s.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q),
      );
    }
    return filtered;
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    setVisibleCount(6);
    setExpandedSkill(null);
  }, [activeCategory, searchQuery]);

  const displayedSkills = filteredSkills.slice(0, visibleCount);
  const hasMore = visibleCount < filteredSkills.length;

  return (
    <section
      id="skills"
      className="relative py-24 md:py-32 overflow-hidden transition-colors duration-300
                 bg-third-100 text-third-900
                 dark:bg-third-900 dark:text-third-100"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[32rem] h-[32rem] rounded-full blur-[120px]
                        bg-primary-300/40 dark:bg-primary-600/15" />
        <div className="absolute bottom-0 right-1/4 w-[28rem] h-[28rem] rounded-full blur-[120px]
                        bg-secondary-200/50 dark:bg-secondary-600/10" />
      </div>

      <div className="relative mx-auto max-w-7xl w-[90%] lg:w-4/5">
        {/* ----------------------------- Header ----------------------------- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-col items-center gap-5 max-w-2xl mx-auto text-center mb-12"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium
                       text-secondary-700 dark:text-secondary-500"
          >
            <span className="w-8 h-px bg-secondary-700 dark:bg-secondary-500" />
            Toolkit
            <span className="w-8 h-px bg-secondary-700 dark:bg-secondary-500" />
          </motion.p>

          <motion.h2
            variants={item}
            className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight
                       text-third-900 dark:text-third-100"
          >
            Skills &{' '}
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600
                             dark:from-primary-400 dark:to-secondary-500
                             bg-clip-text text-transparent">
              stack
            </span>
            .
          </motion.h2>

          <motion.p
            variants={item}
            className="text-sm md:text-base leading-relaxed
                       text-third-600 dark:text-third-300"
          >
            A working overview of the languages, frameworks, and tools I use to
            ship production applications — from frontend architecture to
            databases, auth, and deployment.
          </motion.p>
        </motion.div>

        {/* ----------------------------- Search + Filter ----------------------------- */}
        <div className="mb-10 space-y-6">
          {/* Search */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto"
          >
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none
                                   text-third-400 dark:text-third-500" />
              <input
                type="text"
                placeholder="Search skills..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl text-sm outline-none transition-all
                           bg-white/70 border border-third-300/70 text-third-900 placeholder:text-third-400
                           dark:bg-third-800/60 dark:border-third-700/60 dark:text-third-100 dark:placeholder:text-third-500
                           focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
              />
            </div>
          </motion.div>

          {/* Category pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className="relative px-4 py-2 rounded-full text-sm font-medium transition-colors"
                >
                  {isActive && (
                    <motion.span
                      layoutId="skills-pill"
                      className="absolute inset-0 rounded-full bg-primary-600 shadow-lg shadow-primary-600/25"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span
                    className={`relative z-10 ${
                      isActive
                        ? 'text-white'
                        : 'text-third-600 dark:text-third-300 hover:text-secondary-700 dark:hover:text-secondary-400'
                    }`}
                  >
                    {cat}
                  </span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* ----------------------------- Skills grid ----------------------------- */}
        <motion.div
          layout
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {displayedSkills.map((skill) => {
              const isExpanded = expandedSkill === skill.name;
              return (
                <motion.article
                  key={skill.name}
                  layout
                  variants={item}
                  initial="hidden"
                  animate="show"
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  whileHover={{ y: -4 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 26 }}
                  className="group relative flex flex-col gap-4 p-6 rounded-2xl backdrop-blur-sm overflow-hidden
                             bg-white/70 border border-third-300/70
                             dark:bg-third-800/60 dark:border-third-700/60
                             hover:border-primary-500/60 dark:hover:border-primary-500/60
                             shadow-sm hover:shadow-2xl hover:shadow-primary-900/10
                             dark:shadow-none dark:hover:shadow-primary-900/30
                             transition-colors"
                >
                  {/* Decorative blob */}
                  <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                                  bg-gradient-to-br from-primary-300/50 to-secondary-200/40
                                  dark:from-primary-600/20 dark:to-secondary-600/20" />

                  {/* Name + level badge */}
                  <div className="relative flex items-start justify-between gap-3">
                    <h3 className="font-display font-semibold text-base leading-tight
                                   text-third-900 dark:text-third-100">
                      {skill.name}
                    </h3>
                    <span className="shrink-0 text-[11px] font-mono font-semibold px-2 py-1 rounded-full
                                     bg-primary-100 text-primary-800
                                     dark:bg-primary-600/20 dark:text-primary-300">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="relative w-full h-1.5 rounded-full overflow-hidden
                                  bg-third-200/70 dark:bg-third-700/60">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                      className={`h-full rounded-full ${getBarColor(skill.level)}`}
                    />
                  </div>

                  {/* Category label */}
                  <span className="text-[10px] uppercase tracking-[0.15em] font-medium
                                   text-third-500 dark:text-third-400">
                    {skill.category}
                  </span>

                  {/* Description */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="text-xs leading-relaxed overflow-hidden
                                   text-third-600 dark:text-third-300"
                      >
                        {skill.description}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  {/* Toggle */}
                  <button
                    type="button"
                    onClick={() =>
                      setExpandedSkill((prev) =>
                        prev === skill.name ? null : skill.name,
                      )
                    }
                    className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium transition-colors self-start
                               text-primary-700 hover:text-primary-500
                               dark:text-primary-400 dark:hover:text-primary-300"
                  >
                    {isExpanded ? (
                      <>
                        <FiMinus className="w-3.5 h-3.5" />
                        Read less
                      </>
                    ) : (
                      <>
                        <FiPlus className="w-3.5 h-3.5" />
                        Read more
                      </>
                    )}
                  </button>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ----------------------------- Empty state ----------------------------- */}
        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-third-500 dark:text-third-400 text-lg">
              No skills found matching your search.
            </p>
          </motion.div>
        )}

        {/* ----------------------------- Load more / Show less ----------------------------- */}
        {(hasMore || (visibleCount > 6 && filteredSkills.length > 6)) && (
          <div className="flex justify-center gap-3 mt-12">
            {hasMore && (
              <motion.button
                type="button"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-7 py-3 rounded-full font-medium text-sm text-white transition-colors
                           bg-primary-600 hover:bg-primary-500
                           shadow-lg shadow-primary-600/25 inline-flex items-center gap-2"
              >
                <FiPlus className="w-4 h-4" />
                Load more
              </motion.button>
            )}

            {!hasMore && visibleCount > 6 && filteredSkills.length > 6 && (
              <motion.button
                type="button"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setVisibleCount(6)}
                className="px-7 py-3 rounded-full font-medium text-sm transition-colors
                           border border-third-300 dark:border-third-600
                           text-third-700 dark:text-third-200
                           hover:border-secondary-500 hover:text-secondary-700
                           dark:hover:border-secondary-500 dark:hover:text-secondary-400
                           inline-flex items-center gap-2"
              >
                <FiMinus className="w-4 h-4" />
                Show less
              </motion.button>
            )}
          </div>
        )}

        {/* ----------------------------- Stats strip ----------------------------- */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { label: 'Languages', count: skillsData.filter((s) => s.category === 'Languages').length },
            { label: 'Frameworks', count: skillsData.filter((s) => s.category === 'Frontend' || s.category === 'Backend').length },
            { label: 'Databases', count: skillsData.filter((s) => s.category === 'Databases').length },
            {
              label: 'Tools & Practices',
              count: skillsData.filter(
                (s) =>
                  s.category === 'DevOps & Tools' ||
                  s.category === 'Practices' ||
                  s.category === 'Testing' ||
                  s.category === 'Auth & Security',
              ).length,
            },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={item}
              className="text-center p-4 rounded-xl backdrop-blur-sm
                         bg-white/70 border border-third-300/70
                         dark:bg-third-800/60 dark:border-third-700/60"
            >
              <div className="font-display text-2xl font-bold
                              text-primary-700 dark:text-primary-400">
                {stat.count}
              </div>
              <div className="text-[11px] uppercase tracking-wider mt-1
                              text-third-500 dark:text-third-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}