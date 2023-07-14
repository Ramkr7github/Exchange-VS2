import React from "react";
import Carausal from "./Carausal";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";

function ImageSlider() {
  const slides = [
    image1,image2,image3,image4
  ];
  return (
    <div>
      <div className=" w-[550px] md:w-full">
        <Carausal autoSlide={true}>
          {slides?.map((s, index) => (
            <img key={index} src={s} alt="" />
          ))}
        </Carausal>
      </div>
    </div>
  );
}

export default ImageSlider;
