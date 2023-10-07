import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/EducationForm";
import Experience from "./components/ExperienceForm";
import CvTemplate from "./components/CvTemplate";
import { useState } from "react";
import data from "./defaultData";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputValue, setInputValue] = useState(data);

  const [experienceForms, setExperienceForms] = useState([]);

  const [educationForms, setEducationForms] = useState([]);

  const handleInputChange = (inputName, newValue) => {
    setInputValue((prevValues) => ({
      ...prevValues,
      [inputName]: newValue,
    }));
  };

  const deleteInputValues = () => {
    setInputValue({});
    setEducationForms([]);
    setExperienceForms([]);
  };

  const addEducationForm = () => {
    // Add a new empty education form
    setEducationForms((prevForms) => [
      ...prevForms,
      {
        id: uuidv4(), // Generate a unique ID using uuidv4
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
      },
    ]);
  };

  const deleteEducationForm = (index) => {
    // Remove the education form with the given ID
    setEducationForms((prevForms) =>
      prevForms.filter((formItem) => formItem.id !== educationForms[index].id)
    );
  };

  const addExperienceForm = () => {
    setExperienceForms((prevForms) => [
      ...prevForms,
      {
        id: uuidv4(), // Generate a unique ID using uuidv4
        companyName: "",
        positionTitle: "",
        startDateExp: "",
        endDateExp: "",
        locationExp: "",
        description: "",
      },
    ]);
  };

  const deleteExperienceForm = (index) => {
    setExperienceForms((prevForms) =>
      prevForms.filter((formItem) => formItem.id !== experienceForms[index].id)
    );
  };

  return (
    <>
      <div className="form-section">
        <button onClick={deleteInputValues}>Clear Resume</button>
        <PersonalDetails inputValue={inputValue} onChange={handleInputChange} />
        <div className="add-buttons">
          {" "}
          <button onClick={addEducationForm}>Add Education </button>
          <button onClick={addExperienceForm}>Add Experience </button>
        </div>

        {educationForms.map((formItem, index) => (
          <Education
            key={formItem.id}
            educationForms={educationForms}
            setEducationForms={setEducationForms}
            onDelete={(index) => deleteEducationForm(index)}
            form={formItem} // Pass the specific form item as a prop
            index={index} // Pass the index of the form item
          />
        ))}

        {experienceForms.map((formItem, index) => (
          <Experience
            key={formItem.id}
            experienceForms={experienceForms}
            setExperienceForms={setExperienceForms}
            onDelete={(index) => deleteExperienceForm(index)}
            form={formItem}
            index={index}
          />
        ))}
      </div>
      <div className="template-section">
        <CvTemplate
          inputValue={inputValue}
          educationForms={educationForms}
          experienceForms={experienceForms}
        />
      </div>
    </>
  );
}

export default App;
