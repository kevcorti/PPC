import React from "react";
import foto1 from "../../assets/foto1.webp";
import UrbanArtCard from "./UrbanArtCard";
import "./UrbanArt.css";

function UrbanArtBanner() {
  return (
    <div className="min-h-60vh bg-bgmain text-black relative ">
      <div className="w-100 h-100 flex gap-3 justify-center items-center absolute right-1/2 left-1/2 -top-40">
        <UrbanArtCard
          nameCity={"Santa Elena"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex laborum, tempore veritatis repudiandae odit, quibusdam commodi accusantium debitis, animi fuga adipisci! Nihil minus veritatis atque hic esse facilis labore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex laborum, tempore veritatis repudiandae odit, quibusdam commodi accusantium debitis, animi fuga adipisci! Nihil minus veritatis atque hic esse facilis labore?Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex laborum, tempore veritatis repudiandae odit, quibusdam commodi accusantium debitis, animi fuga adipisci! Nihil minus veritatis atque hic esse facilis labore?"
          }
          image={foto1}
        />
        <UrbanArtCard
          nameCity={"Guayaquil"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex laborum, tempore veritatis repudiandae odit, quibusdam commodi accusantium debitis, animi fuga adipisci! Nihil minus veritatis atque hic esse facilis labore?"
          }
          image={foto1}
        />
        <UrbanArtCard
          nameCity={"Durán"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ex laborum, tempore veritatis repudiandae odit, quibusdam commodi accusantium debitis, animi fuga adipisci! Nihil minus veritatis atque hic esse facilis labore?"
          }
          image={foto1}
        />
      </div>
      <span></span>
    </div>
  );
}

export default UrbanArtBanner;
