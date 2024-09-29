import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Portfolio1 from '../img/Portfolio1.png'
function Portfolio() {
  return (
    <section className='flex justify-center py-5 bg-gray-100'>
        <div className='lg:w-4/5 md:w-[96%] w-[90%] flex flex-col items-center gap-8'>
            <div className='flex flex-col gap-3 md:w-3/5 w-4/5'>
                <h2 className='text-gray-800 font-semibold lg:text-2xl text-xl text-center'>
                Portfolio
                </h2>
                <p className='text-center text-gray-400 text-sm'>There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration.</p>
            </div>

            <div className='grid md:grid-cols-3 lg:gap-5 gap-3 justify-items-center'>
                <div className='flex flex-col gap-4 rounded-md shadow-lg border pb-5 md:w-full w-[90%] sm:w-2/3 bg-white'>
                   <img className='w-full h-[200px] rounded-t-md shadow-t-lg' src={Portfolio1}/>
                    <div className='flex justify-center'>
                        <div className='w-5/6 flex flex-col'>
                            <h5 className='text-gray-400 text-sm uppercase'>UI-UX DESIGN</h5>
                            <h2 className='text-gray-600 font-semibold lg:text-xl'>Product Admin Dashboard</h2>
                            <p className='text-gray-400 text-xs mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.</p>
                            <div className='flex justify-start mt-4'>
                                <button className='py-1.5 px-3 bg-transparent text-cyan-500 border-cyan-500 border rounded-md flex gap-2 font-semibold'>Case Study<FontAwesomeIcon icon={faArrowRight} className='pt-1.5'/></button>
                            </div>
                        </div>   
                    </div>                
                </div>

                <div className='flex flex-col gap-4 rounded-md shadow-lg border pb-5 md:w-full w-[90%] sm:w-2/3 bg-white'>
                   <img className='w-full h-[200px] rounded-t-md shadow-t-lg' src={Portfolio1}/>
                    <div className='flex justify-center'>
                        <div className='w-5/6 flex flex-col'>
                            <h5 className='text-gray-400 text-sm uppercase'>UI-UX DESIGN</h5>
                            <h2 className='text-gray-600 font-semibold lg:text-xl'>Product Admin Dashboard</h2>
                            <p className='text-gray-400 text-xs mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.</p>
                            <div className='flex justify-start mt-4'>
                                <button className='py-1.5 px-3 bg-transparent text-cyan-500 border-cyan-500 border rounded-md flex gap-2 font-semibold'>Case Study<FontAwesomeIcon icon={faArrowRight} className='pt-1.5'/></button>
                            </div>
                        </div>   
                    </div>                
                </div>

                <div className='flex flex-col gap-4 rounded-md shadow-lg border pb-5 md:w-full w-[90%] sm:w-2/3 bg-white'>
                   <img className='w-full h-[200px] rounded-t-md shadow-t-lg' src={Portfolio1}/>
                    <div className='flex justify-center'>
                        <div className='w-5/6 flex flex-col'>
                            <h5 className='text-gray-400 text-sm uppercase'>UI-UX DESIGN</h5>
                            <h2 className='text-gray-600 font-semibold lg:text-xl'>Product Admin Dashboard</h2>
                            <p className='text-gray-400 text-xs mt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci.</p>
                            <div className='flex justify-start mt-4'>
                                <button className='py-1.5 px-3 bg-transparent text-cyan-500 border-cyan-500 border rounded-md flex gap-2 font-semibold'>Case Study<FontAwesomeIcon icon={faArrowRight} className='pt-1.5'/></button>
                            </div>
                        </div>   
                    </div>                
                </div>

                

                
            </div>
        </div>
        </section>
  )
}

export default Portfolio