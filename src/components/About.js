import React from 'react'
import pic from '../img/pic1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faInstagram,faWhatsapp,faLinkedinIn,faGithub,faTelegram } from '@fortawesome/free-brands-svg-icons'
function About() {
  return (
    <section className='flex justify-center items-center py-3 bg-slate-100' id='about'>
        
    <div className='flex md:flex-row flex-col gap-5 lg:w-4/5 w-5/6 px-5 py-12 items-center bg-white shadow-lg rounded-lg'>
        <div className='md:w-1/2 w-full flex justify-center items-center'>
            <div className='md:w-2/3 w-3/4 sm:w-1/2 flex justify-center bg-gray-50 rounded-lg h-5/6 relative'>
                <img src={pic} alt='pic' className=''/>
                <div className='absolute -bottom-5 w-4/5 bg-white rounded-md flex h-[48px] shadow-lg'>
                    <div className='flex justify-around w-full'>
                        <button><FontAwesomeIcon icon={faInstagram} size='lg' className='text-primary-500 hover:text-white hover:bg-primary-500 p-1.5 rounded-md'/></button>
                        <button><FontAwesomeIcon icon={faWhatsapp} size='lg' className='text-primary-500 hover:text-white hover:bg-primary-500 p-1.5 rounded-md'/></button>
                        <button><FontAwesomeIcon icon={faLinkedinIn} size='lg' className='text-primary-500 hover:text-white hover:bg-primary-500 p-1.5 rounded-md'/></button>
                        <button><FontAwesomeIcon icon={faGithub} size='lg' className='text-primary-500 hover:text-white hover:bg-primary-500 p-1.5 rounded-md'/></button>
                        <button><FontAwesomeIcon icon={faTelegram} size='lg' className='text-primary-500 hover:text-white hover:bg-primary-500 p-1.5 rounded-md'/></button>
                    </div>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-12 md:w-1/2 w-full mt-5 md:mt-0'>
            <div className='flex flex-col justify-start gap-3'>
                <h2 className='text-gray-900 font-semibold lg:text-4xl text-3xl'>I am Professional <span className='block'>Front-End Developer</span></h2>
                <p className='text-gray-600 text-sm'>
                    I design and develop services for clients, specializing in creating stylish, modern websites and web services.
                </p>
                <p className='text-gray-600 text-sm'>
                    My passion lies in crafting digital user experiences that engage, inspire, and drive results, helping businesses thrive in the online world.
                </p>
                <div className='flex gap-3'>
                    <button className='text-white bg-primary-600 hover:bg-primary-500 w-[120px] h-[44px] rounded-md text-sm'>My Projects</button>
                    <button className='bg-white text-secondary-500 border-secondary-500 hover:bg-secondary-500 hover:text-white  border h-[44px] rounded-md flex gap-2 items-center px-3 text-sm'><FontAwesomeIcon icon={faDownload} /> Download CV </button>
                </div>
                
            </div>
        </div>
    </div>

</section>
  )
}

export default About