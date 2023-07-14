import React from "react";
import { AiFillHome } from "react-icons/ai";
import {SiExpertsexchange} from "react-icons/si"
import {RiBankFill} from "react-icons/ri"
import {HiDocumentCheck} from "react-icons/hi2"
import {IoMdCall} from "react-icons/io"
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu-wrapper fixed bottom-0 h-[100px] w-[550px] xs:w-full lg:w-[700px] sm:ml-[26%]  rounded-t-3xl mt-[125px] sm:mt-0 bg-slate-400 z-10">
      <div className="menu gap-[30px] sm:gap-[50px] fixed bottom-0 py-2 h-[100px] flex justify-center items-center w-auto ml-16 md:ml-24">
        <div className="">
          <Link to="/home" className="flex flex-col justify-center items-center hover:cursor-pointer  ease-in-out duration-300"><AiFillHome className="text-[30px] text-white transform transition-all hover:scale-150" />
          <h3 className="pt-1 hover:text-white ease-in-out duration-300">HOME</h3></Link>
        </div>
        <div className="">
          <Link to="/exchange" className="flex flex-col justify-center items-center hover:cursor-pointer  ease-in-out duration-300"><SiExpertsexchange className="text-[30px] text-white transform transition-all hover:scale-150" />
          <h3 className="pt-1 hover:text-white ease-in-out duration-300">EXCHANGES</h3></Link>
        </div>
        <div className="">
          <a href="/#payment" className="flex flex-col justify-center items-center hover:cursor-pointer"><RiBankFill className="text-[33px] text-white transform transition-all hover:scale-150" />
          <h3 className="text-center pt-1 hover:text-white ease-in-out duration-300">PAYMENT</h3></a>
        </div>
        <div className="">
          <a href={"https://wa.me/917779996639?text=I%20want%20to%20know%20terms%20and%20conditions%20for%20betting%20account"} className="flex flex-col justify-center items-center hover:cursor-pointer"><HiDocumentCheck className="text-[30px] text-white transform transition-all hover:scale-150" />
          <h3 className="text-center pt-1 hover:text-white ease-in-out duration-300">T&C</h3></a>
        </div>
        <div className="">
          <a href={"https://wa.me/917779996639?text=I'm%20intrested%20to%20buy%20betting%20account"} className="flex flex-col justify-center items-center hover:cursor-pointer"><IoMdCall className="text-[30px] text-white transform transition-all hover:scale-150" />
          <h3 className="text-center pt-1 hover:text-white ease-in-out duration-300">CONTACT</h3></a>
        </div>
      </div>
    </div>
  );
};

export default Menu;