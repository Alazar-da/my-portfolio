import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faGlobe,faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { faInstagram,faWhatsapp,faLinkedinIn,faGithub,faTelegram } from '@fortawesome/free-brands-svg-icons'
import send from '../img/Vector.png'
function Contact() {
    const descriptions={
        icon:[faGlobe,faEnvelope,faPhone],
        header:[
            "Address:",
            "My Email:",
            "Call Me Now:"],
        subHeader:["Akaki Kality",
            "Alazar.damena01@gmail.com",
            "+251922313333"
        ],
    }
  return (
    <section className='flex justify-center items-center py-3 bg-slate-50'>
        
    <div className='flex md:flex-row flex-col gap-5 lg:w-4/5 md:w-5/6 w-[90%] px-5 py-12 items-center bg-white shadow-lg rounded-lg'>
        <div className='md:w-1/2 w-full flex items-center'>
            <div className='flex flex-col'>
                <div className='flex flex-col justify-start gap-3'>
                    <h2 className='text-gray-900 font-semibold lg:text-3xl md:text-2xl text-xl'>Let's discuss your Project</h2>
                    <p className='text-gray-400 text-xs md:w-4/5 w-5/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,</p>
                </div>

                <div className='flex flex-col gap-5 my-3'>
                    {descriptions.header.map((header, index) => (
                            <div className='flex justify-center lg:w-4/5 sm:w-5/6 w-full px-2 lg:px-0 hover:bg-white bg-transparent hover:rounded-md hover:shadow-xl hover:border'>
                                <div className='flex flex-row gap-4 lg:w-4/5 w-full py-3'>
                                    <div className='text-cyan-500 bg-[#EDD8FF] rounded-md hover:bg-cyan-500 hover:text-white py-0.5 px-2 flex justify-center items-center'>
                                    <FontAwesomeIcon icon={descriptions.icon[index]} size='lg'/>
                                    </div>
                                    <div key={index} className='flex flex-col gap-1'>
                                            <h2 className='text-gray-700 text-xs'>{header}</h2>
                                            <p className='text-gray-500 text-sm font-semibold'>{descriptions.subHeader[index]}</p>
                                    </div>
                                </div>
                            </div>        
                            )
                            )
                        }
                </div>

                <div className='flex justify-start gap-5 w-4/5 mt-5'>
                    <button><FontAwesomeIcon icon={faInstagram} size='lg' className='text-cyan-500 hover:text-white hover:bg-cyan-500 p-1.5 rounded-md'/></button>
                    <button><FontAwesomeIcon icon={faWhatsapp} size='lg' className='text-cyan-500 hover:text-white hover:bg-cyan-500 p-1.5 rounded-md'/></button>
                    <button><FontAwesomeIcon icon={faLinkedinIn} size='lg' className='text-cyan-500 hover:text-white hover:bg-cyan-500 p-1.5 rounded-md'/></button>
                    <button><FontAwesomeIcon icon={faGithub} size='lg' className='text-cyan-500 hover:text-white hover:bg-cyan-500 p-1.5 rounded-md'/></button>
                    <button><FontAwesomeIcon icon={faTelegram} size='lg' className='text-cyan-500 hover:text-white hover:bg-cyan-500 p-1.5 rounded-md'/></button>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-12 md:w-1/2 w-full mt-5 md:mt-0'>
            <div className='flex flex-col justify-start gap-3'>
                <div>
                    <p className='text-gray-400 text-xs md:w-4/5 w-5/6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,</p>
                </div>

                <form className='py-5 flex flex-col gap-5'>
                    <div className='relative'>
                        <input id="Name" type="text" className="peer h-10 w-full border-b-2 border-gray-100 text-gray-900 placeholder-transparent focus:outline-none focus:border-cyan-500" placeholder="Your Name" />
                        <label for="Name" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                            Name*
                        </label>
                    </div>

                    <div className='relative'>
                        <input id="Email" type="email" className="peer h-10 w-full border-b-2 border-gray-100 text-gray-900 placeholder-transparent focus:outline-none focus:border-cyan-500" placeholder="Your Name" />
                        <label for="Email" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                            Email*
                        </label>
                    </div>

                    <div className='relative'>
                        <input id="Location" type="text" className="peer h-10 w-full border-b-2 border-gray-100 text-gray-900 placeholder-transparent focus:outline-none focus:border-cyan-500" placeholder="Your Name" />
                        <label for="Location" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                            Location
                        </label>
                    </div>

                    <div className='flex flex-row gap-2'>
                    <div className='relative w-1/3'>
                        <input id=" Budget" type="number" className="peer h-10 w-full border-b-2 border-gray-100 text-gray-900 placeholder-transparent focus:outline-none focus:border-cyan-500" placeholder="Your Name" />
                        <label for="Budget" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                            Budget*
                        </label>
                    </div>
                    
                    <div className='relative w-2/3'>
                        <input id="Subject" type="text" className="peer h-10 w-full border-b-2 border-gray-100 text-gray-900 placeholder-transparent focus:outline-none focus:border-cyan-500" placeholder="Your Name" />
                        <label for="Subject" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                            Subject*
                        </label>
                        </div>
                    </div>

                    <div className='relative'>
                        <textarea id="Message" className="peer h-10 w-full border-b-2 border-gray-100 text-gray-900 placeholder-transparent focus:outline-none focus:border-cyan-500" placeholder="Your Name" />
                        <label for="Message" className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                            Message*
                        </label>
                    </div>

                    <div>
                        <button type='submit' className='flex gap-2 text-white px-3 py-1.5 bg-cyan-500 rounded-md items-center hover:bg-cyan-700'>Submit {/* <FontAwesomeIcon icon={faLocationArrow} size='' className='pt-1.5'/> */}<img src={send} alt='send' className='h-[16px]'/></button>
                    </div>
                </form>
                
            </div>
        </div>
    </div>

</section>
  )
}

export default Contact