import React from "react";
import TemplateItem from "./small-components/TemplateItem";

function CvTemplate({ inputValue }) {
  return (
    <div className="template">
      <div className="template-top">
        <h1>{inputValue.name}</h1>
        <div className="info-div">
          <span>{inputValue.email}</span>
          <span>{inputValue.phoneNumber}</span>
          <span>{inputValue.address}</span>
        </div>
      </div>
      <div className="template-bottom">
        <h2>Education</h2>
        <TemplateItem
          name={inputValue.school}
          title={inputValue.title}
          start={inputValue.startDateEdu}
          end={inputValue.endDateEdu}
          location={inputValue.locationEdu}
        />
        <h2>Experience</h2>
        <TemplateItem
          name={inputValue.companyName}
          title={inputValue.positionTitle}
          start={inputValue.startDateExp}
          end={inputValue.endDateExp}
          location={inputValue.locationExp}
          description={inputValue.description}
        />
      </div>
    </div>
  );
}

export default CvTemplate;
