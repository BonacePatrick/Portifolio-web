import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Home/Navbar'

const Blog = () => {
  return (
    <>
    <Navbar/>
    <section>
    <div className='text-center'>
          <h1 className='text-4xl lg:text-6xl font-extrabold text-[#555555]'>LATEST<span className='text-[#daa320]'> POSTS</span></h1>
          <h3 className='title-about my-8 font-normal text-[#9e9e9e] text-sm '>TIPS, INSIGHTS, AND BEST PRACTICES ABOUT WEB DESIGN AND DEVELOPPMENT</h3>
     </div>

     <div className="flex flex-col lg:flex-row justify-center items-center gap-10">

     <div className="card card-compact w-11/12 lg:w-2/5 bg-base-100 shadow-xl">
        <figure  className='hover:cursor-pointer'><img className='w-full hover:scale-105' src="./assets/blog-post-1.jpg" alt="developer-carrier"/></figure>
        <div className="card-body">
          <label htmlFor="my-modal-1" className="card-title hover:text-[#daa320] hover:cursor-pointer" data-modal-toggle="defaultModal">
            CREATE WEBSITE WITH HTML CSS JS
          </label>
          
          <p>
            You can create website using html css and javascript  with in short time and get hired in big tech company...
          </p>
          
        </div>
      </div>

      <div className="card card-compact w-11/12 lg:w-2/5 bg-base-100 shadow-xl">
        <figure className='hover:cursor-pointer'><img className='w-full hover:scale-105' src="./assets/blog-post-2.jpg" alt="developer-journey" /></figure>
        <div className="card-body">
          <label htmlFor="my-modal-2"  className="card-title hover:text-[#c49528] cursor-pointer">Master how to become a Professional web developer</label>
          <p>
            You can master how to become professional web developer with in short time spend...
          </p>
          
        </div>
      </div>

     </div>

    {/* ---blog post one --- */}

    <input type="checkbox" id="my-modal-1" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
    <Link to="/Post1">
        <img class="rounded-t-lg" src="./assets/blog-post-1.jpg" alt="post one" />
    </Link>
    <div class="p-5">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
         You can create website using html css and javascript  with in short time and get hired in big tech company...
        </p>
        <Link to="/Post1" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#daa320] rounded-lg hover:bg-[#daa220d3] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get look
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
    </div>
</div>

    <div className="modal-action">
      <label htmlFor="my-modal-1" className="border-none bg-slate-700 text-white py-2 px-6 rounded-xl cursor-pointer" title='close'>close</label>
    </div>
  </div>
</div>

 {/* ---blog post two --- */}

 <input type="checkbox" id="my-modal-2" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 mx-auto">
    <Link to="/Post2">
        <img class="rounded-t-lg" src="./assets/blog-post-2.jpg" alt="post one" />
    </Link>
    <div class="p-5">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        You can master how to become professional web developer with in short time spend...
        </p>
        <Link to="/Post2" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#daa320] rounded-lg hover:bg-[#daa220d3] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
  
  


    


    

      
    </section>





    </>
  )
}

export default Blog