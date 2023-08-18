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
    school: "Harvard",
    title: "pHD",
    startDateEdu: "16-06-2011",
    endDateEdu: "23-04-2014",
    locationEdu: "New York, US",
    companyName: "Meta",
    positionTitle: "Manager",
    startDateExp: "04-02-2016",
    endDateExp: "23-08-2020",
    locationExp: "Brno, CZ",
    description:
      "nteger pellentesque quam vel velit. Vivamus porttitor turpis ac leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque pretium lectus id turpis. Vivamus ac leo pretium faucibus. Duis viverra diam non justo. Mauris elementum mauris vitae tortor. Phasellus et lorem id felis nonummy placerat. Praesent id justo in neque elementum ultrices. Phasellus rhoncus. Maecenas libero. Etiam egestas wisi a erat. Praesent in mauris eu tortor porttitor accumsan. Mauris tincidunt sem sed arcu. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla accumsan, elit sit amet varius semper, nulla mauris mollis quam, tempor suscipit diam nulla vel leo. Integer tempor. Duis condimentum augue id magna semper rutrum. Donec quis nibh at felis congue commodo.",
  });

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
