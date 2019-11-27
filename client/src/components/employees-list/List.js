import React from "react";
import fetchEmployees from "../../service/employees";
import Card from "../employee-card/Card";

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
          return <Card key={index} employee={employee} />;
        })}
      </ul>
    );
  }
}

export default List;
