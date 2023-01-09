import React from 'react'
import Navbar from '../Home/Navbar'

const Portfolio = () => {
  return (
    <>
    <Navbar/>
    <section>
    <div className='text-center'>
        <h1 className='text-4xl lg:text-6xl font-extrabold text-[#555555]'>MY <span className='text-[#2196F3]'>PORTFOLIO</span></h1>
        <h3 className='title-about my-8 font-normal text-[#9e9e9e] text-sm '>A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME.</h3>
   </div>
      <div className="flex flex-wrap items-center gap-5 justify-center">
        <div className='bg-[#e6e7e1] w-2/5 lg:w-1/4 cursor-pointer project-one hover:scale-105'>
          <img className='w-full' src="./assets/shortly-web.png" alt="first-project" />
          <div className="middle">

          <label htmlFor="my-modal-1" className="bg-[#2196F3] text-white text-[0.3rem] 
          lg:text-[1rem] py-2 lg:py-[1rem] px-4 lg:px-[2rem]"
          >Project one</label>

          </div>
        </div>
        <div className='bg-[#e6e7e1] w-2/5 lg:w-1/4 project-two hover:scale-105'>
          <img className='w-full' src="./assets/musixy-web.png" alt="first-project" />
          <div className="middle">

          <label htmlFor="my-modal-2" className="bg-[#2196F3] text-white text-[0.3rem] 
          lg:text-[1rem] py-2 lg:py-[1rem] px-4 lg:px-[2rem]">
            Project two</label>

          </div>
        </div>
        <div className='bg-[#e6e7e1] w-2/5 lg:w-1/4 project-three hover:scale-105'>
          <img className='w-full' src="./assets/Todo-list.png" alt="first-project" />
          <div className="middle ">

          <label htmlFor="my-modal-3" className="bg-[#2196F3] text-white text-[0.3rem]
           lg:text-[1rem] py-2 lg:py-[1rem] px-4 lg:px-[2rem]">
            Project three</label>

          </div>
        </div>
        <div className='bg-[#e6e7e1] w-2/5 lg:w-1/4 project-four hover:scale-105'>
          <img className='w-2/5 lg:1/2 mx-auto' src="./assets/Basic calculator.png" alt="first-project" />
          <div className="middle">

          <label htmlFor="my-modal-4" className="bg-[#2196F3] text-white text-[0.3rem] 
          lg:text-[1rem] py-2 lg:py-[1rem] px-4 lg:px-[2rem]">
            Project four</label>

          </div>
        </div>
        <div className='bg-[#e6e7e1] w-2/5 lg:w-1/4 project-five hover:scale-105'>
          <img className='w-full' src="./assets/Book-list-app.png" alt="first-project" />
          <div className="middle">

          <label htmlFor="my-modal-5" className="bg-[#2196F3] text-white text-[0.3rem] 
          lg:text-[1rem] py-2 lg:py-[1rem] px-4 lg:px-[2rem]">
            Project five</label>
            
          </div>
        </div>
        <div className='bg-[#e6e7e1] w-2/5 lg:w-1/4 project-six hover:scale-105'>
          <img className='w-5/12 mx-auto' src="./assets/Form-validator.png" alt="first-project" />
          <div className="middle">

          <label htmlFor="my-modal-6" className="bg-[#2196F3] text-white text-[0.3rem] 
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
    <a href="https://shortly-web-ten.vercel.app/">
        <img class="rounded-t-lg" src="./assets/shortly-web.png" alt="project-one" />
    </a>
    <div class="p-5">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is web app intend to create shorty links of any urls
        </p>
        <a href="https://shortly-web-ten.vercel.app/" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#2196F3] rounded-lg hover:bg-[#daa220d3] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
    <a href='https://musixy.netlify.app/'>
        <img class="rounded-t-lg" src="./assets/musixy-web.png" alt="project-two" />
    </a>
    <div class="p-5">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is web app project intend to connect musicians around the world to collaborate each others.
        </p>
        <a href='https://musixy.netlify.app/' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#2196F3] rounded-lg hover:bg-[#daa220d3] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get look
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
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
    <a href='https://task-list-app-eight.vercel.app/'>
        <img class="rounded-t-lg" src="./assets/Todo-list.png" alt="project-three" />
    </a>
    <div class="p-5">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is Todo List app intend to help javascript beginner to work on it
        </p>
        <a href='https://task-list-app-eight.vercel.app/' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#2196F3] rounded-lg hover:bg-[#daa220d3] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get look
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
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
    <a href='https://basic-calculator-six.vercel.app/'>
        <img class="rounded-t-lg w-2/5 lg:w-1/2 mx-auto" src="./assets/Basic calculator.png" alt="project-four" />
    </a>
    <div class="p-5">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is Basic calculator intend to help javascript beginner to work on it.
        </p>
        <a href='https://basic-calculator-six.vercel.app/' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#2196F3] rounded-lg hover:bg-[#daa220d3] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get look
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
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
    <a href='https://book-list-app-y.vercel.app/'>
        <img class="rounded-t-lg" src="./assets/Book-list-app.png" alt="project-five" />
    </a>
    <div class="p-5">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is app intend to help javascript beginner to learn OOP
        </p>
        <a href='https://book-list-app-y.vercel.app/' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#2196F3] rounded-lg hover:bg-[#daa220d3] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get look
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
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
    <a href='https://form-validates.vercel.app/'>
        <img class="rounded-t-lg w-5/12 mx-auto" src="./assets/Form-validator.png" alt="project-one" />
    </a>
    <div class="p-5">
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          This is basic form validator app intend to help in validations
        </p>
        <a href='https://form-validates.vercel.app/' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#2196F3] rounded-lg hover:bg-[#daa220d3] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Get look
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
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