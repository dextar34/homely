import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa6";

const ProductDetails = ({ txt1, txt2, bg1, bg2, price, }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const toogle = (index) => {
    // Toggle the selected star
    if (index + 1 == selectedStars) {
      setSelectedStars(0); // Reset if the same star is clicked
    } else {
      setSelectedStars(index + 1); // Set the selected star
    }
  };

  const [scale, setScale] = useState(null);

  const scaled = () => {
    setScale(!scale);
  };

  return (
    <div>
      <div className="main">
        <div className="txt leading-10 font-bold text-3xl tracking-[1.3px]">
          <p>{txt1}</p>
          <p>{txt2}</p>
        </div>
        <div className="icon flex items-center gap-x-4 py-2.5">
          <div className="map flex">
            {[...Array(5)].map((star, index) => (
              <div
                key={index}
                onClick={() => toogle(index)}
                className="cursor-pointer text-orange-300 text-2xl"
              >
                {index < selectedStars ? <FaStar /> : <CiStar />}
              </div>
            ))}
          </div>
          <div className="text-xl font-semibold">
            <p>3,345</p>
          </div>
        </div>
        <p className="py-10 text-[#69306D] text-3xl font-bold tracking-[1.2px]">
          {price}
        </p>
        <div className="colorSection">
          <p className="py-4 font-semibold text-xl">Colors</p>
          <div className="color flex gap-x-5">
            <div
              className={`p-1 w-[52px] h-[52px] ${bg1} rounded-[10px] ${
                scale ? "scale-80" : "scale-100"
              } transition-transform duration-200 ease-in-out`}
              onClick={() => scaled(bg1)}
            ></div>
            <div
              className={`p-1 w-[52px] h-[52px] ${bg2} rounded-[10px] ${
                scale ? "scale-80" : "scale-100"
              } transition-transform duration-200 ease-in-out`}
              onClick={() => scaled(bg2)}
            ></div>
          </div>
        </div>
        <div className="addToCart py-7 flex items-center gap-5">
          <div className="w-[482px] bg-[#F2D7EE] rounded-xl text-center text-[#69306D] text-xl font-semibold py-5">
            <p>Add To Cart</p>
          </div>
          <div className="w-[91px] h-[65px] border border-[#69306D] flex items-center justify-center rounded-xl text-[#F2D7EE] text-4xl">
            <FaHeart />
          </div>
        </div>
        <div className="w-[593px] bg-[#69306D] text-center text-xl font-semibold text-[#FAF6EF] py-5 rounded-xl ">
          <p>Buy Now</p>
        </div>
      </div>
    </div>
        
  );
};

export default ProductDetails;
