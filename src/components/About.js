import React, { useState, useEffect } from 'react';
import pic from '../img/pic1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp, faLinkedinIn, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';

function About() {
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

  return (
    <section className='flex justify-center items-center py-3 bg-slate-50 dark:bg-slate-800' id='about'>
      <div className='flex md:flex-row flex-col gap-5 lg:w-4/5 w-5/6 px-5 py-12 items-center bg-white dark:bg-slate-700 shadow-lg rounded-lg'>
        <div className='md:w-1/2 w-full flex justify-center items-center'>
          <div className='md:w-2/3 w-3/4 sm:w-1/2 flex justify-center bg-gray-50 dark:bg-slate-600 rounded-lg h-5/6 relative'>
            <img src={pic} alt='pic' className='rounded-lg' />
            <div className='absolute -bottom-5 w-4/5 bg-white dark:bg-slate-800 rounded-md flex h-[48px] shadow-lg'>
              <div className='flex justify-around w-full items-center'>
                <a href='https://www.instagram.com/Alazar_da/' target='_blank'><FontAwesomeIcon icon={faInstagram} size='lg' className='text-primary-500 hover:text-white hover:bg-primary-500 p-1.5 rounded-md' /></a>
                <a href='https://wa.me/+251922313333' target='_blank'><FontAwesomeIcon icon={faWhatsapp} size='lg' className='text-primary-500 hover:text-white hover:bg-primary-500 p-1.5 rounded-md' /></a>
                <a href='https://www.linkedin.com/in/alazar-da' target='_blank'><FontAwesomeIcon icon={faLinkedinIn} size='lg' className='text-primary-500 hover:text-white hover:bg-primary-500 p-1.5 rounded-md' /></a>
                <a href='https://github.com/Alazar-da' target='_blank'><FontAwesomeIcon  icon={faGithub} size='lg' className='text-primary-500 hover:text-white hover:bg-primary-500 p-1.5 rounded-md' /></a>
                <a href='https://t.me/Alazar_da' target='_blank'><FontAwesomeIcon icon={faTelegram} size='lg' className='text-primary-500 hover:text-white hover:bg-primary-500 p-1.5 rounded-md' /></a>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-12 md:w-1/2 w-full mt-5 md:mt-0'>
          <div className='flex flex-col justify-start gap-3'>
            <h2 className='text-gray-900 dark:text-white font-semibold lg:text-4xl text-3xl'>
              I am Professional <span className='block'>Front-End Developer</span>
            </h2>
            <p className='text-gray-600 dark:text-slate-300 text-sm'>
              I design and develop services for clients, specializing in creating stylish, modern websites and web services.
            </p>
            <p className='text-gray-600 dark:text-slate-300 text-sm'>
              My passion lies in crafting digital user experiences that engage, inspire, and drive results, helping businesses thrive in the online world.
            </p>
            <div className='flex gap-3'>
              <button className='text-white bg-primary-600 hover:bg-primary-800 w-[120px] h-[44px] rounded-md text-sm dark:bg-primary-700 dark:hover:bg-primary-600'>
                My Projects
              </button>
              <button className='bg-white dark:bg-slate-800 text-secondary-500 dark:text-secondary-400 border-secondary-500 dark:border-secondary-400 hover:bg-secondary-500 hover:text-white dark:hover:bg-secondary-600 dark:hover:text-white border h-[44px] rounded-md flex gap-2 items-center px-3 text-sm'>
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;