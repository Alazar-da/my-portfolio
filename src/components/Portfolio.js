import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Portfolio1 from '../img/Portfolio1.png';

function Portfolio() {
  const portfolioItems = [
    {
      title: 'Front-end Developer',
      company: 'Milkomi Consultancy',
      description: 'Developed a responsive and user-friendly website for Milkomi Consultancy, ensuring seamless navigation and modern design.',
      link: 'https://milkomiconsultancy.com/',
    },
    {
      title: 'Front-end Developer',
      company: 'Inventory Management',
      description: 'Built an inventory management system with a clean and intuitive interface, improving efficiency for small businesses.',
      link: '#',
    },
    {
      title: 'Full-Stack Developer',
      company: 'E-Commerce Platform',
      description: 'Designed and developed a fully functional e-commerce platform with secure payment integration and responsive design.',
      link: '#',
    },
  ];

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
    <section className='flex justify-center py-5 bg-slate-50 dark:bg-slate-800' id='portfolio'>
      <div className='lg:w-4/5 md:w-[96%] w-[90%] flex flex-col items-center gap-8'>
        <div className='flex flex-col gap-3 md:w-3/5 w-4/5'>
          <h2 className='font-semibold lg:text-2xl text-xl text-center dark:text-white'>
            Portfolio
          </h2>
          <p className='text-center font-light text-sm dark:text-slate-300'>
            Here are some of the projects I've had the privilege to work on, each reflecting my commitment to creating high-quality, stylish, and user-friendly web applications.
          </p>
        </div>

        <div className='grid md:grid-cols-3 lg:gap-5 gap-3 justify-items-center'>
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className='flex flex-col gap-4 rounded-md shadow-lg border pb-5 md:w-full w-[90%] sm:w-2/3 bg-white dark:bg-slate-700 hover:shadow-xl dark:hover:shadow-lg dark:border-slate-600'
            >
              <img
                className='w-full h-[200px] rounded-t-md shadow-t-lg'
                src={Portfolio1}
                alt={item.company}
              />
              <div className='flex justify-center'>
                <div className='w-5/6 flex flex-col'>
                  <h5 className='text-sm uppercase dark:text-slate-400'>{item.title}</h5>
                  <h2 className='text-gray-600 dark:text-white font-semibold lg:text-xl'>
                    {item.company}
                  </h2>
                  <p className='text-xs mt-1 dark:text-slate-300'>{item.description}</p>
                  <div className='flex justify-start mt-4'>
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='py-1.5 px-3 bg-transparent text-primary-500 dark:text-primary-400 hover:bg-primary-500 hover:text-white dark:hover:text-white border-primary-500 dark:border-primary-400 border rounded-md flex gap-2 font-semibold'
                    >
                      Case Study <FontAwesomeIcon icon={faArrowRight} className='pt-1.5' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;