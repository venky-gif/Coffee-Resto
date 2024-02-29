import {FaUser} from "react-icons/fa"
import AboutBg from "../assets/coffee-footer.jpg"
import Vector from "../assets/vector-wave.png"

const bgStyle = {
  backgroundImage:`url(${AboutBg})`,
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
  backgroundSize:"cover",
  width:"100%",
  height:"100%",
  position:"relative",
}

const About = ({HandlePopup}) => {
  return (
    <>
    <div style={bgStyle} className='py-14'>
      <div className='container min-h-[500px] relative z-10'>
        <h1
        data-aos="fade"
        className='pt-20 tracking-wider text-4xl font-semibold text-white text-center'>
         About Us
        </h1>
        {/* card section */}
        <div 
        data-aos="fade"
        data-aos-delay="300"
        className='bg-white/80 p-10 my-10'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident velit temporibus 
         praesentium eius, deleniti minima soluta corrupti nemo illo maiores ipsum. Neque placeat 
         dicta tenetur reiciendis quasi, nesciunt, ratione odio aperiam adipisci aut id quibusdam pariatur illo 
         vel quae corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos assumenda eos reprehenderit optio dicta veniam?
         <div className='pt-10 flex justify-center'>
         <button 
         onClick={HandlePopup}
         className=" flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white px-2 md:px-3 py-2 hover:scale-105 duration-300">
          <FaUser/>
           My Account
          </button>
         </div>
        </div>
      </div>
      <div className='absolute top-0 right-0 w-full'>
        <img src={Vector} alt='' className='mx-auto'/>
      </div>
    </div>
    </>
  )
}

export default About