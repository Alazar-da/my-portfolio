import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Nav() {
    const collapse=()=>{
        document.querySelector('#menu').classList.toggle('hidden');
        /* document.querySelector('#menu2').classList.toggle('hidden'); */
       }
  return (
    <header className='flex justify-center py-3'>

        <nav className="md:flex md:justify-around md:w-4/5 w-5/6">
        <div className="flex items-center justify-between">
        
        <h1 className="flex gap-2 justify-center items-center">
            <span className='text-[22px] w-[35px] h-[35px] rounded-full bg-cyan-500 flex justify-center items-center text-white pb-1'>A</span>
            <span className="text-2xl font-semibold text-[#0F172A]">Alazar</span>
        </h1>

        <button className="text-blac md:hidden" onClick={collapse}>
        <FontAwesomeIcon icon={faBars} />
        </button>
        </div>

        <div className='hidden md:flex mt-2 md:mt-0' id='menu'>
            <ul className="flex md:flex-row flex-col md:gap-10 gap-2 md:items-center text-[#333333] text-sm font-semibold">
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
                <button className="bg-cyan-500 hover:bg-cyan-950 w-[90px] h-[42px] text-white rounded-md font-semibold" href="#contact">
                Contact</button>
                </li>
            </ul>  
        </div>
        </nav>
    </header>
  )
}

export default Nav