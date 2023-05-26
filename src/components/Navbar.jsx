import { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="logo" className="w-[124px] h-[32px]" />
      <ul className="sm:flex hidden list-none justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}
            key={nav.id}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center text-red-800">
        <img 
          src={toggle ? close : menu}  
          alt="menu and close "
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)} />
      </div>
    </div>
  );
};

export default Navbar;
