import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/EducationForm";
import Experience from "./components/ExperienceForm";
import CvTemplate from "./components/CvTemplate";
import { useState } from "react";
import data from "./defaultData";

function App() {
  const [inputValue, setInputValue] = useState(data);

  const defaultEduObj = {
    school: "Harvard",
    title: "pHD",
    startDateEdu: "16-06-2011",
    endDateEdu: "23-04-2014",
    locationEdu: "New York, US",
  };
  const [newTemplateItemEdu, setNewTemplateItemEdu] = useState([]);
  const [newTemplateItemExp, setNewTemplateItemExp] = useState([]);
  

  const handleInputChange = (inputName, newValue) => {
    setInputValue((prevValues) => ({
      ...prevValues,
      [inputName]: newValue,
    }));
  };

  const deleteInputValues = () => {
    setInputValue({});
  };

  return (
    <>
      <div className="form-section">
        <button onClick={deleteInputValues}>Clear Resume</button>
        <PersonalDetails inputValue={inputValue} onChange={handleInputChange} />
        <Education
          inputValue={inputValue}
          onChange={handleInputChange}
          setNewTemplateItemEdu={setNewTemplateItemEdu}
          key={newTemplateItemEdu.id}
        />
        {newTemplateItemEdu.map((item) => (
          <Education
            inputValue={inputValue}
            onChange={handleInputChange}
            setNewTemplateItemEdu={setNewTemplateItemEdu}
            key={item.id}
          />
        ))}

        <Experience
          inputValue={inputValue}
          onChange={handleInputChange}
          setNewTemplateItemExp={setNewTemplateItemExp}
        />
      </div>
      <div className="template-section">
        <CvTemplate
          inputValue={inputValue}
          newTemplateItemEdu={newTemplateItemEdu}
          newTemplateItemExp={newTemplateItemExp}
        />
      </div>
    </>
  );
}

export default App;
