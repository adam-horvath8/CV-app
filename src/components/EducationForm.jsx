import React, { useState } from "react";
import InputField from "./small-components/InputField";
import { v4 as uuidv4 } from "uuid";

const Education = ({ form, onDelete, setEducationForms, index }) => {
  const [openInput, setOpenInput] = useState(false);

  const [editLabel, setEditLabel] = useState("Submit");

  console.log(form["school"], "this is ");

  const [submitData, setSubmitData] = useState({
    school: form.school,
    startDate: form.startDate,
    endDate: form.endDate,
    location: form.location,
    degree: form.degree,
  });

  const updateEducationForm = (updatedData) => {
    setEducationForms((prevForms) => {
      const updatedForms = [...prevForms];
      updatedForms[index] = { ...updatedForms[index], ...updatedData };
      return updatedForms;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the specific form item with data from submitData

    updateEducationForm(submitData);
    setEditLabel("Edit");
  };

  return (
    <form action="set" onSubmit={(e) => handleSubmit(e)}>
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
            setSubmitData({ ...submitData, school: e.target.value });
          }}
        />
        <InputField
          label="Degree"
          type="text"
          onChange={(e) => {
            setSubmitData({ ...submitData, degree: e.target.value });
          }}
        />
        <InputField
          label="Start Date"
          type="date"
          onChange={(e) => {
            setSubmitData({ ...submitData, startDate: e.target.value });
          }}
        />
        <InputField
          label="End Date"
          type="date"
          onChange={(e) => {
            setSubmitData({ ...submitData, endDate: e.target.value });
          }}
        />
        <InputField
          label="Location"
          type="text"
          onChange={(e) => {
            setSubmitData({ ...submitData, location: e.target.value });
          }}
        />
        <div className="delete-div">
          <button type="button" onClick={() => onDelete(index)}>
            Delete
          </button>

          <div className="submit-div">
            <button type="submit">{editLabel}</button>
          </div>
        </div>
      </div>
    </form>
  );
};
export default Education;
