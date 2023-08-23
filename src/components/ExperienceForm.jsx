import { React, useState } from "react";
import InputField from "./small-components/InputField";
import { v4 as uuidv4 } from "uuid";

const Experience = ({ onChange, setNewTemplateItemExp }) => {
  const handleChildInputChange = (e, inputName) => {
    const newValue = e.target.value;
    onChange(inputName, newValue);
  };

  const [openInput, setOpenInput] = useState(false);

  const [submitData, setSubmitData] = useState({
    companyName: "",
    positionTitle: "",
    startDateExp: "",
    endDateExp: "",
    locationExp: "",
    description: "",
  });

  const handleSubmitDataChange = (inputName, newValue) => {
    setSubmitData((prevData) => ({
      ...prevData,
      [inputName]: newValue,
    }));
  };

  const handleSubmitData = (e) => {
    e.preventDefault();

    const newSubmitData = {
      id: uuidv4(),
      companyName: submitData.companyName,
      positionTitle: submitData.positionTitle,
      startDateExp: submitData.startDateExp,
      endDateExp: submitData.endDateExp,
      locationExp: submitData.locationExp,
      description: submitData.description,
    };

    // Update the newTemplateItem state in the parent component
    setNewTemplateItemExp((prevTemplateItems) => [
      ...prevTemplateItems,
      newSubmitData,
    ]);
  };

  return (
    <form action="set" onSubmit={handleSubmitData}>
      <div className="heading-form">
        <h1>Experience</h1>
        <button
          type="button"
          onClick={() => {
            setOpenInput(!openInput);
          }}
        >
          <span>&#10151;</span>
        </button>
      </div>

      <div className={`input-div ${openInput ? "active" : "inactive"}`}>
        <InputField
          label="Company Name"
          type="text"
          onChange={(e) => {
            handleChildInputChange(e, "companyName");
            handleSubmitDataChange("companyName", e.target.value);
          }}
        />
        <InputField
          label="Position Title"
          type="text"
          onChange={(e) => {
            handleChildInputChange(e, "positionTitle");
            handleSubmitDataChange("positionTitle", e.target.value);
          }}
        />
        <InputField
          label="Start Date"
          type="date"
          onChange={(e) => {
            handleChildInputChange(e, "startDateExp");
            handleSubmitDataChange("startDateExp", e.target.value);
          }}
        />
        <InputField
          label="End Date"
          type="date"
          onChange={(e) => {
            handleChildInputChange(e, "endDateExp");
            handleSubmitDataChange("endDateExp", e.target.value);
          }}
        />
        <InputField
          label="Location"
          type="text"
          onChange={(e) => {
            handleChildInputChange(e, "locationExp");
            handleSubmitDataChange("locationExp", e.target.value);
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
            handleSubmitDataChange("description", e.target.value);
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

export default Experience;
