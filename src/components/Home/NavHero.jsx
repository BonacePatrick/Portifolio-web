import React from 'react'
import { Link } from 'react-router-dom'
import Typed from 'react-typed'

const NavHero = () => {
  return (
    <>
     <div className="navbar bg-[#162124]">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-white bg-[#162124]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow bg-[#333333] rounded-box w-14  lg:h-60 relative text-white">
                <li className='ml-6 hover:text-[#daa320]'><i className="fa-solid fa-house lg:-translate-x-4 lg:translate-y-4 hover:text-[#daa320]  font-extrabold -translate-x-5 translate-y-3  text-xs lg:text-sm"></i><Link to='/' className='translate-x-5 -translate-y-4 text-xs lg:text-sm '>HOME</Link></li>
                <li className='ml-6 hover:text-[#daa320]'><i className="fa-solid fa-user lg:-translate-x-4 lg:-translate-y-5 lg:my-3 hover:text-[#daa320]  font-extrabold -translate-x-5 -translate-y-4 text-xs lg:text-sm"></i><Link to='/About' className='-translate-y-[3rem] lg:-translate-y-16 translate-x-5 text-xs lg:text-sm'>ABOUT</Link></li>
                <li className='ml-6 hover:text-[#daa320]'><i className="fa-solid fa-briefcase lg:-translate-x-4 lg:-translate-y-[3.3rem] lg:mb-3 hover:text-[#daa320] font-extrabold -translate-x-5 -translate-y-12 text-xs lg:text-sm"></i><Link to='/Portfolio' className='-translate-y-[5rem] lg:-translate-y-24 translate-x-5 text-xs lg:text-sm'>PORTFOLIO</Link></li>
                <li className='ml-6 hover:text-[#daa320] absolute top-36 lg:top-48'><i className="fa-solid fa-comments lg:-translate-x-4 my-2 lg:-translate-y-12 hover:text-[#daa320] font-extrabold  -translate-y-12  -translate-x-5 text-xs lg:text-sm"></i><Link to='/Contact' className='translate-x-5 -translate-y-[5.5rem] text-xs lg:text-sm'>CONTACT</Link></li>
                <li className='ml-6 hover:text-[#daa320] absolute top-[7.5rem] lg:top-64'><i className="fa-solid fa-envelope lg:-translate-x-4 translate-y-5 lg:-translate-y-16 hover:text-[#daa320] font-extrabold  -translate-x-5 text-xs lg:text-sm"></i><Link to='/Blog' className='lg:translate-x-5 lg:-translate-y-24 -translate-y-2 translate-x-5 text-xs lg:text-sm'>BLOG</Link></li>
            </ul>
            </div>
        </div>
   </div>
   <section className="navbar-hero bg-[#162124] min-h-screen ">
    <div className=" flex  justify-between items-center">
     
      <div className='w-2/5 hidden lg:block'>
        <img className='w-full' src="./assets/profile.png" alt="" />
      </div>

      <div className="flex flex-col justify-center lg:mr-20 mt-32 lg:mt-0 ml-5 lg:ml-0 ">
      <div className="greet text-white">
        <h1>HI THERE!</h1>
      </div>
        <h1 className='text-3xl lg:text-4xl py-3 text-white'>I'M <span className='text-[#daa320]'>
          <Typed
          strings={[
            "Web developer",
            "Software developer",
            "UI&UX Designer",
          ]}
          typeSpeed={150}
          backSpeed={150}
          loop
          />
          </span>
      </h1>
        <p className=' max-w-xl leading-loose pt-2 text-white'>
         I'm a Freelance UI/UX Designer and Developer based in Kigali, Rwanda.
         I strives to build immersive and beautiful web applications 
         through carefully crafted code and user-centric design.
        </p>
        <div className="flex flex-col lg:flex-row mt-8 lg:mt-8 space-y-6 lg:space-y-0 mx-auto lg:mx-0">
          <div>
          <Link to='/About' className='btn lg:mr-10 rounded-full bg-[#daa520] px-6 lg:px-10' ><i className="fa-solid fa-user text-white -translate-x-3"/>MORE ABOUT ME</Link>
          </div>
          <div>
            <Link to='/Portfolio' className='btn rounded-full bg-[#262e33] px-10 lg:px-10 text-[#da9228] font-normal border-[#da9228]'><i className="fa-solid fa-briefcase text-[#daa320] -translate-x-3"></i>PORTFOLIO</Link>
          </div>
          
        </div>
      </div>
      
    </div>
   </section>
    </>
  )
}

export default NavHero