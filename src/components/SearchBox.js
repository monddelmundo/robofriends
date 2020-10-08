import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  console.log("searchfield");
  //pa = padding, ba = border all sides, b = border, bg = background
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default React.memo(SearchBox);
