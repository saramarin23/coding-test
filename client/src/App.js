import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import List from "./components/employees-list/List";

// import getDataFromServer from "./service/data";
// const URL = "./service/employees.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // mockPeople
    };
  }

  // componentDidMount() {
  //   fetch(mockPeople).then(response => response.json());
  //   //    {
  //   //   method: "GET"
  //   // })
  //   //   .then(res => res.json())
  //   //   .then(res => {
  //   //     if (res.success) {
  //   //       //mensaje correcto
  //   //     } else {
  //   //       //mensaje de error
  //   //     }
  //   //   })
  //   //   .catch(function() {
  //   //     alert("Can't connect to backend try latter");
  //   //   });
  // }

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
