import React from "react";
const Search = (props) => {
  return (
    <div className="SearchArea">
      <form onSubmit={props.searchBook}>
        <div className="input__container">
          <input type="text" onChange={props.handleUserinput} />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};
export default Search;
