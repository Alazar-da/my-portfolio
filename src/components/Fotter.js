import React, { useState, useEffect } from 'react';

function Footer() {
  // Initialize theme state with system preference or localStorage
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
  });

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Update the theme and localStorage when theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <section className='bg-slate-800 dark:bg-slate-900 w-full flex justify-center md:items-end py-5 min-h-[90px]'>
      <div className='flex justify-between flex-col md:flex-row md:w-4/5 w-5/6 gap-5 md:gap-0'>
        {/* Logo Section */}
        <div>
          <h1 className="flex gap-2 justify-center items-center">
            <span className='text-[22px] w-[35px] h-[35px] rounded-full bg-primary-700 flex justify-center items-center text-white pb-1'>A</span>
            <span className="text-2xl font-semibold text-white dark:text-slate-100">Alazar</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className='flex justify-center'>
          <ul className="flex flex-row md:gap-5 gap-3 items-center text-gray-50 dark:text-slate-300 text-sm font-semibold">
            <li>
              <a className="hover:text-secondary-200 dark:hover:text-secondary-400" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-secondary-200 dark:hover:text-secondary-400" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-secondary-200 dark:hover:text-secondary-400" href="#service">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-secondary-200 dark:hover:text-secondary-400" href="#portfolio">
                Portfolio
              </a>
            </li>
            <li>
              <button className='hover:text-secondary-200 dark:hover:text-secondary-400' href="#contact">
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Copyright Section */}
        <div className='flex justify-center items-center'>
          <span className='text-gray-50 dark:text-slate-300 text-sm font-semibold text-center'>
            Copyright © {currentYear} Alazar. All rights reserved.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Footer;