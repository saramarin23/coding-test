import React from "react";
import Header from "../../components/header/Header";
import List from "../../components/employees-list/List";

const Home = props => {
  // console.log(props);
  const { employees } = props;
  return (
    <React.Fragment>
      <Header />
      <List employees={employees} />
    </React.Fragment>
  );
};

export default Home;
