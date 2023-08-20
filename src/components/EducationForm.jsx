import { React, useState } from "react";
import InputField from "./small-components/InputField";

const Education = ({ onChange }) => {
  const handleChildInputChange = (e, inputName) => {
    const newValue = e.target.value;
    onChange(inputName, newValue);
  };

  const [openInput, setOpenInput] = useState(false);

  return (
    <form action="set">
      <div className="heading-form">
        <h1>Education</h1>
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
          }}
        />
        <InputField
          label="Degree"
          type="text"
          onChange={(e) => {
            handleChildInputChange(e, "title");
          }}
        />
        <InputField
          label="Start Date"
          type="date"
          onChange={(e) => {
            handleChildInputChange(e, "startDateEdu");
          }}
        />
        <InputField
          label="End Date"
          type="date"
          onChange={(e) => {
            handleChildInputChange(e, "endDateEdu");
          }}
        />
        <InputField
          label="Location"
          type="text"
          onChange={(e) => {
            handleChildInputChange(e, "locationEdu");
          }}
        />
        {/* <div className="delete-div">
          <button type="button">Delete</button>
          <div className="submit-div">
            <button type="button">Cancel</button>
            <button>Submit</button>
          </div>
        </div> */}
      </div>
    </form>
  );
};
export default Education;
