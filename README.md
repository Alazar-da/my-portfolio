````
# Alazar Damena — Portfolio

> Personal portfolio website for **Alazar Damena Girma**, a Full Stack Software Engineer based in Addis Ababa, Ethiopia.

A modern, responsive portfolio built with React, TypeScript, Tailwind CSS, and Framer Motion. The site showcases my skills, selected projects, services, development process, and provides a working contact form.

**🌐 Live Portfolio:** [alazarda-portfolio.vercel.app](https://alazarda-portfolio.vercel.app/)

---

## ✨ Features

- 🌓 **Dark / Light Mode** — system preference detection with persistent theme settings
- 🎬 **Smooth Animations** — scroll-triggered reveals, staggered animations, and hover interactions
- 🧩 **Modular Architecture** — reusable sections and components for easy maintenance
- 🔍 **Filterable Skills** — search and category-based skill filtering with expandable cards
- 💼 **Project Showcase** — selected projects with technologies, descriptions, and links
- 📬 **Contact Form** — serverless API endpoint with Resend email delivery
- 📱 **Responsive Design** — optimized for mobile, tablet, desktop, and ultrawide screens
- ♿ **Accessible UI** — semantic HTML, keyboard navigation, ARIA labels, and accessible controls
- 🚀 **Performance & SEO** — Vite production build, optimized assets, metadata, and social sharing support

---

## 🛠️ Tech Stack

### Frontend

- **React 19** — UI library
- **TypeScript** — type-safe JavaScript
- **Vite** — build tool and development server
- **Tailwind CSS 3** — utility-first CSS framework
- **Framer Motion** — animations and transitions
- **React Icons** — icon library

### Backend & Services

- **Vercel Serverless Functions** — contact form API
- **Resend** — transactional email delivery

### Tooling

- **ESLint + Oxlint** — code quality and linting
- **TypeScript Strict Mode** — safer type checking
- **PostCSS + Autoprefixer** — CSS processing

---

## 📸 Sections

The portfolio is organized into the following sections:

- **Hero** — introduction and primary calls to action
- **About** — professional background and experience
- **Process** — approach to building software and working with clients
- **Skills** — searchable and filterable technical skills
- **Portfolio** — selected projects and case studies
- **Services** — software development services
- **Contact** — contact form and direct communication links
- **Footer** — social profiles and additional navigation

---

## 💼 Featured Projects

### AMANAH

A featured software project demonstrating full-stack application development, responsive UI implementation, and modern web technologies.

### Power Bet

A web application project focused on building an interactive and responsive user experience.

### Task Management System

A task management application demonstrating CRUD operations, application state management, and full-stack development concepts.

> Project details and live links are available on the [portfolio website](https://alazarda-portfolio.vercel.app/).

---

## 📁 Project Structure

```text
my-portfolio/
├── api/
│   └── send.js                 # Vercel serverless contact endpoint
├── public/
│   ├── favicon.svg
│   ├── og-image.png
│   ├── manifest.json
│   └── Alazar_Damena_CV.pdf
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
│   │   └── ThemeContext.tsx
│   ├── img/
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
````

---

 ## 🚀 Getting Started

 ### Prerequisites

 - Node.js 18+
- npm
- Vercel CLI (optional, required for running serverless functions locally)

 ### Installation

```
git clone https://github.com/Alazar-da/my-portfolio.git
cd my-portfolio
npm install
```

 ### Environment Variables

 Create a `.env` file in the project root:

```
RESEND_API_KEY=re_your_resend_api_key
CONTACT_EMAIL=your_email@example.com
```

 You can use `.env.example` as a template.

 > **Never commit your `.env` file or API keys to Git.**

 ### Run the Development Server

 For frontend development:

```
npm run dev
```

 For the complete application, including the serverless contact endpoint:

```
npm install -g vercel
vercel dev
```

 ### Build for Production

```
npm run build
npm run preview
```

---

 ## 📜 Available Scripts

 | Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run Oxlint |
| `vercel dev` | Run the frontend and serverless functions locally |

---

 ## 📬 Contact Form

 The contact form submits requests to:

```
POST /api/send
```

 The Vercel serverless function uses Resend to deliver submissions to the configured email address.

 ### Required Environment Variables

 | Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_EMAIL` | Email address that receives submissions |

### Vercel Deployment

 Add the environment variables under:

 **Vercel → Project Settings → Environment Variables**

 Then redeploy the project.

 If an API key is accidentally exposed, revoke it immediately and generate a new one.

---

 ## 🎨 Design System

 The project uses a custom Tailwind CSS color palette:

 | Palette | Purpose | Base |
| --- | --- | --- |
| `primary` | Brand color, links, and CTAs | `#0047ab` |
| `secondary` | Accent and highlights | `#efbf04` |
| `third` | Neutral background and text scale | `#252525` |

Dark mode is controlled by React Context and the `dark` class on the `<html>` element.

 Example:

```
className="
  bg-third-100
  text-third-900
  dark:bg-third-900
  dark:text-third-100
"
```

---

 ## 🧠 What I Learned

 Building this portfolio helped me strengthen my understanding of:

 - Building a persistent dark/light theme system with React Context
- Creating reusable and maintainable React components
- Implementing animations with Framer Motion without unnecessary layout shifts
- Building responsive interfaces with Tailwind CSS
- Connecting a frontend form to a serverless API
- Integrating transactional email with Resend
- Managing environment variables and sensitive credentials
- Optimizing a Vite application for production
- Improving accessibility and keyboard navigation
- Structuring a production-ready personal project

---

 ## 🌐 Links

 - **Portfolio:** alazarda-portfolio.vercel.app
- **LinkedIn:** linkedin.com/in/alazar-da
- **GitHub:** github.com/Alazar-da
- **Email:** [alazar.damena01@gmail.com](<mailto:alazar.damena01@gmail.com>)
- **WhatsApp:** +251 92 231 3333

---

 ## 👤 About Me

 **Alazar Damena Girma**\
 Full Stack Software Engineer\
 Addis Ababa, Ethiopia

 I build modern, responsive, and scalable web applications with a focus on clean architecture, user experience, and maintainable code.

---

 ## 📄 License

 This project is personal work.

 The source code is available for reference and learning, but the **content, images, CV, branding, and personal information are not licensed for reuse**.

 Feel free to use the project's structure and implementation ideas as inspiration for your own portfolio.

---

 \<p align="center"\> Built with ❤️ by \<a href="https://github.com/Alazar-da"\>Alazar Damena\</a\> \</p\> \`\`\` ### One change I'd strongly recommend

 For a **portfolio GitHub repo**, add a real screenshot section once you have the images:

```
## 📸 Screenshots

| Home | Skills | Portfolio |
|---|---|---|
| ![Home](./.github/screenshots/home.png) | ![Skills](./.github/screenshots/skills.png) | ![Portfolio](./.github/screenshots/portfolio.png) |
```
