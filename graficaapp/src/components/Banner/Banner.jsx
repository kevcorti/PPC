import React from "react";
import bannerMain from "../../assets/banner_main.jpg";

function Banner() {
  return (
    <div className="container-full h-full bg-gray-100 relative">
      <img
        className="w-full object-cover aspect-video"
        src={bannerMain}
        alt="Foto1"
      />
    </div>
  );
}

export default Banner;
