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
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow bg-[#333333] rounded-box w-14 h-72 relative text-black">
                <li className='ml-6 hover:text-[#daa320]'><i class="fa-solid fa-house lg:-translate-x-4 lg:translate-y-8 hover:text-[#daa320] text-white"></i><Link to='/' className='translate-x-5'>HOME</Link></li>
                <li className='ml-6 hover:text-[#daa320]'><i class="fa-solid fa-user lg:-translate-x-4 lg:translate-y-1 my-3 hover:text-[#daa320] text-white"></i><Link to='/About' className='-translate-y-10 translate-x-5'>ABOUT</Link></li>
                <li className='ml-6 hover:text-[#daa320]'><i class="fa-solid fa-briefcase lg:-translate-x-4 lg:-translate-y-5 mb-3 hover:text-[#daa320] text-white"></i><Link to='/Portfolio' className='-translate-y-16 translate-x-5'>PORTFOLIO</Link></li>
                <li className='ml-6 hover:text-[#daa320] absolute top-56'><i class="fa-solid fa-comments lg:-translate-x-4 my-2 lg:-translate-y-12 hover:text-[#daa320] text-white"></i><Link to='/Contact' className='translate-x-5 -translate-y-[5.5rem]'>CONTACT</Link></li>
                <li className='ml-6 hover:text-[#daa320] absolute top-72'><i class="fa-solid fa-envelope lg:-translate-x-4 lg:-translate-y-16 hover:text-[#daa320] text-white"></i><Link to='/Blog' className='translate-x-5 -translate-y-24'>BLOG</Link></li>
            </ul>
            </div>
        </div>
   </div>
    </>
  )
}

export default Navbar