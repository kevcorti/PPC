import React from 'react'

function InformationUrbanArt({ city, title, ubication, fotografo, isOpen = false }) {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } absolute top-24 left-36 w-80 h-auto flex flex-col justify-start items-start bg-[#350101] opacity-75 text-white p-4`}
    >
      <h4 className="text-3xl font-extrabold">{city}</h4>
      <hr className="stroke-white h-1 w-full my-2 bg-white" />
      <h6 className="font-semibold">Titulo</h6>
      <p className="text-sm">{title}</p>
      <h6 className="font-semibold">Ubicación</h6>
      <p className="text-sm">{ubication}</p>
      <h6 className="font-semibold">Fotógrafo</h6>
      <p className="text-sm">{fotografo}</p>
    </div>
  );
}

export default InformationUrbanArt