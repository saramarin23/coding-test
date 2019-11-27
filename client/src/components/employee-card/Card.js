import React from "react";

import "./Card.scss";

const Card = props => {
  const { employee } = props;
  return (
    <li key={employee.id} className="employee_card">
      <div className="employee_card-basicinfo">
        <img
          src={employee.image}
          alt={employee.name}
          className="employee_card-photo"
        />
        <p className="employee_card-name">{employee.name}</p>
      </div>
      <div>
        <span className="employee_card-age">{employee.age} years old</span>
      </div>
    </li>
  );
};

export default Card;
