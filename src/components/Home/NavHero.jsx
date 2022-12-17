import React from 'react'
import { Link } from 'react-router-dom'

const NavHero = () => {
  return (
    <>
    <div className="navbar bg-[#162124]">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-white bg-[#333333]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow bg-[#333333] rounded-box w-14 h-72 relative text-white">
                <li className='ml-6 hover:text-[#daa320]'><i class="fa-solid fa-house lg:-translate-x-4 lg:translate-y-8 hover:text-[#daa320]"></i><Link to='/' className='translate-x-5'>HOME</Link></li>
                <li className='ml-6 hover:text-[#daa320]'><i class="fa-solid fa-user lg:-translate-x-4 lg:translate-y-1 my-3 hover:text-[#daa320]"></i><Link to='/About' className='-translate-y-10 translate-x-5'>ABOUT</Link></li>
                <li className='ml-6 hover:text-[#daa320]'><i class="fa-solid fa-briefcase lg:-translate-x-4 lg:-translate-y-5 mb-3 hover:text-[#daa320]"></i><Link to='/Portfolio' className='-translate-y-16 translate-x-5'>PORTFOLIO</Link></li>
                <li className='ml-6 hover:text-[#daa320] absolute top-56'><i class="fa-solid fa-comments lg:-translate-x-4 my-2 lg:-translate-y-12 hover:text-[#daa320]"></i><Link to='/Contact' className='translate-x-5 -translate-y-[5.5rem]'>CONTACT</Link></li>
                <li className='ml-6 hover:text-[#daa320] absolute top-72'><i class="fa-solid fa-envelope lg:-translate-x-4 lg:-translate-y-16 hover:text-[#daa320]"></i><Link to='/Blog' className='translate-x-5 -translate-y-24'>BLOG</Link></li>
            </ul>
            </div>
        </div>
   </div>
   <section className="navbar-hero bg-[#162124] min-h-screen ">
    <div className=" flex  justify-between items-center">
     
      <div className='w-2/5 hidden lg:block'>
        <img className='w-full' src="./assets/profile.png" alt="" />
      </div>

      <div className="flex flex-col justify-center lg:mr-20 mt-32 lg:mt-0 ">
      <div className="greet text-white">
        <h1>HI THERE!</h1>
      </div>
        <h1 className='text-4xl py-3 text-white'>I'M <span className='text-[#daa320]'>WEB DEVELOPER</span></h1>
        <p className=' max-w-xl leading-loose pt-2 text-white'>
         I'm a Freelance UI/UX Designer and Developer based in Kigali, Rwanda.
         I strives to build immersive and beautiful web applications 
         through carefully crafted code and user-centric design.
        </p>
        <div className="flex flex-col lg:flex-row mt-8 space-y-4 lg:space-y-0 mx-auto lg:mx-0">
          <div>
          <Link to='/About' className='btn lg:mr-10 rounded-full bg-[#daa520] px-6 lg:px-10' ><i class="fa-solid fa-user text-white -translate-x-3"/>MORE ABOUT ME</Link>
          </div>
          <div>
            <Link to='/Portfolio' className='btn rounded-full bg-[#262e33] px-10 lg:px-10 text-[#da9228] font-normal border-[#da9228]'><i class="fa-solid fa-briefcase text-[#daa320] -translate-x-3"></i>PORTFOLIO</Link>
          </div>
          
        </div>
      </div>
      
    </div>
   </section>
    </>
  )
}

export default NavHero