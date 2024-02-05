import React, { useEffect, useState } from "react";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import ButtonInformation from "./ButtonInformation";
import { Link, useParams } from "react-router-dom";
import { getAllUrbanArtsByCategory } from "../../../services/urbanarts";
import logomain from "../../../assets/logo_main.png";

function UrbanArtCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    getAllUrbanArtsByCategory(id).then((urbanarts) => {
      setSlides(urbanarts.data);
    });
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev <= 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen flex flex-col gap-3 justify-start items-center bg-[#f7ecdc] pb-10 pt-4 px-4">
      <div className="h-1/6 w-full flex justify-between px-20">
        <ButtonInformation
          city={slides[currentSlide]?.city.name}
          title={slides[currentSlide]?.name}
          address={slides[currentSlide]?.address}
          photographer={slides[currentSlide]?.user.names}
        />
        <Link to="/gallery">
          <button className="btn bg-[#350101]">
            <AiOutlineClose className="font-extrabold w-5 h-5 text-white" />
          </button>
        </Link>
      </div>
      {slides.length > 0 ? (
        <>
          <picture className="w-full h-3/6 px-10">
            <img
              src={slides[currentSlide].url_photo}
              alt="Foto 1"
              className="object-full w-full h-auto"
            />
          </picture>
          <div className="h-2/6 relative w-full flex justify-center items-center overflow-hidden bg-[#350101] gap-5 px-5">
            <button
              onClick={prevSlide}
              className="text-center bg-white text-black p-2 rounded-full focus:outline-none z-30"
            >
              <BsArrowLeft className="h-5 w-5" />
            </button>
            {slides.length >= 5
              ? [-2, -1, 0, 1, 2].map((offset) => {
                  let index = currentSlide + offset;
                  if (index < 0) index += slides.length;
                  if (index >= slides.length) index -= slides.length;
                  return (
                    <div
                      key={index}
                      className={`text-center transition-transform duration-500 transform ${
                        offset === 0 ? "" : ""
                      } ${offset === -1 ? "" : ""} ${offset === 1 ? "" : ""}`}
                    >
                      <img
                        src={slides[index]?.url_photo}
                        alt={slides[index]?.name}
                        className="h-56 object-cover py-2"
                        onClick={() => setCurrentSlide(index)}
                      />
                    </div>
                  );
                })
              : slides.map((content, index) => {
                  return (
                    <div
                      key={content.name}
                      className={`text-center transition-transform duration-500 transform`}
                    >
                      <img
                        src={content?.url_photo}
                        alt={content?.name}
                        className="h-56 object-cover py-2"
                        onClick={() => setCurrentSlide(index)}
                      />
                    </div>
                  );
                })}

            <button
              onClick={nextSlide}
              className="text-center bg-white rounded-full text-black p-2 focus:outline-none z-30"
            >
              <BsArrowRight className="h-5 w-5" />
            </button>
          </div>
        </>
      ) : (
        <div className="flex-1 w-full flex flex-col justify-center items-center gap-10">
          <picture className="h-90 w-90">
            <img
              src={logomain}
              className="object-fill"
              alt="Logo de Grafica Popular Costera"
            />
          </picture>
          <p className="text-3xl">
            Lo sentimientos, no se han registrados datos aun. Puedes registrar
            datos dandole click a este boton:
          </p>
          <Link to={"/uploads"}>
            <button
              className="btn bg-[#350101] text-white
            "
            >
              Registrar Nuevo Arte Urbano
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default UrbanArtCarousel;
