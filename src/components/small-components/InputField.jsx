import React from "react";

const InputField = ({ type, label, id, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <input type={type} id={id} onChange={onChange}/>
    </>
  );
};

export default InputField;
