import React from 'react';
import coffeWh from "../assets/coffee-white.png"
import coffee2 from "../assets/coffee2.png"
import croissiant from "../assets/croissant.png"
import cupCake from "../assets/cupCake.png"
import cake from "../assets/cake.png"
import PrimaryButton from "./primaryButton"


const Banner = () => {
  return (
    <>
    <div className='container py-14 relative'>
      <div className='relative z-20'>
        <h1 
        data-aos="fade-up"
        data-aos-delay="300"
        className='py-8 tracking-wider text-2xl font-semibold text-dark text-center'>
           Taste the Healthy Difference
        </h1>
        <div
         
        className='space-y-10'>
          <div 
          data-aos="fade-up"
          data-aos-delay="500"
          className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
            <div>
              <p>
                {" "}
                We Know that <span className='text-primary'>time</span>{" "}
                is the greatest value in the modern world our healthy meal plan
                delivery service Good Food in Miami is the answer for those who want to
                eat healthily, saving time for buying food and preparing delicious , healthy meals
              </p>
            </div>
            <div></div>
          </div>
          <div 
           data-aos="fade-up"
           data-aos-delay="300"
          className='grid grid-cols-1 sm:grid-cols-2 gap-4 py-10'>
            <div></div>
            <div>
              <p>
                {" "}
                We Know that <span className='text-primary'>time</span>{" "}
                is the greatest value in the modern world our healthy meal plan
                delivery service Good Food in Miami is the answer for those who want to
                eat healthily, saving time for buying food and preparing delicious , healthy meals
              </p>
            </div>
          </div>
        </div>
        {/* button section */}
        <div 
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-offset="0"
        className='flex justify-center mt-10 sm:mt-14'>
        <PrimaryButton/>
        </div>
      </div>
      {/* bg fruits pngs */}
      <div
      data-aos="fade-right"
      className='absolute top-5 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
        <img 
        data-aos="fade-right"
        src={cupCake} alt="" className='max-w-[160px]'/>
      </div>
      <div 
      data-aos="fade-right"
      className='absolute -bottom-16 -left-16 sm:bottom-0 sm:left-0 opacity-50 sm:opacity-100'>
        <img
        data-aos="fade-right"
        src={cake} alt="" className='max-w-[280px]'/>
      </div>
      <div
      data-aos="fade-right"
      className='absolute top-10 -right-16 sm:right-0 opacity-50 sm:opacity-100'>
        <img
        data-aos="fade-right"
        src={coffee2} alt="" className='max-w-[160px]'/>
      </div>
      <div
      data-aos="fade-left"
      className='hidden sm:block absolute bottom-0 right-0'>
        <img src={croissiant} alt="" className='max-w-[200px]'/>
      </div>
      <div
      data-aos="fade"
      className='absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/2 opacity-50 sm:opacity-100'>
        <img src={coffeWh} alt="" className='max-w-[180px]'/>
      </div>
    </div>
    </>
  )
}

export default Banner