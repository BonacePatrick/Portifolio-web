import React from 'react'
import { Link } from 'react-router-dom'
import Typed from 'react-typed'

const NavHero = () => {
  return (
    <>
     <div className="navbar bg-slate-50">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle text-black bg-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3  shadow bg-[#333333] rounded-box w-14  lg:h-[14.7rem] relative  text-black">
                <li className='ml-6 hover:text-[#2196F3]'><i className="fa-solid fa-house lg:-translate-x-4 lg:translate-y-4 text-slate-50  hover:text-[#2196F3]  font-extrabold -translate-x-5 translate-y-3  text-xs lg:text-sm"></i><Link to='/' className='translate-x-5 -translate-y-4 text-xs lg:text-sm '>HOME</Link></li>
                <li className='ml-6 hover:text-[#2196F3]'><i className="fa-solid fa-user lg:-translate-x-4 lg:-translate-y-2 text-slate-50  lg:my-3 hover:text-[#2196F3]  font-extrabold -translate-x-5 -translate-y-3 text-xs lg:text-sm"></i><Link to='/About' className='-translate-y-[2.5rem] lg:-translate-y-12 translate-x-5 text-xs lg:text-sm'>ABOUT</Link></li>
                <li className='ml-6 hover:text-[#2196F3]'><i className="fa-solid fa-briefcase lg:-translate-x-4 lg:-translate-y-[2rem] text-slate-50  lg:mb-3 hover:text-[#2196F3] font-extrabold -translate-x-5 -translate-y-7 text-xs lg:text-sm"></i><Link to='/Portfolio' className='-translate-y-[3.7rem] lg:-translate-y-[4.8rem] translate-x-5 text-xs lg:text-sm'>PORTFOLIO</Link></li>
                <li className='ml-6 hover:text-[#2196F3] absolute top-36 lg:top-48'><i className="fa-solid fa-comments lg:-translate-x-4 text-slate-50  my-2 lg:-translate-y-4 hover:text-[#2196F3] font-extrabold  -translate-y-4  -translate-x-5 text-xs lg:text-sm"></i><Link to='/Contact' className='translate-x-5 -translate-y-[3.5rem] text-xs lg:text-sm'>CONTACT</Link></li>
            </ul>
            </div>
        </div>
   </div>
   <section className="navbar-hero bg-slate-50 min-h-screen ">
    <div className=" flex flex-col lg:flex-row justify-between items-center">
     
      <div className='w-2/3 rounded-full first-letter:  lg:rounded-none flex flex-col lg:flex-row lg:w-2/5'>
        <img className='w-full border border-[#2196F3] animate-pulse rounded-full lg:border-none lg:rounded-none' src="./assets/profile.png" alt="" />
      </div>

      <div className="flex flex-col justify-center lg:mr-20  lg:mt-0 ml-5 lg:ml-0 ">
      <div className="greet text-black">
        <h1>HI THERE!</h1>
      </div>
        <h1 className='text-3xl lg:text-4xl py-3 text-black'>I'M <span className='text-[#2196F3]'>
          <Typed
          strings={[
            "Web developer",
            "React js developer",
            "Tailwind css developer",
          ]}
          typeSpeed={150}
          backSpeed={150}
          loop
          />
          </span>
      </h1>
        <p className=' max-w-xl leading-loose pt-2 text-black'>
         I'm a Creative Freelance Front end web  developer based in Kigali, Rwanda.
         I strives to build immersive and beautiful web applications 
         through carefully crafted code and user-centric design.
        </p>
        <div className="flex flex-col lg:flex-row mt-8 lg:mt-8 space-y-6 lg:space-y-0 mx-auto lg:mx-0">
          <div>
          <Link to='/About' className='btn lg:mr-10 rounded-full bg-[#2196F3] px-6 lg:px-10 border-none' ><i className="fa-solid fa-user text-slate-50 -translate-x-3"/>MORE ABOUT ME</Link>
          </div>
          <div>
            <Link to='/Portfolio' className='btn rounded-full bg-slate-50 px-10 lg:px-10 text-[#2196F3] font-normal border-[#2196F3]'><i className="fa-solid fa-briefcase text-[#2196F3] -translate-x-3"></i>PORTFOLIO</Link>
          </div>
          
        </div>
      </div>
      
    </div>
   </section>
    </>
  )
}

export default NavHero