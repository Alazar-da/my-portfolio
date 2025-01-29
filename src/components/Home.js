import React from 'react'
import pic from '../img/pic1.png'
function Home() {
    const descriptions={
        header:["3 Y.","10+","8"],
        subHeader:["Experience","Project Completed","Happy Client"],
    }
  return (
    <section className='flex justify-center items-center py-3 bg-slate-100 h-full' id='home'>
        <div className='flex gap-5 lg:w-4/5 w-5/6 items-center'>
            <div className='flex flex-col gap-12 md:w-1/2 sm:w-4/5 w-full'>
                <div className='flex flex-col justify-start gap-3'>
                    <h1 className='font-semibold lg:text-5xl md:text-4xl text-3xl'>Hello, I'm <span className='block'>Alazar Damena</span></h1>
                    <p className='text-sm'>
                        I am a Freelance Front-End Developer based in Ethiopia, specializing in building immersive and beautiful web applications through carefully crafted code and user-centric design. My passion is to create dynamic user experiences that engage and inspire, helping businesses thrive online.
                    </p>
                    <a className='text-white bg-primary-700 hover:bg-primary-500 w-[120px] h-[48px] rounded-md flex items-center justify-center' href='#contact'>Say Hello!</a>
                </div>
                
                <div className='flex gap-2'>
                    {descriptions.header.map((header, index) => (
                                <div key={index} className='bg-slate-600 text-primary-100 flex flex-col py-2 items-center w-1/3 gap-0.5'>
                                    <h2 className=' font-semibold text-2xl'>{header}</h2>
                                    <p className=' text-xs'>{descriptions.subHeader[index]}</p>
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