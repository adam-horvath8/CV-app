import React from "react";
import InputField from "./small-components/InputField";

const Experience = ({ onChange }) => {
  const handleChildInputChange = (e, inputName) => {
    const newValue = e.target.value;
    onChange(inputName, newValue);
  };

  return (
    <form action="set">
      <h1>Experience</h1>
      <InputField
        label="Company Name"
        type="text"
        onChange={(e) => {
          handleChildInputChange(e, "companyName");
        }}
      />
      <InputField
        label="Position Title"
        type="text"
        onChange={(e) => {
          handleChildInputChange(e, "positionTitle");
        }}
      />
      <InputField
        label="Start Date"
        type="date"
        onChange={(e) => {
          handleChildInputChange(e, "startDateExp");
        }}
      />
      <InputField
        label="End Date"
        type="date"
        onChange={(e) => {
          handleChildInputChange(e, "endDateExp");
        }}
      />
      <InputField
        label="Location"
        type="text"
        onChange={(e) => {
          handleChildInputChange(e, "locationExp");
        }}
      />
      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        name="descrtion"
        rows="4"
        cols="5"
        onChange={(e) => {
          handleChildInputChange(e, "description");
        }}
      />
    </form>
  );
};

export default Experience;
