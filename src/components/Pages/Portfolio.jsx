import React from 'react'
import { Link } from 'react-router-dom'
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
        <div className='bg-[#e6e7e1] w-2/5 lg:w-1/4 cursor-pointer project-one hover:scale-105'>
          <img className='w-full' src="./assets/shortly-web.png" alt="first-project" />
          <div className="middle">

          <label htmlFor="my-modal-1" className="bg-[#daa320] text-white text-[0.3rem] 
          lg:text-[1rem] py-2 lg:py-[1rem] px-4 lg:px-[2rem]"
          >Project one</label>

          </div>
        </div>
        <div className='bg-[#e6e7e1] w-2/5 lg:w-1/4 project-two hover:scale-105'>
          <img className='w-full' src="./assets/project-5.jpg" alt="first-project" />
          <div className="middle">

          <label htmlFor="my-modal-2" className="bg-[#daa320] text-white text-[0.3rem] 
          lg:text-[1rem] py-2 lg:py-[1rem] px-4 lg:px-[2rem]">
            Project two</label>

          </div>
        </div>
        <div className='bg-[#e6e7e1] w-2/5 lg:w-1/4 project-three hover:scale-105'>
          <img className='w-full' src="./assets/project-6.jpg" alt="first-project" />
          <div className="middle ">

          <label htmlFor="my-modal-3" className="bg-[#daa320] text-white text-[0.3rem]
           lg:text-[1rem] py-2 lg:py-[1rem] px-4 lg:px-[2rem]">
            Project three</label>

          </div>
        </div>
        <div className='bg-[#e6e7e1] w-2/5 lg:w-1/4 project-four hover:scale-105'>
          <img className='w-full' src="./assets/project-7.jpg" alt="first-project" />
          <div className="middle">

          <label htmlFor="my-modal-4" className="bg-[#daa320] text-white text-[0.3rem] 
          lg:text-[1rem] py-2 lg:py-[1rem] px-4 lg:px-[2rem]">
            Project four</label>

          </div>
        </div>
        <div className='bg-[#e6e7e1] w-2/5 lg:w-1/4 project-five hover:scale-105'>
          <img className='w-full' src="./assets/project-8.jpg" alt="first-project" />
          <div className="middle">

          <label htmlFor="my-modal-5" className="bg-[#daa320] text-white text-[0.3rem] 
          lg:text-[1rem] py-2 lg:py-[1rem] px-4 lg:px-[2rem]">
            Project five</label>
            
          </div>
        </div>
        <div className='bg-[#e6e7e1] w-2/5 lg:w-1/4 project-six hover:scale-105'>
          <img className='w-full' src="./assets/project-1.jpg" alt="first-project" />
          <div className="middle">

          <label htmlFor="my-modal-6" className="bg-[#daa320] text-white text-[0.3rem] 
          lg:text-[1rem] py-2 lg:py-[1rem] px-4 lg:px-[2rem]">
            Project six</label>

          </div>
        </div>
      </div>
    </section>

    {/* ---modals of projects-- */}
{/* ---project one--- */}
<input type="checkbox" id="my-modal-1" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
    <a href="shortly-jq402z8cp-bonacepatrick.vercel.app">
        <img class="rounded-t-lg" src="./assets/shortly-web.png" alt="project-one" />
    </a>
    <div class="p-5">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is web app intend to create shorty links of any urls
        </p>
        <a href="https://musixy.netlify.app/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#daa320] rounded-lg hover:bg-[#daa220d3] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get look
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
</div>

    <div className="modal-action">
      <label htmlFor="my-modal-1" className="border-none bg-slate-700 text-white py-2 px-6 rounded-xl cursor-pointer" title='close'>close</label>
    </div>
  </div>
</div>

{/* --project two --- */}

<input type="checkbox" id="my-modal-2" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
    <Link to="">
        <img class="rounded-t-lg" src="./assets/project-5.jpg" alt="project-two" />
    </Link>
    <div class="p-5">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is web app project intend to connect musicians around the world to collaborate each others.
        </p>
        <Link to="" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#daa320] rounded-lg hover:bg-[#daa220d3] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get look
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
    </div>
</div>

    <div className="modal-action">
      <label htmlFor="my-modal-2" className="border-none bg-slate-700 text-white py-2 px-6 rounded-xl cursor-pointer" title='close'>close</label>
    </div>
  </div>
</div>

{/* ---project three--- */}

<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
    <Link to="">
        <img class="rounded-t-lg" src="./assets/project-6.jpg" alt="project-one" />
    </Link>
    <div class="p-5">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is web app project intend to connect musicians around the world to collaborate each others.
        </p>
        <Link to="" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#daa320] rounded-lg hover:bg-[#daa220d3] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get look
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
    </div>
</div>

    <div className="modal-action">
      <label htmlFor="my-modal-3" className="border-none bg-slate-700 text-white py-2 px-6 rounded-xl cursor-pointer" title='close'>close</label>
    </div>
  </div>
</div>
{/* --project four --- */}

<input type="checkbox" id="my-modal-4" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
    <Link to="">
        <img class="rounded-t-lg" src="./assets/project-7.jpg" alt="project-one" />
    </Link>
    <div class="p-5">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is web app project intend to connect musicians around the world to collaborate each others.
        </p>
        <Link to="" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#daa320] rounded-lg hover:bg-[#daa220d3] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get look
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
    </div>
</div>

    <div className="modal-action">
      <label htmlFor="my-modal-4" className="border-none bg-slate-700 text-white py-2 px-6 rounded-xl cursor-pointer" title='close'>close</label>
    </div>
  </div>
</div>

{/* --project five --- */}

<input type="checkbox" id="my-modal-5" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
    <Link to="">
        <img class="rounded-t-lg" src="./assets/project-7.jpg" alt="project-one" />
    </Link>
    <div class="p-5">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is web app project intend to connect musicians around the world to collaborate each others.
        </p>
        <Link to="" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#daa320] rounded-lg hover:bg-[#daa220d3] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get look
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
    </div>
</div>

    <div className="modal-action">
      <label htmlFor="my-modal-5" className="border-none bg-slate-700 text-white py-2 px-6 rounded-xl cursor-pointer" title='close'>close</label>
    </div>
  </div>
</div>

{/* --project six -- */}

<input type="checkbox" id="my-modal-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
    <Link to="">
        <img class="rounded-t-lg" src="./assets/project-8.jpg" alt="project-one" />
    </Link>
    <div class="p-5">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is web app project intend to connect musicians around the world to collaborate each others.
        </p>
        <Link to="" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#daa320] rounded-lg hover:bg-[#daa220d3] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get look
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
    </div>
</div>

    <div className="modal-action">
      <label htmlFor="my-modal-6" className="border-none bg-slate-700 text-white py-2 px-6 rounded-xl cursor-pointer" title='close'>close</label>
    </div>
  </div>
</div>
    </>
  )
}

export default Portfolio