import React, { useState } from "react";
import InputField from "./small-components/InputField";
import { v4 as uuidv4 } from "uuid";

const Education = ({ onChange, setNewTemplateItemEdu, }) => {
  const handleChildInputChange = (e, inputName) => {
    const newValue = e.target.value;
    onChange(inputName, newValue);
  };

  const [openInput, setOpenInput] = useState(false);

  const [submitData, setSubmitData] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const handleSubmitDataChange = (inputName, newValue) => {
    setSubmitData((prevSubmitData) => ({
      ...prevSubmitData,
      [inputName]: newValue,
    }));
  };

  const handleSubmitData = (e) => {
    e.preventDefault();

    const newSubmitData = {
      id: uuidv4(),
      school: submitData.school,
      title: submitData.degree,
      startDateEdu: submitData.startDate,
      endDateEdu: submitData.endDate,
      locationEdu: submitData.location,
    };

    // Update the newTemplateItem state in the parent component
    setNewTemplateItemEdu((prevTemplateItems) => [
      ...prevTemplateItems,
      newSubmitData,
    ]);
  };

  return (
    <form action="set" onSubmit={handleSubmitData}>
      <div className="heading-form">
        <h1>
          Education{" "}
          <span className="edu-heading-name">{submitData.school}</span>
        </h1>
        <button
          onClick={() => {
            setOpenInput(!openInput);
          }}
          type="button"
        >
          <span>&#10151;</span>
        </button>
      </div>

      <div className={`input-div ${openInput ? "active" : "inactive"}`}>
        <InputField
          label="School"
          type="text"
          onChange={(e) => {
            handleChildInputChange(e, "school");
            handleSubmitDataChange("school", e.target.value);
          }}
        />
        <InputField
          label="Degree"
          type="text"
          onChange={(e) => {
            handleChildInputChange(e, "title");
            handleSubmitDataChange("degree", e.target.value);
          }}
        />
        <InputField
          label="Start Date"
          type="date"
          onChange={(e) => {
            handleChildInputChange(e, "startDateEdu");
            handleSubmitDataChange("startDate", e.target.value);
          }}
        />
        <InputField
          label="End Date"
          type="date"
          onChange={(e) => {
            handleChildInputChange(e, "endDateEdu");
            handleSubmitDataChange("endDate", e.target.value);
          }}
        />
        <InputField
          label="Location"
          type="text"
          onChange={(e) => {
            handleChildInputChange(e, "locationEdu");
            handleSubmitDataChange("loacation", e.target.value);
          }}
        />
        <div className="delete-div">
          <button type="button">Delete</button>
          <div className="submit-div">
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Education;
