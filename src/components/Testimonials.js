import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

function Testimonials() {
  const testimonials = [
    {
      text: "Nulla efficitur nisl sit amet velit malesuada dapibus...",
      name: "Esther Howard",
      role: "Managing Director, ABC company",
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      name: "John Doe",
      role: "CEO, XYZ company",
    },
    {
      text: "Sed do eiusmod tempor incididunt ut labore et dolore...",
      name: "Jane Smith",
      role: "Founder, LMN Startup",
    },
    {
      text: "Excepteur sint occaecat cupidatat non proident...",
      name: "Alice Johnson",
      role: "CTO, PQR Solutions",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="flex justify-center py-12 bg-slate-100">
      <div className="md:w-4/5 w-5/6 flex flex-col items-center gap-8">
        {/* Header */}
        <div className="flex flex-col gap-3 md:w-3/5 w-4/5">
          <h2 className="font-bold lg:text-3xl text-2xl text-center">
            Testimonials
          </h2>
          <p className="text-center text-slate-600 text-sm">
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
              className="w-full md:w-4/5 flex flex-col items-center text-center bg-white p-6 rounded-2xl shadow-lg"
            >
              <p className="font-medium text-base text-slate-700">
                {testimonials[currentSlide].text}
              </p>
              <h3 className="text-blue-600 font-semibold text-lg mt-2">
                {testimonials[currentSlide].name}
              </h3>
              <p className="text-slate-500 text-sm">{testimonials[currentSlide].role}</p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              onClick={handlePrev}
              className="bg-secondary-100 hover:bg-secondary-200 rounded-full p-3 transition-transform transform hover:scale-110 shadow-md"
            >
              <FontAwesomeIcon icon={faArrowLeft} size="lg" />
            </button>
            <button
              onClick={handleNext}
              className="bg-secondary-100 hover:bg-secondary-200 rounded-full p-3 transition-transform transform hover:scale-110 shadow-md"
            >
              <FontAwesomeIcon icon={faArrowRight} size="lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
