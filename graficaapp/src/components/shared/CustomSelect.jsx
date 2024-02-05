import React from "react";

function CustomSelect({ id, label, values = [], register }) {
  return (
    <>
      <label className="label" htmlFor={id}>
        <span className="text-black block mb-2 text-lg font-semibold label-text">
          {label}
        </span>
      </label>
      <select
        className="select bg-white text-black select-bordered w-full min-w-xs"
        id={id}
        {...register}
      >
        <option value={"Elije una opcion"} disabled={true}>
          Elije una opcion
        </option>
        {values.map((element) => {
          return (
            <option key={element.name ?? element.names} value={element.id}>
              {element.name ?? element.names}
            </option>
          );
        })}
      </select>
    </>
  );
}

export default CustomSelect;
