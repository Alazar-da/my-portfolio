import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function Nav() {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
    const collapse=()=>{
        document.querySelector('#menu').classList.toggle('hidden');
        /* document.querySelector('#menu2').classList.toggle('hidden'); */
       }
       useEffect(() => {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
      }, [theme]);
    
      const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
      };
  return (
    <header className='flex justify-center py-3 bg-white'>

        <nav className="md:flex md:justify-around lg:w-4/5 w-5/6">
        <div className="flex items-center justify-between">
        
        <h1 className="flex gap-2 justify-start items-center">
            <span className='text-[22px] w-[35px] h-[35px] rounded-full bg-primary-700 flex justify-center items-center text-white pb-1'>A</span>
            <span className="text-2xl font-semibold">Alazar</span>
        </h1>

        <button className="text-blac md:hidden" onClick={collapse}>
        <FontAwesomeIcon icon={faBars} />
        </button>
        </div>

        <div className='hidden md:flex mt-2 md:mt-0' id='menu'>
            <ul className="flex md:flex-row flex-col md:gap-10 gap-2 md:items-center text-sm font-semibold">
                <li className="">
                <a className="hover:text-slate-700" href="#home">
                    Home
                </a>
                </li>
                <li className="">
                <a className="hover:text-slate-700" href="#about">
                    About
                </a>
                </li>
                <li className="">
                <a className="hover:text-slate-700" href="#process">
                    Process
                </a>
                </li>
                <li className="">
                <a className="hover:text-slate-700" href="#portfolio">
                    Portfolio
                </a>
                </li>
                <li className="">
                <a className="hover:text-slate-700" href="#service">
                    Services
                </a>
                </li>
                
            
                <li className="">
                <a className="bg-primary-700 hover:bg-primary-500 px-4 py-2 text-white rounded-md font-semibold" href="#contact">
                Contact</a>
                </li>
                <li className="">
                <label className="flex items-center gap-2 cursor-pointer">
  <input
    type="checkbox"
    className="toggle  [--tglbg:#f8d072] dark:[--tglbg:#2569d9]"
    checked={theme === "dark"}
    onChange={toggleTheme}
  />
<span className="text-gray-700 text-xs">Dark Mode</span>
</label>

      </li>
            </ul>  
        </div>
        </nav>
    </header>
  )
}

export default Nav