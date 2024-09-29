import React from 'react'

function Fotter() {
  return (
    <section className='bg-gray-800 w-full flex justify-center md:items-end py-5 min-h-[90px]'>
        <div className='flex justify-between flex-col md:flex-row md:w-4/5 w-5/6 gap-5 md:gap-0'>
        <div>
            <h1 className="flex gap-2 justify-center items-center">
                <span className='text-[22px] w-[35px] h-[35px] rounded-full bg-cyan-500 flex justify-center items-center text-white pb-1'>A</span>
                <span className="text-2xl font-semibold text-white">Alazar</span>
            </h1>
        </div>
        <div className='flex justify-center'>
        <ul className="flex flex-row md:gap-5 gap-3 items-center text-gray-50 text-sm font-semibold">
                <li className="">
                <a className="" href="#home">
                    Home
                </a>
                </li>
                <li className="">
                <a className="" href="#about">
                    About
                </a>
                </li>
                <li className="">
                <a  className="" href="#service">
                    Services
                </a>
                </li>
                <li className="">
                <a  className="" href="#service">
                    Portfolio
                </a>
                </li>
            
                <li className="">
                <button href="#contact">
                Contact</button>
                </li>
            </ul>
        </div>

        <div className='flex justify-center items-center'>
            <span className='text-gray-50 text-sm font-semibold text-center'>Copyright © 2022 Alazar.</span>
        </div>
           
            
        </div>
    </section>
  )
}

export default Fotter