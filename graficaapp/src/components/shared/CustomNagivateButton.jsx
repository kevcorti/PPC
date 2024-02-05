import React from "react";
import { Link } from "react-router-dom";

function CustomNagivateButton({ styles, name, path }) {
  return (
    <div className="bg-bgmain flex justify-end pb-4 px-5">
      <Link to={path}>
        <button className={styles}>{name}</button>
      </Link>
    </div>
  );
}

export default CustomNagivateButton;
