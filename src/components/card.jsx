import React from 'react'
import Img1 from "../assets/coffee-white.png"
import Img2 from "../assets/coffee2.png"
import Img3 from "../assets/croissant.png"
import Img4 from "../assets/cupCake.png"
import Img5 from "../assets/cake.png"
import Img6 from "../assets/cake2.png"

const CardImages = [
    {
        id:1,
        img:Img1,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, aspernatur consectetur adipisicing elit. Perspiciatis,.",
        price:"₹500.00"
    },
    {
        id:2,
        img:Img2,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, aspernatur consectetur adipisicing elit. Perspiciatis,.",
        price:"₹785.00"
    },
    {
        id:3,
        img:Img3,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, aspernatur consectetur adipisicing elit. Perspiciatis,.",
        price:"₹210.00"
    },
    {
        id:4,
        img:Img4,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, aspernatur consectetur adipisicing elit. Perspiciatis,.",
        price:"₹440.00"
    },
    {
        id:5,
        img:Img5,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, aspernatur consectetur adipisicing elit. Perspiciatis,.",
        price:"₹140.00"
    },
    {
        id:6,
        img:Img6,
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, aspernatur consectetur adipisicing elit. Perspiciatis,.",
        price:"₹416.00"
    },
]

const card = () => {
    return (
        <div className='py-10'>
          <div 
          data-aos="fade-down"
          className='flex flex-wrap justify-center'>
            {CardImages.map((card)=>(
              <div key={card.id}
                className='w-80 h-96 rounded-2xl bg-white shadow-xl mx-4 my-4 flex flex-col'
              >
                <div className='h-48 relative'>
                  <img 
                    src={card.img} 
                    alt="" 
                    className='w-[200px] h-[200px] pb-2 ml-14 rounded-t-2xl' 
                  />
                </div>
                <div className='flex-grow bg-primary rounded-md'>
                  <div className='p-4 text-center'>
                    <p className="text-black text-sm line-clamp-4 py-2 pt-4 ">
                      {card.description}
                    </p>
                </div >
                <div className='mx-8 text-white font-semibold  bg-primaryDark inline-block p-1 px-4 rounded-xl hover:scale-105 duration-150 ease-in'>
                <button className='text-md  hover:scale-105'>{card.price}</button>
              </div>
             </div>
              </div>
            ))}
          </div>
        </div>
      )
}

export default card