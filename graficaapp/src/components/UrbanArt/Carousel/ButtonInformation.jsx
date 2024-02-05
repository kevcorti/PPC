import React, { useState } from "react";
import InformationUrbanArt from "./InformationUrbanArt";
import { IoInformationOutline } from "react-icons/io5";

function ButtonInformation({ city, title, address, photographer }) {
  const [openInfo, setOpenInfo] = useState(false);
  return (
    <div>
      <button
        className="px-2 py-1 rounded-md text-end bg-[#350101] text-white"
        onClick={() => {
          setOpenInfo(!openInfo);
        }}
      >
        <IoInformationOutline className="font-extrabold h-10 w-10" />
        <InformationUrbanArt
          city={city}
          title={title}
          ubication={address}
          fotografo={photographer}
          isOpen={openInfo}
        />
      </button>
    </div>
  );
}

export default ButtonInformation;
