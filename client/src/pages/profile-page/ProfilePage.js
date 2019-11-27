import React from "react";
import Header from "../../components/header/Header";
import { Link } from "react-router-dom";

import "./ProfilePage.scss";

const ProfilePage = props => {
  const { routerProps, employees } = props;
  const employeeID = routerProps.match.params.id;
  const employee = employees.filter(employee => employee.id === employeeID);
  if (employee[0]) {
    const { image, name, age, bio } = employee[0];
    return (
      <React.Fragment>
        <Header />
        <div className="employee__details">
          <div className="employee__details-basicdata">
            {/* <div className="employee-img_container"> */}
            <img className="employee__details-img" src={image} alt={name} />
            {/* </div> */}
            <div className="employee-details-text">
              <h2>Name: {name}</h2>
              <p className="employee__age">Age: {age}</p>
            </div>
          </div>
          <div>
            <p>Bio:</p>
            <p className="employee__bio">{bio}</p>
          </div>
          <button className="employee__details-button">
            <Link to="/">Close</Link>
          </button>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Header />
        <div className="employee__details">
          <p>Ese empleado no existe</p>
          <button className="employee__details-button">
            <Link to="/">Close</Link>
          </button>
        </div>
      </React.Fragment>
    );
  }
};

export default ProfilePage;
