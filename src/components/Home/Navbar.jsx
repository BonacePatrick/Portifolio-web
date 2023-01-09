import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className="navbar bg-white">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-white bg-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow bg-[#333333] rounded-box w-14  lg:h-[14.8rem] relative ">
                <li className='ml-6 hover:text-[#2196F3]'><i className="fa-solid fa-house lg:-translate-x-4 lg:translate-y-8 hover:text-[#2196F3] text-[#2196F3] font-extrabold -translate-x-5 translate-y-3 text-xs lg:text-sm"></i><Link to='/' className='translate-x-5 -translate-y-4 lg:translate-y-0 text-xs lg:text-sm text-[#2196F3]'>HOME</Link></li>
                <li className='ml-6 hover:text-[#2196F3]'><i className="fa-solid fa-user lg:-translate-x-4 lg:translate-y-1 lg:my-3 hover:text-[#2196F3] text-[#2196F3] font-extrabold -translate-x-5 -translate-y-4 text-xs lg:text-sm"></i><Link to='/About' className='-translate-y-[2.8rem] lg:-translate-y-10 translate-x-5 text-xs lg:text-sm text-[#2196F3]'>ABOUT</Link></li>
                <li className='ml-6 hover:text-[#2196F3]'><i className="fa-solid fa-briefcase lg:-translate-x-4 lg:-translate-y-6 lg:mb-3 hover:text-[#2196F3] text-[#2196F3] font-extrabold -translate-x-5 -translate-y-4 text-xs lg:text-sm"></i><Link to='/Portfolio' className='-translate-y-[3.5rem] lg:-translate-y-16 translate-x-5 text-xs lg:text-sm text-[#2196F3]'>PORTFOLIO</Link></li>
                <li className='ml-6 hover:text-[#2196F3] absolute top-36 lg:top-48'><i className="fa-solid fa-comments lg:-translate-x-4 my-2 lg:-translate-y-[1rem] hover:text-[#2196F3] font-extrabold text-[#2196F3] -translate-y-4  -translate-x-5 text-xs lg:text-sm"></i><Link to='/Contact' className='translate-x-5 -translate-y-[3.5rem] text-xs lg:text-sm text-[#2196F3]'>CONTACT</Link></li>
            </ul>
            </div>
        </div>
   </div>
    </>
  )
}

export default Navbar