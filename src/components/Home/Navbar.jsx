import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-white">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-white bg-[#333333]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow bg-[#333333] rounded-box w-14 h- lg:h-72 relative ">
                <li className='ml-6 hover:text-[#daa320]'><i className="fa-solid fa-house lg:-translate-x-4 lg:translate-y-8 hover:text-[#daa320] text-[#daa320] -translate-x-5 translate-y-3 text-xs lg:text-sm"></i><Link to='/' className='translate-x-5 -translate-y-4 lg:translate-y-0 text-xs lg:text-sm'>HOME</Link></li>
                <li className='ml-6 hover:text-[#daa320]'><i className="fa-solid fa-user lg:-translate-x-4 lg:translate-y-1 lg:my-3 hover:text-[#daa320] text-[#daa320] -translate-x-5 -translate-y-4 text-xs lg:text-sm"></i><Link to='/About' className='-translate-y-[2.8rem] lg:-translate-y-10 translate-x-5 text-xs lg:text-sm'>ABOUT</Link></li>
                <li className='ml-6 hover:text-[#daa320]'><i className="fa-solid fa-briefcase lg:-translate-x-4 lg:-translate-y-5 lg:mb-3 hover:text-[#daa320] text-[#daa320] -translate-x-5 -translate-y-12 text-xs lg:text-sm"></i><Link to='/Portfolio' className='-translate-y-[4.8rem] lg:-translate-y-16 translate-x-5 text-xs lg:text-sm'>PORTFOLIO</Link></li>
                <li className='ml-6 hover:text-[#daa320] absolute top-36 lg:top-56'><i className="fa-solid fa-comments lg:-translate-x-4 my-2 lg:-translate-y-12 hover:text-[#daa320] text-[#daa320] -translate-y-12  -translate-x-5 text-xs lg:text-sm"></i><Link to='/Contact' className='translate-x-5 -translate-y-[5.5rem] text-xs lg:text-sm'>CONTACT</Link></li>
                <li className='ml-6 hover:text-[#daa320] absolute top-[8.5rem] lg:top-72'><i className="fa-solid fa-envelope lg:-translate-x-4 lg:-translate-y-16 hover:text-[#daa320] text-[#daa320] -translate-x-5 text-xs lg:text-sm"></i><Link to='/Blog' className='lg:translate-x-5 lg:-translate-y-24 -translate-y-6 translate-x-5 text-xs lg:text-sm'>BLOG</Link></li>
            </ul>
            </div>
        </div>
   </div>
    </>
  )
}

export default Navbar