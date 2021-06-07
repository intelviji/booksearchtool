import React from "react";
const SearchList = (props) => {
  //const [imgurl, setImgurl] = useState([]);
  const data = props.allbooks;
  console.log("data= ", data);
  const ListItems = data.map((item) => (
   // console.log("item",item);
    <li key={item.key}>
      <img src={item.imagelink.medium} alt={item.title} />
      <div className="content-area">
        <h2> {item.title} </h2>
        <span className="author-name">Author:{item.author_name} </span>
         <p>Published Date: {item.latest_publish_date}</p>
       
      </div>
    </li>
  ));
  return (
    <div className="searchLists">
      <ul className={props.viewClass}>
        {ListItems}</ul>
    </div>
  );
};
export default SearchList;
