import HeroBg from "../assets/heroBg.png"
import PrimaryButton from "./primaryButton"
import Coffee from "../assets/coffee-com.png"

const BgStyle = {
  backgroundImage:`url(${HeroBg})`,
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  width:"100%",
  height:"100%",
  backgroundSize:"cover"
}

const Hero = () => {
  return (
    <>
    <div style={BgStyle} className="relative z-[-1] sm:top-0">
      <div className="container py-16 sm:py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* text-content section */}
          <div className='space-y-7 text-white order-2 sm:order-1'>
            <h1 
            data-aos="fade-up"
            className='text-5xl'>
              Fresh & Healthy Meal Plan <span
              className='text-red-500 font-cursive text-7xl'>
              Delivery</span>{" "}
               in Miami
            </h1>
            <p 
            data-aos="fade-up"
            data-aos-delay="300"
            className='lg:pr-64'>
              Delicious meals Delivered to your
              Door From Rs.5000 Per Week.
            </p>
            <PrimaryButton/>
          </div>
          {/* Image section */}
          <div 
           data-aos="zoom-in"
           data-aos-delay="500"
           className='relative z-30 order-1 sm:order-2 '>
            <img src={Coffee} alt="HeroBg" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero