import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion, type Variants } from 'framer-motion';
import toast from 'react-hot-toast';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaTelegram,
  FaInstagram,
} from 'react-icons/fa6';
import type { IconType } from 'react-icons';

interface ContactCard {
  icon: IconType;
  label: string;
  value: string;
  href: string;
}

interface Social {
  icon: IconType;
  href: string;
  label: string;
}

interface FormState {
  name: string;
  email: string;
  location: string;
  budget: string;
  subject: string;
  message: string;
}

const contactCards: ContactCard[] = [
  {
    icon: FiMapPin,
    label: 'Location',
    value: 'Addis Ababa, Ethiopia',
    href: '#',
  },
  {
    icon: FiMail,
    label: 'Email',
    value: 'alazar.damena01@gmail.com',
    href: 'mailto:alazar.damena01@gmail.com',
  },
  {
    icon: FiPhone,
    label: 'Phone',
    value: '+251 92 231 3333',
    href: 'tel:+251922313333',
  },
];

const socials: Social[] = [
  { icon: FaGithub, href: 'https://github.com/Alazar-da', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/alazar-da', label: 'LinkedIn' },
  { icon: FaWhatsapp, href: 'https://wa.me/+251922313333', label: 'WhatsApp' },
  { icon: FaTelegram, href: 'https://t.me/Alazar_da', label: 'Telegram' },
  { icon: FaInstagram, href: 'https://www.instagram.com/Alazar_da/', label: 'Instagram' },
];

const initialForm: FormState = {
  name: '',
  email: '',
  location: '',
  budget: '',
  subject: '',
  message: '',
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const inputBaseClass =
  'peer w-full h-11 px-3 rounded-lg outline-none transition-all text-sm ' +
  'bg-white/70 border border-third-300/70 text-third-900 placeholder-transparent ' +
  'dark:bg-third-800/60 dark:border-third-700/60 dark:text-third-100 ' +
  'focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20';

const labelBaseClass =
  'absolute left-3 -top-2.5 px-1.5 text-xs font-medium transition-all pointer-events-none ' +
  'bg-third-100 dark:bg-third-900 ' +
  'text-third-600 dark:text-third-400 ' +
  'peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-third-400 peer-placeholder-shown:dark:text-third-500 ' +
  'peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-primary-600 peer-focus:dark:text-primary-400';

export default function Contact() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const loadingId = toast.loading('Sending message...');

    try {
      const body = new URLSearchParams();
      body.append('name', formData.name);
      body.append('email', formData.email);
      body.append('location', formData.location);
      body.append('budget', formData.budget);
      body.append('subject', formData.subject);
      body.append('message', formData.message);

      const response = await fetch(
        '/api/send',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body.toString(),
        },
      );

      const result: { message?: string } = await response.json();

      if (response.ok) {
        toast.success('Message sent! I’ll get back to you soon.', { id: loadingId });
        setFormData(initialForm);
      } else {
        toast.error(result.message ?? 'Sending failed. Please try again.', {
          id: loadingId,
        });
      }
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error('Something went wrong. Please try again.', { id: loadingId });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
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
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* ----------------------------- Left column: info ----------------------------- */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-8"
          >
            {/* Eyebrow */}
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-medium
                         text-secondary-700 dark:text-secondary-500"
            >
              <span className="w-8 h-px bg-secondary-700 dark:bg-secondary-500" />
              Get in Touch
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={item}
              className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] tracking-tight
                         text-third-900 dark:text-third-100"
            >
              Let’s build something{' '}
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600
                               dark:from-primary-400 dark:to-secondary-500
                               bg-clip-text text-transparent">
                worth shipping
              </span>
              .
            </motion.h2>

            <motion.p
              variants={item}
              className="leading-relaxed text-third-600 dark:text-third-300"
            >
              Have a project in mind, a role to fill, or just want to talk shop?
              Fill out the form — or reach out directly via email, phone, or any
              of the socials below.
            </motion.p>

            {/* Contact cards */}
            <motion.div variants={item} className="flex flex-col gap-3">
              {contactCards.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="group flex items-start gap-4 p-4 rounded-xl transition-colors
                             bg-white/70 border border-third-300/70
                             dark:bg-third-800/60 dark:border-third-700/60
                             hover:border-primary-500/60 dark:hover:border-primary-500/60"
                >
                  <div
                    className="shrink-0 w-10 h-10 flex items-center justify-center rounded-lg transition-colors
                               bg-secondary-100 text-secondary-700
                               dark:bg-secondary-600/15 dark:text-secondary-400
                               group-hover:bg-primary-600 group-hover:text-white
                               dark:group-hover:bg-primary-600 dark:group-hover:text-white"
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-[11px] uppercase tracking-[0.15em] font-medium
                                     text-third-500 dark:text-third-400">
                      {label}
                    </span>
                    <span className="text-sm font-medium truncate transition-colors
                                     text-third-900 dark:text-third-100
                                     group-hover:text-primary-700 dark:group-hover:text-primary-300">
                      {value}
                    </span>
                  </div>
                </a>
              ))}
            </motion.div>

            {/* Socials */}
            <motion.div variants={item} className="flex flex-col gap-3 pt-2">
              <span className="text-[11px] uppercase tracking-[0.15em] font-medium
                               text-third-500 dark:text-third-400">
                Find me on
              </span>
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
            </motion.div>
          </motion.div>

          {/* ----------------------------- Right column: form ----------------------------- */}
          <motion.form
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 p-6 md:p-8 rounded-2xl backdrop-blur-sm
                       bg-white/70 border border-third-300/70
                       dark:bg-third-800/60 dark:border-third-700/60
                       shadow-sm dark:shadow-none"
          >
            {/* Name + Email */}
            <motion.div variants={item} className="grid sm:grid-cols-2 gap-5">
              <div className="relative">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className={inputBaseClass}
                />
                <label htmlFor="name" className={labelBaseClass}>
                  Name *
                </label>
              </div>

              <div className="relative">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={inputBaseClass}
                />
                <label htmlFor="email" className={labelBaseClass}>
                  Email *
                </label>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div variants={item} className="relative">
              <input
                id="location"
                name="location"
                type="text"
                value={formData.location}
                onChange={handleChange}
                placeholder="Location"
                className={inputBaseClass}
              />
              <label htmlFor="location" className={labelBaseClass}>
                Location
              </label>
            </motion.div>

            {/* Budget + Subject */}
            <motion.div variants={item} className="grid grid-cols-3 gap-4">
              <div className="relative col-span-1">
                <input
                  id="budget"
                  name="budget"
                  type="number"
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="Budget"
                  className={inputBaseClass}
                />
                <label htmlFor="budget" className={labelBaseClass}>
                  Budget *
                </label>
              </div>

              <div className="relative col-span-2">
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={inputBaseClass}
                />
                <label htmlFor="subject" className={labelBaseClass}>
                  Subject *
                </label>
              </div>
            </motion.div>

            {/* Message */}
            <motion.div variants={item} className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className={`${inputBaseClass} h-auto py-3 resize-none`}
              />
              <label htmlFor="message" className={labelBaseClass}>
                Message *
              </label>
            </motion.div>

            {/* Submit */}
            <motion.div variants={item} className="pt-1">
              <motion.button
                type="submit"
                disabled={submitting}
                whileHover={!submitting ? { scale: 1.02, y: -2 } : undefined}
                whileTap={!submitting ? { scale: 0.98 } : undefined}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-sm text-white transition-colors
                           bg-primary-600 hover:bg-primary-500
                           shadow-lg shadow-primary-600/25
                           disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Sending...' : 'Send Message'}
                <FiSend className="w-4 h-4" />
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}