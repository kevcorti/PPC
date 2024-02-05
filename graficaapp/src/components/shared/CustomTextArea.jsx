import React from "react";

function CustomTextArea({ id, label, register }) {
  return (
    <>
      <label className="label" htmlFor={id}>
        <span className="text-black block mb-2 text-lg font-semibold label-text">
          {label}
        </span>
      </label>
      <textarea
        className="bg-white text-black textarea textarea-bordered textarea-md w-full min-w-xs"
        id={id}
        {...register}
      ></textarea>
    </>
  );
}

export default CustomTextArea;
