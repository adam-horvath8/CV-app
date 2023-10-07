import React from "react";
import TemplateItem from "./small-components/TemplateItem";

function CvTemplate({ inputValue, educationForms, experienceForms }) {
  console.log(experienceForms, "experienceForms");
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
        {educationForms.length > 0 &&
          educationForms.map((item) => (
            <TemplateItem
              key={item.id} // Don't forget to add a unique key for each item in a list
              name={item.school}
              title={item.degree}
              start={item.startDate}
              end={item.endDate}
              location={item.location}
            />
          ))}

        <h2>Experience</h2>
        {experienceForms.length > 0 &&
          experienceForms.map((item) => (
            <TemplateItem
              key={item.id}
              name={item.companyName}
              title={item.positionTitle}
              start={item.startDateExp}
              end={item.endDateExp}
              location={item.locationExp}
              description={item.description}
            />
          ))}
      </div>
    </div>
  );
}

export default CvTemplate;
