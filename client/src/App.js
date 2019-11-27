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
    const { employees } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Home employees={employees} />;
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
