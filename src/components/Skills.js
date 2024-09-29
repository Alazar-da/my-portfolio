import React from 'react'

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
    <section className='flex justify-center items-center py-12 bg-slate-50 h-full'>
    <div className='flex flex-col md:flex-row gap-5 lg:w-4/5 w-5/6 items-center'>
        <div className='flex flex-col gap-12 md:w-1/2 sm:w-4/5 w-full'>
            <div className='flex flex-col justify-start gap-3'>
                <h2 className='text-gray-900 font-semibold lg:text-4xl text-3xl'>What I do?</h2>
                <p className='text-gray-600 text-sm w-5/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,</p>
                <p className='text-gray-600 text-sm w-5/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.</p>
                
                <button className='text-white bg-cyan-500 w-[120px] h-[48px] rounded-md'>Say Hello!</button>
            </div>
        </div>

        <div className='md:w-1/2 w-full sm:w-4/5 flex flex-col items-center gap-5 justify-start'>
            
                    {descriptions.header.map((header, index) => (
                        <div className='flex justify-center w-5/6 bg-white rounded-md shadow-md hover:shadow-xl hover:transition hover:ease-in-out hover:-translate-y-2 hover:border-l-4 hover:border-cyan-500'>
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

export default Skills