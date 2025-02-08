import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faWhatsapp, faLinkedinIn, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import send from '../img/Vector.png';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    budget: "",
    subject: "",
    message: "",
  });

  const descriptions = {
    icon: [faGlobe, faEnvelope, faPhone],
    header: [
      "Address:",
      "My Email:",
      "Call Me Now:",
    ],
    subHeader: [
      "Akaki Kality",
      "Alazar.damena01@gmail.com",
      "+251922313333",
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isValid = true; // For validation

    if (isValid) {
      try {
        const formDataObj = new URLSearchParams();
        formDataObj.append("name", formData.name);
        formDataObj.append("email", formData.email);
        formDataObj.append("location", formData.location);
        formDataObj.append("budget", formData.budget);
        formDataObj.append("subject", formData.subject);
        formDataObj.append("message", formData.message);

        const response = await fetch(
          'https://my-portfolio-server-gcd6.onrender.com/message/send',
          {
            method: "POST",
            body: formDataObj.toString(),
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        const result = await response.json();

        if (response.ok) {
          toast.success("Message successfully sent!", {
            position: "top-right",
            autoClose: 3000, // Closes after 3 seconds
          });
          console.log("Message successfully sent: " + result.message);
        } else {
          toast.error("Sending failed!", {
            position: "top-right",
            autoClose: 3000,
          });
          console.log("Sending failed: " + result.message);
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Sending failed!", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    }
  };

  return (
    <section className='flex justify-center items-center py-3 bg-slate-100 dark:bg-slate-800 pb-10' id='contact'>
      <ToastContainer />
      <div className='flex md:flex-row flex-col gap-5 lg:w-4/5 md:w-5/6 w-[90%] px-5 py-12 items-center bg-white dark:bg-slate-700 shadow-lg rounded-lg'>
        {/* Left Section */}
        <div className='md:w-1/2 w-full flex items-center'>
          <div className='flex flex-col'>
            <div className='flex flex-col justify-start gap-3'>
              <h2 className='font-semibold lg:text-3xl md:text-2xl text-xl dark:text-white'>Let's Discuss Your Project</h2>
              <p className='text-xs md:w-4/5 w-5/6 dark:text-slate-300'>
                I'm here to help bring your ideas to life. Whether you have a specific project in mind or just want to explore possibilities, let's start a conversation.
              </p>
            </div>

            {/* Contact Information */}
            <div className='flex flex-col gap-5 my-3'>
              {descriptions.header.map((header, index) => (
                <div
                  key={index}
                  className='flex justify-center lg:w-4/5 sm:w-5/6 w-full px-2 lg:px-0 hover:bg-white dark:hover:bg-slate-600 bg-transparent hover:rounded-md hover:shadow-xl hover:border'
                >
                  <div className='flex flex-row gap-4 lg:w-4/5 w-full py-3'>
                    <div className='text-primary-500 dark:text-primary-400 bg-secondary-100 dark:bg-slate-600 rounded-md hover:bg-primary-500 hover:text-white py-0.5 px-2 flex justify-center items-center'>
                      <FontAwesomeIcon icon={descriptions.icon[index]} size='lg' />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <h2 className='text-gray-700 dark:text-slate-300 text-xs'>{header}</h2>
                      <p className='text-gray-500 dark:text-slate-400 text-sm font-semibold'>{descriptions.subHeader[index]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className='flex justify-start gap-5 w-4/5 mt-5'>
              <button><FontAwesomeIcon icon={faInstagram} size='lg' className='text-primary-500 dark:text-primary-400 hover:text-white hover:bg-primary-500 p-1.5 rounded-md' /></button>
              <button><FontAwesomeIcon icon={faWhatsapp} size='lg' className='text-primary-500 dark:text-primary-400 hover:text-white hover:bg-primary-500 p-1.5 rounded-md' /></button>
              <button><FontAwesomeIcon icon={faLinkedinIn} size='lg' className='text-primary-500 dark:text-primary-400 hover:text-white hover:bg-primary-500 p-1.5 rounded-md' /></button>
              <button><FontAwesomeIcon icon={faGithub} size='lg' className='text-primary-500 dark:text-primary-400 hover:text-white hover:bg-primary-500 p-1.5 rounded-md' /></button>
              <button><FontAwesomeIcon icon={faTelegram} size='lg' className='text-primary-500 dark:text-primary-400 hover:text-white hover:bg-primary-500 p-1.5 rounded-md' /></button>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className='flex flex-col gap-12 md:w-1/2 w-full mt-5 md:mt-0'>
          <div className='flex flex-col justify-start gap-3'>
            <div>
              <p className='text-xs md:w-4/5 w-5/6 dark:text-slate-300'>
                Fill out the form below, and I'll get back to you as soon as possible. Let's create something amazing together!
              </p>
            </div>

            {/* Contact Form */}
            <form className='py-5 flex flex-col gap-5' onSubmit={handleSubmit}>
              <div className='relative'>
                <input
                  id="Name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="peer h-10 pl-2 w-full border-b-2 dark:text-slate-200 border-gray-100 dark:border-slate-600 bg-primary-100 dark:bg-slate-600 placeholder-transparent focus:outline-none focus:border-primary-500 dark:focus:border-primary-400"
                  placeholder="Your Name"
                />
                <label
                  htmlFor="Name"
                  className="absolute left-1 -top-3 text-gray-600 dark:text-slate-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-gray-600 dark:peer-focus:text-slate-300 peer-focus:text-sm"
                >
                  Name*
                </label>
              </div>

              <div className='relative'>
                <input
                  id="Email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="peer h-10 pl-2 w-full border-b-2 dark:text-slate-200 border-gray-100 dark:border-slate-600 bg-primary-100 dark:bg-slate-600 placeholder-transparent focus:outline-none focus:border-primary-500 dark:focus:border-primary-400"
                  placeholder="Your Email"
                />
                <label
                  htmlFor="Email"
                  className="absolute left-1 -top-3 text-gray-600 dark:text-slate-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-gray-600 dark:peer-focus:text-slate-300 peer-focus:text-sm"
                >
                  Email*
                </label>
              </div>

              <div className='relative'>
                <input
                  id="Location"
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="peer h-10 pl-2 w-full border-b-2 dark:text-slate-200 border-gray-100 dark:border-slate-600 bg-primary-100 dark:bg-slate-600 placeholder-transparent focus:outline-none focus:border-primary-500 dark:focus:border-primary-400"
                  placeholder="Your Location"
                />
                <label
                  htmlFor="Location"
                  className="absolute left-1 -top-3 text-gray-600 dark:text-slate-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 dark:peer-focus:text-slate-300 peer-focus:text-sm"
                >
                  Location
                </label>
              </div>

              <div className='flex flex-row gap-2'>
                <div className='relative w-1/3'>
                  <input
                    id="Budget"
                    type="number"
                    required
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="peer h-10 pl-2 w-full border-b-2 dark:text-slate-200 border-gray-100 dark:border-slate-600 bg-primary-100 dark:bg-slate-600 placeholder-transparent focus:outline-none focus:border-primary-500 dark:focus:border-primary-400"
                    placeholder="Your Budget"
                  />
                  <label
                    htmlFor="Budget"
                    className="absolute left-1 -top-3 text-gray-600 dark:text-slate-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 dark:peer-focus:text-slate-300 peer-focus:text-sm"
                  >
                    Budget*
                  </label>
                </div>

                <div className='relative w-2/3'>
                  <input
                    id="Subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="peer h-10 pl-2 w-full border-b-2 dark:text-slate-200 border-gray-100 dark:border-slate-600 bg-primary-100 dark:bg-slate-600 placeholder-transparent focus:outline-none focus:border-primary-500 dark:focus:border-primary-400"
                    placeholder="Your Subject"
                  />
                  <label
                    htmlFor="Subject"
                    className="absolute left-1 -top-3 text-gray-600 dark:text-slate-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 dark:peer-focus:text-slate-300 peer-focus:text-sm"
                  >
                    Subject*
                  </label>
                </div>
              </div>

              <div className='relative'>
                <textarea
                  id="Message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="peer h-20 pl-2 w-full border-b-2 dark:text-slate-200 border-gray-100 dark:border-slate-600 bg-primary-100 dark:bg-slate-600 placeholder-transparent focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 mt-1"
                  placeholder="Your Message"
                />
                <label
                  htmlFor="Message"
                  className="absolute left-1 -top-3 text-gray-600 dark:text-slate-300 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 dark:peer-focus:text-slate-300 peer-focus:text-sm"
                >
                  Message*
                </label>
              </div>

              <div>
                <button className='flex gap-2 text-white px-3 py-1.5 bg-primary-700 dark:bg-primary-600 rounded-md items-center hover:bg-primary-500 dark:hover:bg-primary-500'>
                  Submit <img src={send} alt='send' className='h-[16px]' />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;