import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
function Project() {
  return (
    <section className='bg-gray-900 w-full flex justify-center py-10'>
        <div className='flex flex-col gap-3 md:w-3/5 w-5/6'>
            <h3 className='text-white font-semibold lg:text-3xl text-2xl text-center'>Do you have Project Idia?
            <span className='block pt-1'>Let's discuss your project!</span></h3>
            <p className='text-gray-600 text-center text-sm'>There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration.</p>
            <div className='flex justify-center'>
                <button className='text-white py-2 px-3 bg-cyan-500 rounded-md flex gap-2 font-semibold'>Let's work Together<FontAwesomeIcon icon={faArrowRight} className='pt-1.5'/></button>
            </div>
            
        </div>
    </section>
  )
}

export default Project