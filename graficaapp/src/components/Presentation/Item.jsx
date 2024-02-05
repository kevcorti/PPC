import React from "react";
import "./Presentation.css";

function Item({ index, number, title }) {
  return (
    <div
      className={`${
        index % 2 === 0 ? "bg-orange-400" : "bg-orange-300"
      } grow h-28 text-center text-ellipsis font-bold text-brown p-3 link_data`}
    >
      <p className="text-4xl">{number}</p>
      <p className="text-lg ">{title.toUpperCase()}</p>
    </div>
  );
}

export default Item;
