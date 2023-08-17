import React from "react";
import InputField from "./small-components/InputField";

const Education = () => {
  return (
    <form action="set">
      <h1>Education</h1>
      <InputField label="School" type="text" />
      <InputField label="Degree" type="text" />
      <InputField label="Start Date" type="date" />
      <InputField label="End Date" type="date" />
      <InputField label="Location" type="text" />
    </form>
  );
};
export default Education;
