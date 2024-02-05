import React from "react";

function CustomInput({ id, label, placeholder, type, register }) {
  return (
    <>
      <label className="label" htmlFor={id}>
        <span className="text-black block mb-2 text-lg font-semibold label-text">
          {label}
        </span>
      </label>
      <input
        className="w-full bg-white text-black  min-w-xs p-2 border-solid border-2 text-md"
        type={type}
        id={id}
        placeholder={placeholder}
        {...register}
      />
    </>
  );
}

export default CustomInput;
