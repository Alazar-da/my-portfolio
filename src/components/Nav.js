import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  // Initialize theme state with system preference or localStorage
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
  });

  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className='flex justify-center py-3 bg-white dark:bg-slate-800 dark:text-white'>
      <nav className="md:flex md:justify-around lg:w-4/5 w-5/6">
        <div className="flex items-center justify-between">
          <h1 className="flex gap-2 justify-start items-center">
            <span className='text-[22px] w-[35px] h-[35px] rounded-full bg-primary-600 flex justify-center items-center text-white pb-1'>A</span>
            <span className="text-2xl font-semibold">Alazar</span>
          </h1>

          {/* Mobile Menu Button */}
          <button className="text-black md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/* Menu Items */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:flex mt-2 md:mt-0`} id='menu'>
          <ul className="flex md:flex-row flex-col md:gap-10 gap-2 md:items-center text-sm font-semibold">
            <li><a className="hover:text-slate-950 dark:hover:text-slate-400" href="#home">Home</a></li>
            <li><a className="hover:text-slate-950 dark:hover:text-slate-400" href="#about">About</a></li>
            <li><a className="hover:text-slate-950 dark:hover:text-slate-400" href="#process">Process</a></li>
            <li><a className="hover:text-slate-950 dark:hover:text-slate-400" href="#portfolio">Portfolio</a></li>
            <li><a className="hover:text-slate-950 dark:hover:text-slate-400" href="#service">Services</a></li>
            <li>
              <a className="bg-primary-600 hover:bg-primary-800 px-4 py-2 text-white rounded-md font-semibold" href="#contact">
                Contact
              </a>
            </li>
            <li>
              {/* Theme Toggle Switch */}
              <label className="flex items-center gap-2 cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                  />
                  <div className="w-10 h-6 bg-gray-300 rounded-full shadow-inner dark:bg-gray-700 transition-colors duration-300"></div>
                  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out dark:translate-x-4"></div>
                </div>
                <span className="text-xs">Dark Mode</span>
              </label>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Nav;