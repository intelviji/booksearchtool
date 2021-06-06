import React, { useEffect, useState } from "react";

const SearchList = (props) => {
  //const [imgurl, setImgurl] = useState([]);

  var imgurl = "http://covers.openlibrary.org/b/olid/";
  const data = props.allbooks;
  const ListItems = data.map((item) => (
    <li key={item.key}>
      <img src={imgurl + item.cover_edition_key + "-M.jpg"} alt={item.title} />
      <div className="content-area">
        <h2> {item.title} </h2>
        <span className="author-name">{item.author_name} </span>
      </div>
    </li>
  ));
  return (
    <div className="searchLists">
      <ul>{ListItems}</ul>
    </div>
  );
};
export default SearchList;
