import React from 'react';
import Navbar from '../Home/Navbar'
import {useForm} from 'react-hook-form'

const Contact = () => {

  

  const {register, formState:{errors}, handleSubmit} = useForm();
  const onSubmit = (data) => console.log(data)
  return (
    <>
    <Navbar/>
    <section>
      <div className='text-center'>
          <h1 className='text-4xl lg:text-6xl font-extrabold text-[#555555]'>GET <span className='text-[#daa320]'>IN TOUCH</span></h1>
          <h3 className='title-about my-8 font-normal text-[#9e9e9e] text-sm '>I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK OR PARTNERSHIPS.</h3>
     </div>
     
     {/* <!-- Container for demo purpose --> */}
<div className="container my-24 px-6 mx-auto">

  {/* <!-- Section: Design Block --> */}
  <section className="mb-32 text-gray-800">
  <div className="flex flex-wrap">
    <div className="grow-0 shrink-0 basis-auto mb-6 md:mb-0 w-full md:w-6/12 px-3 lg:px-6">
      
      <p className="text-gray-500 mb-2">Phone</p>
      <p className="text-gray-500 mb-2"><i className="fa-brands fa-whatsapp text-[#daa520] mr-3"></i>+ 250789456385</p>

      <p className="text-gray-500 mb-2">Email</p>
      <p className="text-gray-500 mb-2"><i className="fa-regular fa-envelope text-[#daa520] mr-3"></i>patrickruboneza@gmail.com</p>

      <p className="text-gray-500 mb-2">Instagram</p>
      <p className="text-gray-500 mb-2"><i className="fa-brands fa-instagram text-[#daa520] mr-3"></i> bonace.it</p>

      <p className="text-gray-500 mb-2">Linkedin</p>
      <p className="text-gray-500 mb-2"><i className="fa-brands fa-linkedin-in text-[#daa520] mr-3"></i>bonace-patrick</p>


      <p className="text-gray-500 mt-10">Social profiles</p>
      <div className="flex">
      <i className="fa-brands fa-facebook text-[#daa520] text-2xl mt-3 mr-3"></i>
      <i className="fa-brands fa-twitter text-[#daa520] text-2xl mt-3 mr-3"></i>
      <i className="fa-brands fa-instagram text-[#daa520] text-2xl mt-3 mr-3"></i>
      <i className="fa-brands fa-linkedin-in text-[#daa520] text-2xl mt-3"></i>
      </div>
     
   
    </div>
    
    <div className="grow-[4] shrink-0 basis-auto mb-12 md:mb-0 w-full md:w-6/12 px-3 lg:px-6 lg:-translate-x-40">
      
      <p className='leading-loose font-light max-w-4xl mb-3'>
      If you have any suggestion, project or even you want to say Hello..
       please fill out the form below and I will reply you shortly.
      </p>

      <form  onSubmit={handleSubmit(onSubmit)}>
       <div className="flex flex-col lg:flex-row lg:mt-5">

       <div className="form-group mb-6 lg:mr-5 relative">
       <i className="fa-solid fa-user text-[#cccccc] absolute top-4 left-5 "></i>
        <input type="text" className="form-control block
        w-full
        px-14
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-full
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder= "YOUR NAME" 
        {...register("name",{required:true})} name='user_name'
        />
        <error className='text-red-400'>
          {errors.name?.type === "required" && "Name is required"}
        </error>
        </div>

         <div className="form-group mb-6 relative">
         <i className="fa-regular fa-envelope text-[#cccccc] absolute top-4 left-5"></i>
          <input type="text" className="form-control block
        w-full
        px-14
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-full
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7" placeholder="YOUR EMAIL" 
        {...register("email",{required:true, pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i})}
        name='user_email'
        />
        <error className='text-red-400'>
          {errors.email?.type === "required" && "Email is required"}
          {errors.email?.type === "pattern" && "Entered email is in wrong format"}
        </error>
        </div>

       </div>
       
        <div className="form-group mb-6 relative">
        <i className="fa-solid fa-comments text-[#cccccc] absolute top-8 left-5 "></i>
          <textarea className="
        form-control
        block
        w-full
        px-14
        py-7
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded-3xl
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      " id="exampleFormControlTextarea13" rows={3} placeholder="YOUR MESSAGE" defaultValue={""} 
      {...register("message",{required:true})}
      name='message'
      />
      <error className='text-red-400'>
          {errors.message?.type === "required" && "Message is required"}
        </error>
        </div>
      <div className="mx-auto">

        <button type="submit" className="
      btn
      border-none
      px-9
      py-4
      bg-[#daa520]
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded-full
      shadow-md
      hover:bg-[#daa520]hover:shadow-lg
      focus:bg-[#daa520] focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-[#daa520] active:shadow-lg
      transition
      duration-150
      ease-in-out"><i className="fa-solid fa-paper-plane text-lg mr-3"></i> SEND MESSAGE</button>
       </div>
      </form>
    </div>
  </div>
</section>

  {/* <!-- Section: Design Block --> */}

</div>
{/* <!-- Container for demo purpose --> */}

    </section>
      
    </>
  )
}

export default Contact