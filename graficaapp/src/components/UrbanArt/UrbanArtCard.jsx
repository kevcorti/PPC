import React, { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";

function UrbanArtCard({ nameCity, description, image }) {
  const [active, setIsActive] = useState(false);
  return (
    <div
      className="h-auto"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div className="bg-white flex flex-col gap-5 border-solid border-2 h-100 w-96 max-w-lg overflow-hidden rounded-lg transition-all duration-700 cursor-pointer hover:scale-110">
        <img
          className="object-fit h-96 max-w-lg p-2"
          src={image}
          alt={`Cuidad de ${image} con una ilustraccion del arte urbano.`}
        />
        <h3 className="text-5xl font-bold text-center px-9 title_section">
          {nameCity}
        </h3>
        <p className="text-justify overflow-y-auto px-9 h-48 text-black mb-6">
          {description}
        </p>
        <div
          className={
            active
              ? `shadow-transparent relative bg-bgmain flex justify-center items-center`
              : "hidden"
          }
        >
          <p className="absolute bg-white">
            <BsChevronCompactDown className="h-16 w-16" />
          </p>
          <div className="grow w-0 h-0 border-l-[200px] border-r-[200px] border-t-[100px] border-t-white border-r-transparent border-l-transparent"></div>
        </div>
      </div>
    </div>
  );
}

export default UrbanArtCard;
