import React from 'react'
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
          <label htmlFor="my-modal-6" className="card-title hover:text-[#daa320] hover:cursor-pointer" data-modal-toggle="defaultModal">CREATE A WORDPRESS THEME FROM SCRATCH</label>
          
          <p>
            Oki is a leading web design agency with an award-winning design 
            team that creates innovative...
          </p>
          
        </div>
      </div>

      <div className="card card-compact w-11/12 lg:w-2/5 bg-base-100 shadow-xl">
        <figure className='hover:cursor-pointer'><img className='w-full hover:scale-105' src="./assets/blog-post-2.jpg" alt="developer-journey" /></figure>
        <div className="card-body">
          <h2 className="card-title">EFFECTIVE MARKETING STRATEGY TIPS</h2>
          <p>
            Oki is a leading web design agency with an award-winning design 
            team that creates innovative...
          </p>
          
        </div>
      </div>

     </div>

<div>
  {/* Modal toggle */}
  
  {/* Main modal */}
  <div id="defaultModal" tabIndex={-1} aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
    <div className="relative w-full h-full max-w-2xl md:h-auto">
      {/* Modal content */}
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        {/* Modal header */}
        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Terms of Service
          </h3>
          <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
            <span className="sr-only">Close modal</span>
          </button>
        </div>
        {/* Modal body */}
        <div className="p-6 space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
          </p>
        </div>
        {/* Modal footer */}
        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
          <button data-modal-toggle="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
          <button data-modal-toggle="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
        </div>
      </div>
    </div>
  </div>
</div>


    


    

      
    </section>





    </>
  )
}

export default Blog