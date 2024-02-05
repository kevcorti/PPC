import React from "react";

function PhotographerCard({ title, descripcion, features }) {
  return (
    <div className="card shadow-xl shadow-black bg-white rounded-xl h-auto">
      <div className="flex card-body gap-3 text-black w-96 h-96">
        <div className="bg-orange-400 w-16 h-16 mb-5 rounded-lg"></div>
        <h6 className="text-4xl py-2">{title}</h6>
        <p className="text-md text-ellipsis overflow-hidden overflow-y-auto h-96">
          {descripcion}
        </p>
        <ul className="list-none text-md">
          {features.map((feature, index) => {
            return (
              <li
                className={`${index === 1 && "text-orange-400"} py-1`}
                key={index}
              >
                {feature}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default PhotographerCard;
