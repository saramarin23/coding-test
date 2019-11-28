import React from "react";

import "./Card.scss";

const Card = props => {
  const { employee } = props;
  return (
    <li key={employee.id} className="employee__card">
      <div className="employee__card--basicinfo">
        <img
          src={employee.image}
          alt={employee.name}
          className="employee__card--photo"
        />
        <p className="employee__card--name">{employee.name}</p>
      </div>
      <div>
        <span className="employee__card--age">{employee.age} years old</span>
      </div>
    </li>
  );
};

export default Card;
