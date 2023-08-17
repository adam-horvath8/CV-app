import React from "react";
import InputField from "./small-components/InputField";

const PersonalDetails = ({ inputValue, onChange }) => {
  const handleChildInputChange = (e, inputName) => {
    const newValue = e.target.value;
    onChange(inputName, newValue);
  };

  return (
    <form action="get">
      <h1>Personal Details</h1>
      <InputField
        label="Name"
        type="text"
        value={inputValue.name}
        onChange={(e) => handleChildInputChange(e, "name")}
      />
      <InputField
        label="Email"
        type="email"
        value={inputValue.email}
        onChange={(e) => handleChildInputChange(e, "email")}
      />
      <InputField
        label="Phone Number"
        type="number"
        value={inputValue.phoneNumber}
        onChange={(e) => handleChildInputChange(e, "phoneNumber")}
      />
      <InputField
        label="Address"
        type="text"
        value={inputValue.address}
        onChange={(e) => handleChildInputChange(e, "address")}
      />
    </form>
  );
};

export default PersonalDetails;
