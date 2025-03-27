import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5/CSS3", level: 90, description: "Proficient in creating responsive and modern web designs using HTML5 and CSS3." },
  { name: "JavaScript", level: 80, description: "Strong understanding of JavaScript fundamentals and ES6+ features." },
  { name: "React", level: 80, description: "Expertise in building dynamic and interactive user interfaces using React." },
  { name: "Next.js", level: 70, description: "Familiar with server-side rendering and static site generation using Next.js." },
  { name: "Tailwind CSS/Bootstrap", level: 85, description: "Skilled in utility-first and component-based CSS frameworks like Tailwind CSS and Bootstrap for rapid, responsive UI development." },
  { name: "TypeScript", level: 70, description: "Experience in adding type safety to JavaScript projects using TypeScript." },
  { name: "Redux", level: 70, description: "Experience in state management using Redux in React applications." },
  { name: "RESTful API", level: 85, description: "Skilled in designing and consuming RESTful APIs for backend communication." },
  { name: "GraphQL", level: 65, description: "Familiar with querying data using GraphQL and integrating it with frontend applications." },
  { name: "MERN", level: 70, description: "Proficient in building full-stack applications using the MERN stack (MongoDB, Express.js, React, Node.js)." },
  { name: "Git", level: 80, description: "Skilled in version control using Git for collaborative and efficient project management." },
  { name: "Testing/DevOps", level: 70, description: "Experience with automated testing, CI/CD pipelines, and deployment strategies to ensure software reliability and efficiency." }
];

/* { name: "", level: 80, description: "Proficient in using Bootstrap for creating responsive and mobile-first websites." }, */
const Skills = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [showAllSkills, setShowAllSkills] = useState(false);

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

  const toggleReadMore = (index) => {
    if (expandedSkill === index) {
      setExpandedSkill(null); // Collapse if already expanded
    } else {
      setExpandedSkill(index); // Expand the clicked skill
    }
  };

  const toggleShowAllSkills = () => {
    setShowAllSkills((prev) => !prev); // Toggle between showing all skills and only the top 6
  };

  const getColorIntensity = (level) => {
    if (level >= 90) return "bg-secondary-900"; // Darkest
    if (level >= 80) return "bg-secondary-700";
    if (level >= 70) return "bg-secondary-500";
    if (level >= 60) return "bg-secondary-300";
    return "bg-secondary-100"; // Lightest
  };

  // Determine which skills to display based on screen size and "Load More" state
  const displayedSkills = showAllSkills ? skills : skills.slice(0, 6);

  return (
    <section className="bg-white dark:bg-slate-800 py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 dark:text-white">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedSkills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-primary-100 dark:bg-slate-700 rounded-2xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 dark:text-white">{skill.name}</h3>
              <div className="w-full bg-gray-200 dark:bg-slate-600 rounded-full h-4">
                <div
                  className={`h-4 rounded-full ${getColorIntensity(skill.level)}`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-right mt-2 text-secondary-800 dark:text-secondary-400 font-medium">
                {skill.level}%
              </p>
              {expandedSkill === index ? (
                <p className="mt-4 text-sm text-gray-600 dark:text-slate-300">{skill.description}</p>
              ) : null}
              <button
                onClick={() => toggleReadMore(index)}
                className="mt-4 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-600 font-medium"
              >
                {expandedSkill === index ? "Read Less..." : "Read More..."}
              </button>
            </motion.div>
          ))}
        </div>
        {/* "Load More" or "Show Less" Button */}
        {skills.length > 6 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={toggleShowAllSkills}
              className="px-6 py-2 bg-primary-600 dark:bg-primary-700 text-white rounded-md hover:bg-primary-700 dark:hover:bg-primary-600 transition duration-300"
            >
              {showAllSkills ? "Show Less" : "Load More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;