import React, { useState } from "react";
import CompleteFileCardCarousel from "../CompleteFile/CompleteFileCardCarousel";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import CustomNagivateButton from "../shared/CustomNagivateButton";

import { completefiledata } from "../../utilities/completefiledata";
import { useNavigate } from "react-router-dom";
import { useGraficaPopular } from "../../hooks/useGraficaPopular";

function Galery() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const nagivate = useNavigate();
  const { state } = useGraficaPopular();

  const slides = state.urbanartscategories;

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div
        id="completedfile"
        className="min-h-screen flex flex-col justify-start bg-bgmain px-10 py-12 gap-8"
      >
        <div className="h-1/4">
          <h2 className="flex-3 title_section ps-28">Archivo Completo</h2>
          <CustomNagivateButton
            styles={"btn btn-primary bg-[#350101] hover:bg-[#350100]"}
            name={"Ver más"}
            path={"/gallery"}
          />
        </div>
        <div className="h-2/4 flex-1 relative w-full flex justify-center items-center overflow-hidden">
          {[-1, 0, 1].map((offset) => {
            let index = currentSlide + offset;
            if (index < 0) index += slides.length;
            if (index >= slides.length) index -= slides.length;

            return (
              <div
                key={index}
                className={`transition-transform duration-500 transform ${
                  offset === 0 ? "scale-90" : "scale-75"
                } ${offset === -1 ? "-translate-x-24" : ""} ${
                  offset === 1 ? "translate-x-24" : ""
                }`}
              >
                {/* <img
                  src={slides[index].img}
                  alt={slides[index].title}
                  className="w-96 h-64 object-cover mx-2 border-8 border-white"
                /> */}
                <CompleteFileCardCarousel
                  url_image={slides[index]?.url_photo}
                  title={slides[index]?.name}
                  description={slides[index]?.description}
                  onClick={() => nagivate("/gallery")}
                />
              </div>
            );
          })}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-0 transform -translate-y-1/2 ml-3 bg-white bg-opacity-50 text-black p-2 rounded-full focus:outline-none z-30"
          >
            <BsArrowLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-3 bg-white bg-opacity-50 text-black text-bold p-2 rounded-full focus:outline-none z-30"
          >
            <BsArrowRight className="h-5 w-5" />
          </button>
        </div>
        <CustomNagivateButton
          styles={"h-1/4 btn btn-primary bg-[#350101] hover:bg-[#350100]"}
          name={"Ver más"}
          path={"/gallery"}
        />
      </div>
    </>
  );
}

export default Galery;
