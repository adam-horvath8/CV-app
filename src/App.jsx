import PersonalDetails from "./components/PersonalDetails";
import Education from "./components/EducationForm";
import Experience from "./components/ExperienceForm";
import CvTemplate from "./components/CvTemplate";
import { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState({
    name: "Peter Dvorský",
    email: "peter.dvorsky@email.com",
    phoneNumber: "+421 546 243 489",
    address: "Brno, CZ",
  });

  const handleInputChange = (inputName, newValue) => {
    setInputValue((prevValues) => ({
      ...prevValues,
      [inputName]: newValue,
    }));
  };

  return (
    <>
      <div className="form-section">
        <button>Clear Resume</button>
        <PersonalDetails inputValue={inputValue} onChange={handleInputChange} />
        <Education />
        <Experience />
      </div>
      <div className="template-section">
        <CvTemplate inputValue={inputValue} />
      </div>
    </>
  );
}

export default App;
