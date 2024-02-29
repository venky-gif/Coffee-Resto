import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const primaryButton = () => {
  return (
    <>
    <div
     data-aos="fade-up"
     data-aos-delay="500"
    className='flex items-center group'>
              <button 
               
              className='bg-primary h-[40px] text-white px-3 py-2'>Choose Your Meal Plan</button>
              <FaArrowRight 
              
              className='inline-block group-hover:translate-x-2 duration-200 p-2 text-base h-[40px] w-[40px] bg-primaryDark text-white'/>
            </div>
    </>
  )
}

export default primaryButton