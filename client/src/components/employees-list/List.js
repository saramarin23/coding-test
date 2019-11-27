import React from "react";
import fetchEmployees from "../../service/employees";

import "./List.css";

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
        employees: employees
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <ul>
        {this.state.employees.map((employee, index) => {
          return (
            <div key={index}>
              <p>{employee.name}</p>
              <span>{employee.age}</span>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default List;
