import React from "react";
import PhotographerCard from "./PhotographerCard";

function Photographers({ photographers }) {
  return (
    <div
      id="photographers"
      className="flex flex-col gap-12 justify-start min-h-80vh w-full bg-bgmain px-10 py-12"
    >
      <h2 className="flex-3 title_section ps-12">Fotógrafos</h2>

      <div className="flex-1 flex flex-nowrap gap-x-8 overflow-x-scroll">
        {photographers.map((photographer, index) => {
          return (
            <PhotographerCard
              key={index}
              title={photographer.names}
              descripcion={photographer.biography}
              features={["Pacifica", "Lorem ipsum dolor lorem", "Divertida"]}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Photographers;
