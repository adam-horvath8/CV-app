import React from "react";

function TemplateItem({ name, title, start, end, location, description }) {
  return (
    <div className="template-item">
      <div className="item-location">
        <div className="date-div">
          <span>{start} / </span>
          <span>{end}</span>
        </div>
        <span>{location}</span>
      </div>
      <div className="item-info">
        <h3>{name}</h3>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default TemplateItem;
