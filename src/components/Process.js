import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook,faPen,faCode,faRocket } from '@fortawesome/free-solid-svg-icons'
function Process() {
    const descriptions={
        icon:[faBook,faPen,faCode,faRocket],
        header:[
            "Research",
            "Design",
            "Development",
            "Deployment"],
        subHeader:[
            "I begin by understanding your goals and audience, conducting thorough research to inform the design and development process.",
            "Using insights gained, I create stylish and modern designs that prioritize user experience and align with your brand identity.",
            "I transform designs into functional websites and web services, ensuring responsiveness and seamless performance across devices.",
            "Finally, I launch your project, providing ongoing support and optimization to ensure it meets your evolving needs."
        ],
    }
  return (
    <section className='flex justify-center items-center py-5 bg-white h-full ' id='process'>
    <div className='flex flex-col md:flex-row gap-5 lg:w-4/5 w-5/6 items-center'>
        <div className='flex flex-col gap-12 md:w-1/2 sm:w-4/5 w-full'>
            <div className='flex flex-col justify-start gap-3'>
                <h2 className=' font-semibold lg:text-4xl text-3xl'>Work Process</h2>
                <p className=' text-sm md:w-4/5 w-5/6'>
                    My work process begins with thorough research to understand your goals and target audience. I then create stylish designs that enhance user experience, followed by the development of responsive websites and web services.</p>
                <p className=' text-sm md:w-4/5 w-5/6'>
                Rigorous testing ensures optimal functionality, and finally, I deploy the project while providing ongoing support to keep your digital solutions effective and aligned with your needs.
                </p>
                
                
            </div>
        </div>

        <div className='md:w-1/2 w-full sm:w-4/5 grid md:grid-cols-2 grid-cols-1 gap-4 my-5 justify-start'>
            
                    {descriptions.header.map((header, index) => (
                        <div className='flex justify-center bg-white rounded-md shadow-md hover:shadow-xl hover:transition hover:ease-in-out hover:-translate-y-2'>
                            <div className='flex flex-col gap-4 w-4/5 py-5'>
                                <div className='text-primary-500 bg-secondary-100 rounded-md hover:bg-primary-500 hover:text-white py-2 flex justify-center w-[40px]'>
                                <FontAwesomeIcon icon={descriptions.icon[index]} size='lg'/>
                                </div>
                                <div key={index} className='flex flex-col gap-2'>
                                        <h2 className=' font-semibold text-xl'>{header}</h2>
                                        <p className=' text-xs'>{descriptions.subHeader[index]}</p>
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

export default Process