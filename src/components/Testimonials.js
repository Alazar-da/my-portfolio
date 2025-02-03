import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      text: "Alazar delivered exceptional results for our project. His attention to detail and commitment to quality are unmatched.",
      name: "Esther Howard",
      role: "Managing Director, ABC Company",
    },
    {
      text: "Working with Alazar was a pleasure. He transformed our vision into a stunning, user-friendly website.",
      name: "John Doe",
      role: "CEO, XYZ Company",
    },
    {
      text: "Alazar's expertise in front-end development helped us achieve a seamless and responsive design.",
      name: "Jane Smith",
      role: "Founder, LMN Startup",
    },
    {
      text: "We are thrilled with the results! Alazar's professionalism and technical skills are top-notch.",
      name: "Alice Johnson",
      role: "CTO, PQR Solutions",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      handlePrev();
    }
  };

  return (
    <section className="flex justify-center py-12 bg-slate-100 dark:bg-slate-800">
      <div className="md:w-4/5 w-5/6 flex flex-col items-center gap-8">
        {/* Header */}
        <div className="flex flex-col gap-3 md:w-3/5 w-4/5">
          <h2 className="font-bold lg:text-3xl text-2xl text-center dark:text-white">
            Testimonials
          </h2>
          <p className="text-center text-slate-600 dark:text-slate-300 text-sm">
            Hear from our satisfied clients who have experienced the quality of our work and services firsthand.
          </p>
        </div>

        {/* Testimonial Content with Transition */}
        <div className="relative w-full flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-4/5 flex flex-col items-center text-center bg-white dark:bg-slate-700 p-6 rounded-2xl shadow-lg"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <p className="font-medium text-base text-slate-700 dark:text-slate-300">
                {testimonials[currentSlide].text}
              </p>
              <h3 className="text-primary-600 dark:text-primary-400 font-semibold text-lg mt-2">
                {testimonials[currentSlide].name}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm">{testimonials[currentSlide].role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 md:flex -translate-y-1/2 transform justify-between hidden">
            <button
              onClick={handlePrev}
              className="bg-secondary-100 dark:bg-slate-600 hover:bg-secondary-200 dark:hover:bg-slate-500 rounded-full p-3 transition-transform transform hover:scale-110 shadow-md"
            >
              <FontAwesomeIcon icon={faArrowLeft} size="lg" className="text-slate-700 dark:text-white" />
            </button>
            <button
              onClick={handleNext}
              className="bg-secondary-100 dark:bg-slate-600 hover:bg-secondary-200 dark:hover:bg-slate-500 rounded-full p-3 transition-transform transform hover:scale-110 shadow-md"
            >
              <FontAwesomeIcon icon={faArrowRight} size="lg" className="text-slate-700 dark:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;