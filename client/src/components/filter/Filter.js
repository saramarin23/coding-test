import React from "react";

import "./Filter.scss";

const Filter = props => {
  const { searchEmployee } = props;
  return (
    <div className="input__container">
      <input
        className="input"
        type="search"
        placeholder="Search here"
        onChange={searchEmployee}
      />
    </div>
  );
};

export default Filter;
