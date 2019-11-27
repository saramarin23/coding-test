import React from "react";
import Home from "./pages/homepage/Home";
import ProfilePage from "./pages/profile-page/ProfilePage";
import fetchEmployees from "./service/employees";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      query: ""
    };
    this.searchEmployee = this.searchEmployee.bind(this);
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

  searchEmployee(e) {
    const value = e.currentTarget.value;
    this.setState({ query: value });
  }

  render() {
    const { employees, query } = this.state;
    console.log(query);
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <Home
                  employees={employees}
                  query={query}
                  searchEmployee={this.searchEmployee}
                />
              );
            }}
          />
          <Route
            path="/employee/:id"
            render={routerProps => {
              return (
                <ProfilePage routerProps={routerProps} employees={employees} />
              );
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
