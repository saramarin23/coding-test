import React from "react";

import "./List.css";

const mockPeople = [
  {
    name: "John Doe",
    age: 28,
    bio: "blablabla"
  },
  {
    name: "Linus Torvals",
    age: 49,
    bio: "bla bla bla"
  }
];

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mockPeople
    };
  }

  render() {
    console.log(this.state);
    return (
      <ul>
        {this.state.mockPeople.map((character, index) => {
          return (
            <div key={index}>
              <p>{character.name}</p>
              <span>{character.age}</span>
            </div>
          );
        })}
      </ul>
    );
  }
}

export default List;
