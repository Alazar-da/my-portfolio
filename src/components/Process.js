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
        subHeader:["I'll collaborates with stakeholders or clients to understand the purpose of the app or website. ",
            "The design phase involves creating the visual and interactive aspects of the app or website. ",
            "This is where the actual coding begins. The frontend is built to create the user interface, ",
            "After development, the product is thoroughly tested to identify and fix bugs or issues. Once "
        ],
    }
  return (
    <section className='flex justify-center items-center py-5 bg-slate-50 h-full'>
    <div className='flex flex-col md:flex-row gap-5 lg:w-4/5 w-5/6 items-center'>
        <div className='flex flex-col gap-12 md:w-1/2 sm:w-4/5 w-full'>
            <div className='flex flex-col justify-start gap-3'>
                <h2 className='text-gray-900 font-semibold lg:text-4xl text-3xl'>Work Process</h2>
                <p className='text-gray-600 text-sm md:w-4/5 w-5/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,</p>
                <p className='text-gray-600 text-sm md:w-4/5 w-5/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
                
                
            </div>
        </div>

        <div className='md:w-1/2 w-full sm:w-4/5 grid md:grid-cols-2 grid-cols-1 gap-4 my-5 justify-start'>
            
                    {descriptions.header.map((header, index) => (
                        <div className='flex justify-center bg-white rounded-md shadow-md hover:shadow-xl hover:transition hover:ease-in-out hover:-translate-y-2'>
                            <div className='flex flex-col gap-4 w-4/5 py-5'>
                                <div className='text-cyan-500 bg-[#EDD8FF] rounded-md hover:bg-cyan-500 hover:text-white py-2 flex justify-center w-[40px]'>
                                <FontAwesomeIcon icon={descriptions.icon[index]} size='lg'/>
                                </div>
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

export default Process