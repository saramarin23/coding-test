import React from "react";
import fetchEmployees from "../../service/employees";
import Card from "../employee-card/Card";
import { Link } from "react-router-dom";

import "./List.scss";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
  }

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees() {
    fetchEmployees().then(employees => {
      this.setState({
        ...this.state,
        employees: employees
      });
    });
  }

  render() {
    return (
      <ul className="employees-list">
        {this.state.employees.map((employee, index) => {
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
  }
}

export default List;
