import React from "react";

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
      <div className="template-bottom">fdhsjakfhka</div>
    </div>
  );
}

export default CvTemplate;
