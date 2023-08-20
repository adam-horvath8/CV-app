import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/EducationForm";
import Experience from "./components/ExperienceForm";
import CvTemplate from "./components/CvTemplate";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState(data);

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
        <Education inputValue={inputValue} onChange={handleInputChange} />
        <Experience inputValue={inputValue} onChange={handleInputChange} />
      </div>
      <div className="template-section">
        <CvTemplate inputValue={inputValue} />
      </div>
    </>
  );
}

export default App;
