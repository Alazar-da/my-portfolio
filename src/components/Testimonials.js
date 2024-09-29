import React from 'react'

import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Testimonials() {

  return (
    <section className='flex justify-center py-5'>
        <div className='md:w-4/5 w-5/6 flex flex-col items-center gap-8'>
        <div className='flex flex-col gap-3 md:w-3/5 w-4/5'>
            <h2 className='text-gray-800 font-semibold lg:text-2xl text-xl text-center'>
            Testimonial
            </h2>
            <p className='text-center text-gray-400 text-sm'>There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration. but the majority have suffered alteration.</p>
        </div>
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className='w-full flex justify-center items-center'>
                    <div className='md:w-4/5 w-full flex flex-col gap-3'>
                        <p className='text-center text-gray-800 font-semibold text-sm'>“Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis felis turpis, nec semper odio convallis at. Curabitur imperdiet semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh. Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
                        Morbi ornare elit at libero suscipit porta.”</p>
                        <h3 className='text-center text-black font-semibold'>Esther Howard</h3>
                        <p className='text-center text-black text-sm'>Managing Director, ABC company</p>
                    </div>
                </div>
                <div className="absolute hidden left-5 right-5 top-1/2 md:flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
            </div>      
        </div>
    </section>
  )
}

export default Testimonials