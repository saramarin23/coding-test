import React from "react";
import Header from "./components/header/Header";
import List from "./components/employees-list/List";
import "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <List />
      </div>
    );
  }
}

export default App;
