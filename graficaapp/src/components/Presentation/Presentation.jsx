import React from "react";
import Item from "./Item";
import { presetationData } from "../../constrains/constrains";

function Presentation() {
  return (
    <div
      id="presentation"
      className="bg-bgmain flex max-h-70 justify-center items-center w-full"
    >
      <div className="h-full flex justify-around mx-24 p-24 gap-24 aspect-video">
        <div className="container w-2/6 max-w-xl">
          <img
            className="h-full w-full object-cover border-16 border-white"
            src="https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/UGRWVQSOAJCXXAQ67YFFGFIZYA.jpg"
            alt="Presentacion Foto"
          />
        </div>
        <div className="w-4/6 flex flex-col justify-around gap-8 px-10 py-20 max-w-3xl">
          <h2 className="title_section">Presentación</h2>
          <p className="max-w-40 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illum
            aliquam laudantium odio accusamus pariatur explicabo quam sed nemo.
            Dolorem nobis natus deleniti hic! Laborum libero hic sunt mollitia
            tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iste a vero qui, consectetur autem dolorem quae quam unde ex fugit
            dolorum repudiandae eaque hic quidem officia vitae assumenda dolor
            magni! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Officia rerum, dolor illo perspiciatis vero odio quis assumenda,
            ipsa nulla natus distinctio quas voluptates, exercitationem
            doloribus atque quod suscipit a aspernatur?
          </p>
          <span className="text-end">
            <button
              type="button"
              className="bg-brown text-white font-bold rounded py-2 px-4 text-end"
            >
              Leer más
            </button>
          </span>
          <div className="flex bg-orange-300 relative">
            {presetationData.map((data, index) => {
              return (
                <Item
                  key={data.title}
                  index={index}
                  number={data.number}
                  title={data.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
