import React from "react";
import InputField from "./small-components/InputField";

const Education = ({ onChange }) => {
  const handleChildInputChange = (e, inputName) => {
    const newValue = e.target.value;
    onChange(inputName, newValue);
  };

  return (
    <form action="set">
      <h1>Education</h1>
      <InputField
        label="School"
        type="text"
        onChange={(e) => handleChildInputChange(e, "school")}
      />
      <InputField
        label="Degree"
        type="text"
        onChange={(e) => handleChildInputChange(e, "title")}
      />
      <InputField
        label="Start Date"
        type="date"
        onChange={(e) => handleChildInputChange(e, "startDateEdu")}
      />
      <InputField
        label="End Date"
        type="date"
        onChange={(e) => handleChildInputChange(e, "endDateEdu")}
      />
      <InputField
        label="Location"
        type="text"
        onChange={(e) => handleChildInputChange(e, "locationEdu")}
      />
    </form>
  );
};
export default Education;
