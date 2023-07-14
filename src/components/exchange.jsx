import React, { useState } from "react";
import { exchanges } from "../common/Common";
import coin from "../assets/coin.jpg";
import Menu from "./Menu";
import Header from "./Header";

const Exchange = () => {
  const [items, setItems] = useState(exchanges);

  const filterItem = (categoryItem) => {
    const updatedItems = exchanges.filter((currentItem) => {
      return currentItem.category === categoryItem;
    });
    setItems(updatedItems);
  };

  return (
    <>
    <Menu />
    <Header/>
      <section className="pb-20">
        <div className="">
          <img src={coin} alt="coin" className="relative hidden sm:block" />
        </div>
        <h2 className="absolute text-[40px] sm:text-[70px] sm:text-[#fff] left-[30%] sm:left-[35%] top-[110px] sm:top-[200px] font-bold pb-5 z-10 text-[#fff] pt-8">
          EXCHANGES
        </h2>
        <div
          className={`flex flex-col md:flex-row flex-wrap justify-around items-center md:mt-0 sm:mt-0 px-20 pt-32 md:pt-8 pb-12 md:ml-0 bg-black w-[550px] md:w-full `}
        >
          <button
            className={`bg-[#e5f01b] border-[3px] border-[#FE6602] text-black font-poppins px-12 sm:px-10 py-2  my-2  hover:bg-[#FE6602] hover:text-[#ffffff] hover:border-[#FE6602] active:bg-[#FE6602] active:text-[#FE6602] active:border-[#FE6602] rounded-3xl`}
            onClick={() => setItems(exchanges)}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            All Types
          </button>
          <button
            className={`bg-[#e5f01b] border-[3px] border-[#FE6602] text-black font-poppins px-12 sm:px-10 py-2  my-2 hover:bg-[#FE6602] hover:text-[#ffffff] hover:border-[#FE6602] active:bg-[#FE6602] active:text-[#FE6602] active:border-[#FE6602] rounded-3xl`}
            onClick={() => filterItem("skyexchange")}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            SKY VERSION
          </button>
          <button
            className={`bg-[#e5f01b] border-[3px] border-[#FE6602] text-black font-poppins px-12 sm:px-10 py-2  my-2 hover:bg-[#FE6602] hover:text-[#ffffff] hover:border-[#FE6602] active:bg-[#FE6602] active:text-[#FE6602] active:border-[#FE6602] rounded-3xl`}
            onClick={() => filterItem("diamondversion")}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            DIAMOND VERSION
          </button>
          <button
            className={`bg-[#e5f01b] border-[3px] border-[#FE6602] text-black font-poppins px-12 sm:px-10 py-2  my-2 hover:bg-[#FE6602] hover:text-[#ffffff] hover:border-[#FE6602] active:bg-[#FE6602] active:text-[#FE6602] active:border-[#FE6602] rounded-3xl`}
            onClick={() => filterItem("d247version")}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            D247 VERSION
          </button>
          <button
            className={`bg-[#e5f01b] border-[3px] border-[#FE6602] text-black font-poppins px-12 sm:px-10 py-2  my-2 hover:bg-[#FE6602] hover:text-[#ffffff] hover:border-[#FE6602] active:bg-[#FE6602] active:text-[#FE6602] active:border-[#FE6602] rounded-3xl`}
            onClick={() => filterItem("99exchversion")}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            99EXCH VERSION
          </button>
          <button
            className={`bg-[#e5f01b] border-[3px] border-[#FE6602] text-black font-poppins px-12 sm:px-10 py-2  my-2 hover:bg-[#FE6602] hover:text-[#ffffff] hover:border-[#FE6602] active:bg-[#FE6602] active:text-[#FE6602] active:border-[#FE6602] rounded-3xl`}
            onClick={() => filterItem("exchboxversion")}
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            EXCHBOX VERSION
          </button>
        </div>

        <div
          className={`flex flex-col justify-center items-center sm:ml-0 bg-black w-[550px] md:w-full pb-20`}
        >
          {items.map((exchange) => (
            <section className={`flex flex-col `}>
              <div className={`flex flex-row gap-4`}>
                <li
                  key={exchange.id}
                  className={`list-none sm:px-12 py-4 bg-[#e5f01b] w-[220px] sm:w-[300px] mt-4 text-center text-[16px] text-black font-normal rounded-3xl`}
                  data-aos="fade-right"
                  data-aos-duration="1500"
                >
                  {exchange.title}
                </li>
                <div
                  key={2 * exchange.id}
                  className={`list-none px-4 py-4 bg-[#e5f01b] w-[100px] mt-4 text-center text-[16px] text-black font-normal rounded-3xl`}
                  data-aos="fade-left"
                  data-aos-duration="1500"
                >
                  {exchange.rate}
                </div>
                <img
                  src={exchange.img}
                  alt={exchange.site}
                  key={exchange.site}
                  className={`w-[50px] text-black mt-6 hover:bg-[#e5f01b] hover:cursor-pointer hover:rounded-full `}
                  onClick={() => window.open(exchange.site)}
                />
              </div>
            </section>
          ))}
        </div>
      </section>
    </>
  );
};
export default Exchange;
