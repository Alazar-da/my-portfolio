import React, { useState, useEffect } from 'react';

function Project() {
  const descriptions = {
    header: [
      "Front-End Development",
      "UI/UX Design",
      "Back-End Development",
    ],
    subHeader: [
      "I collaborate with stakeholders or clients to understand the purpose of the app or website, ensuring the final product aligns with their vision and goals.",
      "The design phase involves creating the visual and interactive aspects of the app or website, focusing on user experience and modern aesthetics.",
      "This is where the actual coding begins. The backend is built to handle data processing, server logic, and integrations, ensuring seamless functionality.",
    ],
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
    <section className='flex justify-center items-center py-12 bg-slate-50 dark:bg-slate-800 h-full' id='service'>
      <div className='flex flex-col md:flex-row gap-5 lg:w-4/5 w-5/6 items-center'>
        <div className='flex flex-col gap-12 md:w-1/2 sm:w-4/5 w-full'>
          <div className='flex flex-col justify-start gap-3'>
            <h2 className='text-gray-900 dark:text-white font-semibold lg:text-4xl text-3xl'>What I Do?</h2>
            <p className='text-gray-600 dark:text-slate-300 text-sm w-5/6'>
              I specialize in creating modern, user-friendly web applications that align with your business goals. From initial research to final deployment, I ensure every step of the process is tailored to your needs.
            </p>
            <p className='text-gray-600 dark:text-slate-300 text-sm w-5/6'>
              My approach combines creativity, technical expertise, and a deep understanding of user experience to deliver high-quality digital solutions.
            </p>
            <button className='text-white bg-primary-600 hover:bg-primary-500 w-[120px] h-[48px] rounded-md dark:bg-primary-700 dark:hover:bg-primary-600'>
              Say Hello!
            </button>
          </div>
        </div>

        <div className='md:w-1/2 w-full sm:w-4/5 flex flex-col items-center gap-5 justify-start'>
          {descriptions.header.map((header, index) => (
            <div
              key={index}
              className='flex justify-center w-5/6 bg-white dark:bg-slate-700 rounded-md shadow-md hover:shadow-xl hover:transition hover:ease-in-out hover:-translate-y-2 hover:border-l-4 hover:border-secondary-500 dark:hover:border-secondary-400'
            >
              <div className='flex flex-col gap-4 w-4/5 py-5'>
                <div className='flex flex-col gap-2'>
                  <h2 className='text-gray-700 dark:text-white font-semibold text-xl'>{header}</h2>
                  <p className='text-gray-500 dark:text-slate-300 text-xs'>{descriptions.subHeader[index]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Project;