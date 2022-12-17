import React from 'react'
import Navbar from '../Home/Navbar'

const Portfolio = () => {
  return (
    <>
    <Navbar/>
    <section>
    <div className='text-center'>
        <h1 className='text-4xl lg:text-6xl font-extrabold text-[#555555]'>MY <span className='text-[#daa320]'>PORTFOLIO</span></h1>
        <h3 className='title-about my-8 font-normal text-[#9e9e9e] text-sm '>A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME.</h3>
   </div>
      <div className="flex flex-wrap items-center gap-5 justify-center">
        <div className='bg-[#e6e7e1] w-2/5 lg:w-1/4'>
          <img className='w-full' src="./assets/project-1.jpg" alt="first-project" />
        </div>
        <div className='bg-[#e6e7e1] w-2/5 lg:w-1/4'>
          <img className='w-full' src="./assets/project-5.jpg" alt="first-project" />
        </div>
        <div className='bg-[#e6e7e1] w-2/5 lg:w-1/4'>
          <img className='w-full' src="./assets/project-6.jpg" alt="first-project" />
        </div>
        <div className='bg-[#e6e7e1] w-2/5 lg:w-1/4'>
          <img className='w-full' src="./assets/project-7.jpg" alt="first-project" />
        </div>
        <div className='bg-[#e6e7e1] w-2/5 lg:w-1/4'>
          <img className='w-full' src="./assets/project-8.jpg" alt="first-project" />
        </div>
        <div className='bg-[#e6e7e1] w-2/5 lg:w-1/4'>
          <img className='w-full' src="./assets/project-1.jpg" alt="first-project" />
        </div>
      </div>
    </section>
    </>
  )
}

export default Portfolio