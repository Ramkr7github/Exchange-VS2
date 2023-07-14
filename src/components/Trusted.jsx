import React from "react";
import trusted from "../assets/trusted.png";

const Trusted = () => {
  return (
    <div>
      <div className="bg-[#0f0e0e] flex flex-col sm:flex-row justify-center items-center gap-x-[60px] w-[550px] sm:w-full">
        <div
          className="px-32 py-8"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <h3 className="text-[#fff] font-bold py-3 text-[30px]">
            MOST TRUSTED & SECURE SITE
          </h3>
          <div className="text-[#fff]">
            <h4 className="text-white my-1 uppercase">
              This is most SECURE site among its competitors
            </h4>
            <p className="w-[350px] sm:w-[480px]">
              We provide various betting exchanges with more than 30 platforms
              to play on different types of sports , games , casino and binary
              markets We provide all the levels of Agency and client IDs Admin ,
              Senior super ,Super Master Master ,Player ID . We provide white
              label of all websites
            </p>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000">
          <img
            src={trusted}
            alt="trusted"
            className="h-[350px] mt-3 xs:ml-40"
          />
        </div>
      </div>
    </div>
  );
};

export default Trusted;
