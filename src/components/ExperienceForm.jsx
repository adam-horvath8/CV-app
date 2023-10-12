import { React, useState } from "react";
import InputField from "./small-components/InputField";

const Experience = ({ setExperienceForms, onDelete, form, index }) => {
  const [openInput, setOpenInput] = useState(false);

  const [editLabel, setEditLabel] = useState("Submit");

  const [submitData, setSubmitData] = useState({
    companyName: form.companyName,
    positionTitle: form.positionTitle,
    startDateExp: form.startDateExp,
    endDateExp: form.endDateExp,
    locationExp: form.locationExp,
    description: form.description,
  });

  const updateExperienceForm = (updatedData) => {
    setExperienceForms((prevForms) => {
      const updatedForms = [...prevForms];
      updatedForms[index] = { ...updatedForms[index], ...updatedData };
      return updatedForms;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the specific form item with data from submitData

    updateExperienceForm(submitData);
    setEditLabel("Edit");
  };

  return (
    <form action="set" onSubmit={(e) => handleSubmit(e)}>
      <div className="heading-form">
        <h1>
          Experience{" "}
          <span className="edu-heading-name">{submitData.companyName}</span>
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
          label="Company"
          type="text"
          onChange={(e) => {
            setSubmitData({ ...submitData, companyName: e.target.value });
          }}
        />
        <InputField
          label="Position"
          type="text"
          onChange={(e) => {
            setSubmitData({ ...submitData, positionTitle: e.target.value });
          }}
        />
        <InputField
          label="Start Date"
          type="date"
          onChange={(e) => {
            setSubmitData({ ...submitData, startDateExp: e.target.value });
          }}
        />
        <InputField
          label="End Date"
          type="date"
          onChange={(e) => {
            setSubmitData({ ...submitData, endDateExp: e.target.value });
          }}
        />
        <InputField
          label="Location"
          type="text"
          onChange={(e) => {
            setSubmitData({ ...submitData, locationExp: e.target.value });
          }}
        />
        <InputField
          label="Description"
          type="message"
          rows="4"
          cols="50"
          onChange={(e) => {
            setSubmitData({ ...submitData, description: e.target.value });
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

export default Experience;
