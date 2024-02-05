import React from "react";
import { SwiperSlide } from "swiper/react";

function CardSection({ url_img }) {
  return (
    <SwiperSlide className="">
      <div class="card w-96 bg-white shadow-xl border-white border-16 text-black">
        <figure>
          <img src={url_img} height="200" width="200" alt="Shoes" />
        </figure>
        <div class="p-4">
          <h2 class="card-title text-3xl py-3">Arte y Decoracion</h2>
          <p className="text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In maxime
            vitae repellat blanditiis sequi magnam eius quae quod, adipisci at
            nihil tenetur enim atque. Molestias corporis cupiditate aspernatur
            labore repudiandae!
          </p>
        </div>
      </div>
    </SwiperSlide>
  );
}

export default CardSection;
