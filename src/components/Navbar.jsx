import {FaCaretDown, FaUser} from "react-icons/fa"
import Logo from "../assets/restologo.png"


const NavLinks = [
  {
    id:1,
    name:"Home",
    link:"/#"
  },
  {
    id:2,
    name:"About",
    link:"/#"
  },
  {
    id:3,
    name:"Contact",
    link:"/#"
  },
];

const DropdownLinks=[
  {
    id:1,
    name:"Bread",
    link:"/#"
  },
  {
    id:2,
    name:"Coffee",
    link:"/#"
  },
  {
    id:3,
    name:"Cakes",
    link:"/#"
  }
]

const Navbar = ({HandlePopup}) => {
  return (
    <>
    <div data-aos="fade" className="bg-slate-100 shadow-md">
      <div className="container flex justify-between py-4 sm:py-3 w-100% h-[70px] sm:px-0">
        {/* logo section */}
        <div 
        data-aos="zoom-in"
        className="font-bold self-center pr-4 sm:w-auto">
          <img className="w-100% h-[70px] sm:w-auto " src={Logo}/>
        </div>
        {/* Nav links section */}
        <div>
          <ul className="flex items-center gap-8 sm:gap-4">
            {
              NavLinks.map(({id,link,name})=>(
               <li 
               key={id}
               >
               <a href={link} className="hidden sm:inline-block hover:text-primary text-xl font-semibold">
                {name}</a>
               </li>
              ))}
              {/* simple dropdown */}
              <li className="hidden sm:block cursor-pointer group">
                <a href="/#" className="inline-block hover:text-primary text-xl font-semibold"> 
                <div className="flex items-center gap-[2px] py-2 ">
                DropDown
                <span>
                  <FaCaretDown 
                  className="group-hover:rotate-180 duration-300"
                  />
                </span>
                </div>
                </a>
                {/* DropDown Links */}
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] bg-white text-black shadow-md p-2">
                  <ul>
                    {DropdownLinks.map((data)=>(
                      <li 
                      key={data.id}
                      >
                        <a
                        href="/#"
                        className="text-xl inline-block w-full rounded-md p-2 hover:bg-primary/20"
                        > {data.name}  </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li>
                <button 
                onClick={HandlePopup}
                className=" flex justify-center items-center gap-2 bg-secondary text-xl h-[40px] text-white rounded-xl px-2  py-2 hover:scale-105 duration-300 md:text-sm">
                  <FaUser/>
                 <h2 className="md:py-2">My Account</h2>
                </button>
              </li>
          </ul>
        </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;