import React from "react";
import InputField from "./small-components/InputField";

const Experience = () => {
  return (
    <form action="set">
      <h1>Experience</h1>
      <InputField label="Company Name" type="text" />
      <InputField label="Position Title" type="text" />
      <InputField label="Start Date" type="date" />
      <InputField label="End Date" type="date" />
      <InputField label="Location" type="text" />
      <label htmlFor="description">Description</label>
      <textarea id="description" name="descrtion" rows="4" cols="50" />
    </form>
  );
};

export default Experience;
