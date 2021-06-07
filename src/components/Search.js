import React from "react";
const Search = (props) => {
  
  return (
    <div className="SearchArea">
      <form onSubmit={props.searchBook}>
        <label for="searchText">Start your searh here:</label>
        <input type="text" id="searchText" onChange={props.handleUserinput} />
        <button type="submit" className="btn">Search</button>
      </form>
      <label for="Sort"> Filter by Title: </label>
      <select id="Sort" defaultValue="SortTitle" onChange={props.handleTitle}>
        <option value="SortTitle">--Sort by Title--</option>
        <option value="titleasc"> Ascending (Alphabetically)</option>
        <option value="titledesc"> Descending   </option>
      </select>
      <label for="sortdate">Filter by date:</label>
      <select id="sortdate" defaultValue="SortDate" onChange={props.handleDate}>
        <option value="SortDate">--Sort by Published Date--</option>
        <option value="newest"> Newest</option>
        <option value="oldest"> Oldest  </option>
      </select>
     
    
     
   
     
    </div>
  );
};
export default Search;
