import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Home/Navbar'
const About = () => {
  return (
    <>
    <Navbar/>
    <section className='about'>
      <div className='text-center'>
        <h1 className='text-4xl lg:text-6xl font-extrabold text-[#555555]'>ABOUT <span className='text-[#daa320]'>ME</span></h1>
        <h3 className='title-about my-8 font-normal text-[#9e9e9e] text-sm '>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO</h3>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-around lg:mt-20 space-y-10 lg:space-y-0 ">
        <div className='w-1/3 hidden lg:block'>
          <img className='w-full' src="./assets/Bonace.jpg" alt="profile" />
          <div className="line"></div>
          <div className="line-2"></div>
        </div>

      <ul className="max-w-md  ">
        <li className="pb-3 sm:pb-4">
          <div className="flex items-center space-x-4">
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                First Name
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-[#555555] dark:text-white">
              Ruboneza 
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Last Name
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-[#555555] dark:text-white pl-6">
              Bonace Patrick
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Birthdate
              </p>
            </div>
            <div className="inline-flex items-center text-base font-semibold text-[#555555] dark:text-white">
              26 August 2001
            </div>
          </div>
        </li>
        <li className="py-3 sm:py-4">
          <div className="flex items-center space-x-4">
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Nationality
              </p>
            
            </div>
            <div className="inline-flex items-center text-base font-semibold text-[#555555] dark:text-white">
            Rwandan
            </div>
          </div>
        </li>
        <li className="pt-3 pb-0 sm:pt-4">
          <div className="flex items-center space-x-4">
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Experience
              </p>
              
            </div>
            <div className="inline-flex items-center text-base font-semibold text-[#555555] dark:text-white">
              2 years
            </div>
          </div>
        </li>

        <li className="pt-3 pb-0 sm:pt-4">
          <div className="flex items-center space-x-4">
            
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                Address
              </p>
              
            </div>
            <div className="inline-flex items-center text-base font-semibold text-[#555555] dark:text-white">
              Kigali city
            </div>
          </div>
        </li>
      </ul>
      <hr className="my-8 h-px bg-gray-400 border  w-1/3 md:w-1/2 dark:bg-gray-400 mx-auto block lg:hidden"/>
<ul className="max-w-md  ">
  <li className="pb-3 sm:pb-4">
    <div className="flex items-center space-x-4">
      
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
        Freelance
        </p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-[#555555] dark:text-white">
        Available
      </div>
    </div>
  </li>
  <li className="py-3 sm:py-4">
    <div className="flex items-center space-x-4">
      
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
         Langages
        </p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-[#555555] dark:text-white">
       English
      </div>
    </div>
  </li>
  <li className="py-3 sm:py-4">
    <div className="flex items-center space-x-4">
      
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
         Phone
        </p>
      </div>
      <div className="inline-flex items-center text-base font-semibold text-[#555555] dark:text-white">
        +250789456385
      </div>
    </div>
  </li>
  <li className="py-3 sm:py-4">
    <div className="flex items-center space-x-4">
      
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
        Email
        </p>
       
      </div>
      <div className="inline-flex items-center text-base font-semibold text-[#555555] dark:text-white px-2 lg:translate-x-8">
      developerbonace@gmail.com
      </div>
    </div>
  </li>
  <li className="pt-3 pb-0 sm:pt-4">
    <div className="flex items-center space-x-4">
      
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
          instagram
        </p>
        
      </div>
      <div className="inline-flex items-center text-base font-semibold text-[#555555] dark:text-white">
        bonace.patrick
      </div>
    </div>
  </li>

  <li className="pt-3 pb-0 sm:pt-4">
    <div className="flex items-center space-x-4">
      
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
          linkedin
        </p>
        
      </div>
      <div className="inline-flex items-center text-base font-semibold text-[#555555] dark:text-white">
        bonace-patrick
      </div>
    </div>
  </li>
</ul>
      </div>
      <div className="text-center lg:ml-56 lg:-translate-y-20 mt-5 lg:mt-10">
       <Link to='/About' className='btn mr-10 rounded-full bg-[#daa520] px-10 border-none' ><i className="fa-solid fa-download text-white -translate-x-3"></i>DOWNLOAD MY CV</Link>
      </div>
    </section>
    </>
  )
}

export default About