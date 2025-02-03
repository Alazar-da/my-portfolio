import React, { useState, useEffect } from 'react';
import pic from '../img/pic1.png';

function Home() {
  const descriptions = {
    header: ["3 Y.", "15+", "10"],
    subHeader: ["Experience", "Project Completed", "Happy Client"],
  };

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
    <section className='flex justify-center items-center py-3 bg-slate-50 dark:bg-slate-800 h-full' id='home'>
      <div className='flex gap-5 lg:w-4/5 w-5/6 items-center'>
        <div className='flex flex-col gap-12 md:w-1/2 sm:w-4/5 w-full'>
          <div className='flex flex-col justify-start gap-3'>
            <h1 className='font-semibold lg:text-5xl md:text-4xl text-3xl dark:text-white'>
              Hello, I'm <span className='block'>Alazar Damena</span>
            </h1>
            <p className='text-sm dark:text-slate-300'>
              I am a Freelance Front-End Developer based in Ethiopia, specializing in building immersive and beautiful web applications through carefully crafted code and user-centric design. My passion is to create dynamic user experiences that engage and inspire, helping businesses thrive online.
            </p>
            <a
              className='text-white bg-primary-600 hover:bg-primary-800 w-[120px] h-[48px] rounded-md flex items-center justify-center dark:bg-primary-700 dark:hover:bg-primary-600'
              href='#contact'
            >
              Say Hello!
            </a>
          </div>

          <div className='flex gap-2'>
            {descriptions.header.map((header, index) => (
              <div
                key={index}
                className='bg-slate-600 dark:bg-slate-700 text-primary-100 dark:text-slate-200 flex flex-col py-2 items-center w-1/3 gap-0.5 rounded-lg'
              >
                <h2 className='font-semibold text-2xl'>{header}</h2>
                <p className='text-xs'>{descriptions.subHeader[index]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className='w-1/2 md:flex hidden justify-center items-center'>
          <div className='lg:w-3/5 w-4/5 flex justify-center bg-white dark:bg-slate-700 rounded-lg h-5/6 shadow-lg'>
            <img src={pic} alt='pic' className='rounded-lg' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;