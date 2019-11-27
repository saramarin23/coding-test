import React from "react";

import "./Card.scss";

const Card = props => {
  const { employee } = props;
  return (
    <li key={employee.id} className="employee_card">
      <img
        src={employee.image}
        alt={employee.name}
        className="employee_card-photo"
      />
      <div>
        <p className="employee_card-name">{employee.name}</p>
        <span className="employee_card-age">{employee.age} years old</span>
      </div>
    </li>
  );
};

export default Card;
