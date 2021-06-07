import React from "react";
const Search = (props) => {
  
  return (
    <div className="SearchArea">
      <form onSubmit={props.searchBook}>
        <input type="text" onChange={props.handleUserinput} />
        <button type="submit" className="btn">Search</button>
      </form>
      <label> Filter: </label>
      <select defaultValue="SortTitle" onChange={props.handleTitle}>
        <option value="SortTitle">--Sort by Title--</option>
        <option value="titleasc"> Ascending (Alphabetically)</option>
        <option value="titledesc"> Descending   </option>
      </select>
      <select defaultValue="SortDate" onChange={props.handleDate}>
        <option value="SortDate">--Sort by Published Date--</option>
        <option value="newest"> Newest</option>
        <option value="oldest"> Oldest  </option>
      </select>
     
    
     
   
     
    </div>
  );
};
export default Search;
