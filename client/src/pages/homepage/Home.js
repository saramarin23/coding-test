import React from "react";
import Header from "../../components/header/Header";
import Filter from "../../components/filter/Filter";
import List from "../../components/employees-list/List";

const Home = props => {
  const { employees, searchEmployee, query } = props;
  return (
    <React.Fragment>
      <Header />
      <Filter searchEmployee={searchEmployee} />
      <List employees={employees} query={query} />
    </React.Fragment>
  );
};

export default Home;
