```markdown
# Alazar Damena — Portfolio

> Personal portfolio website for **Alazar Damena**, Full Stack Software Engineer based in Addis Ababa, Ethiopia.

A production-grade portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion — featuring a dark/light theme system, animated sections, filtering skills showcase, and a working contact form backed by a serverless function.

**🔗 Live:** [alazarda-portfolio.vercel.app](https://alazarda-portfolio.vercel.app/)

---

## ✨ Features

- 🎨 **Dark / Light mode** — system-preference aware, persisted to `localStorage`, controlled via React Context
- 🎬 **Framer Motion animations** — staggered reveals, scroll-triggered entrances, hover micro-interactions
- 🧩 **Modular section architecture** — Hero, About, Process, Skills, Portfolio, Services, Contact, Footer
- 🔍 **Filterable skills grid** — category pills with a sliding active indicator, search, and expandable cards
- 📊 **Real project showcase** — AMANAH, Power Bet, and Task Management System with tags and links
- 📬 **Working contact form** — Vercel serverless function + Resend for transactional email
- 📱 **Fully responsive** — mobile-first, tested from 320px to ultrawide
- ♿ **Accessible** — semantic HTML, keyboard-navigable, `aria-label`s on icon-only buttons
- 🚀 **Optimized** — Vite build, font preloading, SVG favicon, meta tags for SEO and social sharing

---

## 🛠️ Tech Stack

**Frontend**
- [React 19](https://react.dev/) — UI library
- [TypeScript](https://www.typescriptlang.org/) — type-safe JavaScript
- [Vite](https://vitejs.dev/) — build tool & dev server
- [Tailwind CSS 3](https://tailwindcss.com/) — utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — animations
- [react-icons](https://react-icons.github.io/react-icons/) — icon library (Feather + Font Awesome 6 sets)

**Backend**
- [Vercel Serverless Functions](https://vercel.com/docs/functions) — API endpoint for the contact form
- [Resend](https://resend.com/) — transactional email delivery

**Tooling**
- ESLint + Oxlint — linting
- TypeScript strict mode
- PostCSS + Autoprefixer

---

## 📁 Project Structure

```
my-portfolio/
├── api/
│   └── send.js                 # Vercel serverless function (contact form)
├── public/
│   ├── favicon.svg             # "A" logo favicon
│   ├── og-image.png            # OpenGraph / Twitter card image
│   ├── manifest.json           # PWA manifest
│   └── Alazar_Damena_CV.pdf    # Downloadable CV
├── src/
│   ├── components/
│   │   ├── Nav.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Process.tsx
│   │   ├── Skills.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── context/
│   │   └── ThemeContext.tsx    # Dark/light mode provider
│   ├── img/                    # Project screenshots + portrait
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- (Optional) [Vercel CLI](https://vercel.com/docs/cli) for running the serverless function locally

### Installation

```bash
# Clone the repo
git clone https://github.com/Alazar-da/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install
```

### Environment variables

Create a `.env` file at the project root:

```env
RESEND_API_KEY=re_your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

Get a Resend API key at [resend.com/api-keys](https://resend.com/api-keys).

Copy `.env.example` as a starting template if it exists.

### Run the dev server

**Standard dev** (frontend only — contact form won't work):

```bash
npm run dev
```

**Full dev** (frontend + serverless functions):

```bash
npm i -g vercel
vercel dev
```

### Build for production

```bash
npm run build
npm run preview
```

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite dev server (frontend only) |
| `npm run build` | Type-check + build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |
| `vercel dev` | Run frontend + serverless functions together |

---

## 📬 Contact Form Setup

The contact form posts to `/api/send`, a Vercel serverless function that delivers email via Resend.

**Required environment variables:**

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Your Resend API key (`re_...`) |
| `CONTACT_EMAIL` | Where form submissions should be delivered |

**Local setup:** add both to `.env`, then run `vercel dev`.

**Vercel setup:** add both under **Settings → Environment Variables**, then redeploy.

> **Important:** `.env` is gitignored. Never commit it. If a key is ever leaked, revoke it immediately at [resend.com/api-keys](https://resend.com/api-keys) and rotate.

---

## 🎨 Design System

Custom Tailwind palette defined in `tailwind.config.ts`:

| Palette | Purpose | Base |
|---|---|---|
| `primary` | Brand blue, CTAs, links | `#0047ab` |
| `secondary` | Accent gold, highlights | `#efbf04` |
| `third` | Neutral scale (bg + text) | `#252525` |

Dark mode is toggled via the `dark` class on `<html>`, controlled by `ThemeContext`. All components use paired Tailwind classes:

```tsx
className="bg-third-100 text-third-900 dark:bg-third-900 dark:text-third-100"
```

---

## 👤 Author

**Alazar Damena Girma**
Full Stack Software Engineer — Addis Ababa, Ethiopia

- 🌐 Portfolio: [alazarda-portfolio.vercel.app](https://alazarda-portfolio.vercel.app/)
- 💼 LinkedIn: [linkedin.com/in/alazar-da](https://www.linkedin.com/in/alazar-da)
- 🐙 GitHub: [github.com/Alazar-da](https://github.com/Alazar-da)
- 📧 Email: [alazar.damena01@gmail.com](mailto:alazar.damena01@gmail.com)
- 📱 WhatsApp: [+251 92 231 3333](https://wa.me/+251922313333)

---

## 📄 License

This project is personal work — the code is open for reference, but the content (text, images, CV, branding) is © Alazar Damena and not licensed for reuse.

If you'd like a template to build your own portfolio from, feel free to use the structure as inspiration, but replace all content with your own.

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/Alazar-da">Alazar Damena</a>
</p>
```

---

## What each section does for you

| Section | Why it matters |
|---|---|
| **Badges / Live link** | Recruiters click the first link they see — make it obvious |
| **Features** | Shows you think in terms of product, not just code |
| **Tech Stack** | Instant ATS keyword match for "React TypeScript Tailwind Vercel" |
| **Project Structure** | Tells a reviewer where to look in 10 seconds |
| **Getting Started** | Shows you understand onboarding — a real engineering signal |
| **Contact Form Setup** | Documents env vars without leaking keys — professional |
| **Design System** | Proves intentionality behind the palette |
| **Author** | Direct links to your LinkedIn, GitHub, WhatsApp, and email |
| **License** | Protects your content while allowing reference |

---

## Optional extras you can add later

### Badges at the top

If you want visual flair right under the title:

```markdown
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-Personal-lightgrey)
```

### A screenshot section

After the Features list:

```markdown
## 📸 Screenshots

| Home | Skills | Portfolio |
|---|---|---|
| ![Home](./.github/screenshots/home.png) | ![Skills](./.github/screenshots/skills.png) | ![Portfolio](./.github/screenshots/portfolio.png) |

> Create a `.github/screenshots/` folder and drop in captures. Delete this section if you'd rather not maintain images.
```

### A "What I learned" section

Great for personal projects — shows reflection:

```markdown
## 🧠 What I Learned

- Building a theme system with React Context that survives page reloads
- Animating with Framer Motion without causing layout jank
- Wiring a serverless contact form with email delivery and error handling
- Managing a Tailwind v4 → v3 downgrade when the tooling didn't fit
- Recovering from a leaked secret in git history
```

Want me to also generate the `.env.example` file contents and the `.github/screenshots/` folder structure so the README's optional sections work out of the box?
