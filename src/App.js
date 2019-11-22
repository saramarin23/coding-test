import React from "react";
import "./App.css";
import Header from "./components/header/Header";

// import getDataFromServer from "./service/data";
// const URL = "./service/employees.json";

const mockPeople = [
  {
    name: "John Doe",
    age: 28
  },
  {
    name: "Linus Torvals",
    age: 49
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mockPeople
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
    console.log(this.state);
    return (
      <div className="App">
        <Header />
        <main></main>
      </div>
    );
  }
}

export default App;
