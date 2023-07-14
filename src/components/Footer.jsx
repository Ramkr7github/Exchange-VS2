import React from "react";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import logo from "../assets/logo.png";
import responsible from "../assets/responsible.png";
import { icons } from "./Payment";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#fff] pt-8 w-[550px] sm:w-full">
       
      <div className="text-[#FE6602]">
        <div className="pt-5 pb-5 flex flex-row justify-center items-center">
          <div className="row flex flex-col sm:flex-row justify-center items-center sm:gap-x-[120px]">
            <div className="mb-2">
              <div className="flex flex-col sm:flex-row justify-center items-center sm:gap-x-[100px]">
                <div >
                  <Link to="/home">
                    <img src={logo} className="h-[60px] my-3 sm:my-0 sm:mt-[-200px]" alt="logo" />
                    </Link>
                  <h3 className="text-center sm:text-start">
                    This site is most trusted and secure
                    <br />
                    exchange site in the world.
                  </h3>
                </div>
                
                <div>
                  <h3 className="text-[25px] text-black pb-3 py-5 sm:py-0 text-center sm:text-start sm:mt-[-180px]">Games</h3>
                  <ul className="text-center sm:text-start">
                    <li className="py-1 hover:text-black">
                      <a href="/">Cricket</a>
                    </li>
                    <li className="py-1 hover:text-black">
                      <a href="/">Football</a>
                    </li>
                    <li className="py-1 hover:text-black">
                      <a href="/">Tennis</a>
                    </li>
                    <li className="py-1 hover:text-black">
                      <a href="/">Horse Racing</a>
                    </li>
                    <li className="py-1 hover:text-black">
                      <a href="/">Live Casino</a>
                    </li>
                  </ul>
                </div>
                <div >
                  <h3 className="text-[25px] text-black pb-3 text-center py-5 sm:py-0">
                    Payment Partners
                  </h3>
                  <div
                    className={` mt-3 flex flex-col sm:flex-col items-center  `}
                  >
                    {icons.map((icons, index) => (
                      <img
                        src={icons.img}
                        key={icons.id}
                        alt="img"
                        className={`sm:py-3  sm:ml-3 pt-3 sm:pt-0 ${
                          index === icons.length - 1 ? "mb-0" : "mb-12 sm:mb-0"
                        } sm:mt-4 h-[50px]`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-30">
              <div>
                <h3 className="text-[22px] text-black pb-5 sm:mt-[-180px]">
                  Security & Game Integrity
                </h3>
                <img src={responsible} alt="img" className="h-[60px] ml-24 sm:ml-0" />
              </div>
              <div className="py-2 sm:py-0">
                <div className="flex justify-center items-center">
                  <span className="text-[22px] text-black pt-8 pb-12 sm:pb-2 sm:ml-[-170px] md:pl-16">
                    Follow us on
                  </span>
                </div>
                <div className="flex flex-row ml-20 sm:ml-1">
                  <a href="https://www.facebook.com">
                    <BsFacebook size={35} className="mr-1 sm:mr-2 text-[35px] sm:text-[25px] hover:text-[#000000] ease-in-out duration-200" />
                  </a>
                  <a href="https://www.twitter.com">
                    <AiFillTwitterCircle size={40} className=" mx-2 sm:mx-2 text-[35px] sm:text-[25px] hover:text-[#000000] ease-in-out duration-200" />
                  </a>
                  <a href="https://www.instagram.com">
                    <AiFillInstagram size={40} className=" mx-1 sm:mx-2 text-[35px] sm:text-[25px] hover:text-[#000000] ease-in-out duration-200" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div className="copyright-area pb-28 flex flex-col justify-center items-center pt-6">
        <div>
          <ul className="flex flex-col sm:flex-row justify-center items-center gap-x-5 ">
            <li>
              <a href="/" className="hover:text-[#FE6602]">
                Home |
              </a>
            </li>
            <li>
              <Link to="/exchange" className="hover:text-[#FE6602]">
                Exchanges |
              </Link>
            </li>
            <li>
              <a href="/#payment" className="hover:text-[#FE6602]">
                Payment Modes |
              </a>
            </li>
            <li>
              <a href={"https://wa.me/917779996639?text=I%20want%20to%20know%20terms%20and%20conditions%20for%20betting%20account"} className="hover:text-[#FE6602]">
                Terms & Conditions |
              </a>
            </li>
            <li>
              <a href={"https://wa.me/917779996639?text=I'm%20intrested%20to%20buy%20betting%20account"} className="hover:text-[#FE6602]">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center mt-3 flex-col sm:flex-row justify-center items-center">
          <p>
            Copyright &copy; 2023, All Right Reserved{" "}
           
          </p>
          <a href="/">ExchBox</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;