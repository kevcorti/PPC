import React from "react";

function CompleteFileCardCarousel({ url_image, title, description, onClick }) {
  return (
    <div
      className="card w-96 md:w-[25rem] lg:w-[34rem] h-[40rem] bg-white shadow-xl hover:scale-110"
      onClick={onClick}
    >
      <figure className="h-3/4 p-3">
        <img src={url_image} alt={title} className="object-fill h-full" />
      </figure>
      <div className="h-1/4 card-body bg-white">
        <h2 className="card-title text-[#350101] text-3xl font-semibold">
          {title}
        </h2>
        <p className="text-md">{description}</p>
      </div>
    </div>
  );
}

export default CompleteFileCardCarousel;
