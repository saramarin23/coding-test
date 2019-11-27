import React from "react";
// import fetchEmployees from "../../service/employees";
import Card from "../employee-card/Card";

import { Link } from "react-router-dom";

import "./List.scss";

const List = props => {
  const { employees, query } = props;
  return (
    <ul className="employees-list">
      {employees
        .filter(myEmployee =>
          myEmployee.name.toLowerCase().includes(query.toLowerCase())
        )
        .map((employee, index) => {
          return (
            <Link
              key={index}
              to={`/employee/${employee.id}`}
              className="employee__link"
            >
              <Card key={index} employee={employee} />
            </Link>
          );
        })}
    </ul>
  );
};

export default List;
