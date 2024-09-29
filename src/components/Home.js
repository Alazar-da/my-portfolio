import React from 'react'
import pic from '../img/pic1.png'
function Home() {
    const descriptions={
        header:["15 Y.","250+","58"],
        subHeader:["Experience","Project Completed","Happy Client"],
    }
  return (
    <section className='flex justify-center items-center py-3 bg-gradient-to-l from-[#C4F5E9]/70 from-5% h-full'>
        <div className='flex gap-5 lg:w-4/5 w-5/6 items-center'>
            <div className='flex flex-col gap-12 md:w-1/2 sm:w-4/5 w-full'>
                <div className='flex flex-col justify-start gap-3'>
                    <h1 className='text-gray-900 font-semibold lg:text-5xl md:text-4xl text-3xl'>Hello, I'm <span className='block'>Alazar Damena</span></h1>
                    <p className='text-gray-600 text-sm'>I'm a Freelance UI/UX Designer and Developer based in London, England. I strives to build immersive and beautiful web applications through carefully crafted code and user-centric design.</p>
                    <button className='text-white bg-cyan-500 w-[120px] h-[48px] rounded-md '>Say Hello!</button>
                </div>
                
                <div className='flex gap-1'>
                    {descriptions.header.map((header, index) => (
                                <div key={index} className='bg-[#EDD8FF]/50 flex flex-col py-2 items-center w-1/3 gap-0.5'>
                                    <h2 className='text-gray-700 font-semibold text-2xl'>{header}</h2>
                                    <p className='text-gray-500 text-xs'>{descriptions.subHeader[index]}</p>
                                </div>
                        )
                        )
                    }
                </div>
            </div>

            <div className='w-1/2 md:flex hidden justify-center items-center'>
                <div className='lg:w-3/5 w-4/5 flex justify-center bg-white rounded-lg h-5/6'>
                    <img src={pic} alt='pic' className=''/>
                </div>
                
            </div>
        </div>

    </section>
  )
}

export default Home