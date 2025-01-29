/* import React from 'react'

function Skills() {
    const descriptions={
        header:[
            "Front-End Development",
            "UI UX Design",
            "Back-End Development"
        ],
        subHeader:[
            "I'll collaborates with stakeholders or clients to understand the purpose of the app or website. ",
            "The design phase involves creating the visual and interactive aspects of the app or website. ",
            "This is where the actual coding begins. The frontend is built to create the user interface, scs",
        ],
    }
  return (
    <section className='flex justify-center items-center py-12 bg-slate-50 h-full' id='service'>
    <div className='flex flex-col md:flex-row gap-5 lg:w-4/5 w-5/6 items-center'>
        <div className='flex flex-col gap-12 md:w-1/2 sm:w-4/5 w-full'>
            <div className='flex flex-col justify-start gap-3'>
                <h2 className='text-gray-900 font-semibold lg:text-4xl text-3xl'>What I do?</h2>
                <p className='text-gray-600 text-sm w-5/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,</p>
                <p className='text-gray-600 text-sm w-5/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
                
                <button className='text-white bg-primary-600 hover:bg-primary-500 w-[120px] h-[48px] rounded-md'>Say Hello!</button>
            </div>
        </div>

        <div className='md:w-1/2 w-full sm:w-4/5 flex flex-col items-center gap-5 justify-start'>
            
                    {descriptions.header.map((header, index) => (
                        <div className='flex justify-center w-5/6 bg-white rounded-md shadow-md hover:shadow-xl hover:transition hover:ease-in-out hover:-translate-y-2 hover:border-l-4 hover:border-secondary-500'>
                            <div className='flex flex-col gap-4 w-4/5 py-5'>
                                <div key={index} className='flex flex-col gap-2'>
                                        <h2 className='text-gray-700 font-semibold text-xl'>{header}</h2>
                                        <p className='text-gray-500 text-xs'>{descriptions.subHeader[index]}</p>
                                </div>
                            </div>
                        </div>        
                        )
                        )
                    }
                
        </div>
    </div>

</section>
  )
}

export default Skills */
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 75 },
  { name: "Next.js", level: 70 },
  { name: "Tailwind CSS", level: 80 },
  { name: "TypeScript", level: 70 },
  { name: "GraphQL", level: 65 },
];

const Skills = () => {
  const progressColors = [
    "bg-primary-600", "bg-secondary-600", "bg-primary-500", "bg-secondary-500",
    "bg-primary-400", "bg-secondary-400", "bg-primary-300", "bg-secondary-300"
  ];

  return (
    <section className="bg-white py-12 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-slate-100 rounded-2xl shadow-lg hover:bg-slate-300 transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
              <div className="w-full bg-gray-200 rounded-full h-4">
                <div
                  className={`h-4 rounded-full ${progressColors[index % progressColors.length]}`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <p className="text-right mt-2 text-secondary-800 font-medium">
                {skill.level}%
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

