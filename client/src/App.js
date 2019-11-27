import React from "react";
import Home from "./pages/homepage/Home";
import ProfilePage from "./pages/profile-page/ProfilePage";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Home />;
            }}
          />
          <Route
            path="/employee/:id"
            render={() => {
              return <ProfilePage />;
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
