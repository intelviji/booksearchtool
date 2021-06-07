import React, { Component } from "react";
import Search from "./Search";
import Loading from "./Loading";
import SearchList from "./SearchList";
import IconRender from "./IconRender";
class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      userInput: "",
      loading: false,
      sortTitle: "SortTitle",
      sortDate: "SortDate",
      viewOpt: "list"
    };
  }
  searchBook = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const apiUrl =
      "https://openlibrary.org/search.json?q=" + this.state.userInput;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const formattedBooks = this.formatData(data.docs);
        this.setState({ books:formattedBooks, loading: false });
        //console.log(this.state.books);
      });
  };
  handleUserinput = (event) => {
    this.setState({ userInput: event.target.value });
  };
  formatData = (data) => {
    const imgurl = "https://covers.openlibrary.org/b/olid/";
    const default_image = "https://image.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg";
    const formattedData = data.map((book) => {
      //A place to verify the property publish date and if it is not available in api then set default value as zeros.
      if(book.hasOwnProperty('publish_date') === false)
      {
         book.hasOwnProperty('first_publish_year') ?  book.publish_date=[book.first_publish_year] : book.publish_date = ["0000"];
      }
      //Place to get the lates publish date from the list of publish dates.
      book.latest_publish_date = this.validateDate(book.publish_date);

      // cover_edition_key is the key value tothe cover image of book. 
      if(book.hasOwnProperty('cover_edition_key') === false)
      {
          if(book.hasOwnProperty('edition_key')) 
            book.imagelink = {small: imgurl + book.edition_key[0] + "-S.jpg",medium: imgurl +book.edition_key[0] + "-M.jpg",large: imgurl + book.edition_key[0] + "-L.jpg"};
          else
            book.imagelink = {small:default_image,medium:default_image,large:default_image};
      }
      else
      book.imagelink = {small: imgurl + book.cover_edition_key + "-S.jpg",medium: imgurl + book.cover_edition_key + "-M.jpg",large: imgurl + book.cover_edition_key + "-L.jpg"};
  

       return book;
     });
     return formattedData;
  }
  /* API returns the publish_date data in an array of strings
  * This function returns the latest publication date from array of objects.
  * by coverting string to date format and sorting them
  */
 validateDate = (datearr) => {
  var newdate = [];
  if(datearr) {
  datearr.forEach((date) =>  newdate.push({original:date, neww: new Date(date)}));
  //console.log("new date=" + newdate);
  newdate.sort(function(a, b){return b.neww - a.neww});
  }
  else
    return "date is undefined"; 
  
  return newdate[0].original;
 }
 handleTitle = (e) => {
this.setState({sortTitle: e.target.value});

 }
 handleDate = (e) => {
  this.setState({sortDate: e.target.value});
   }
   handleView = () =>{
     if(this.state.viewOpt === "list")
     this.setState({viewOpt:"grid" });
    else  
    this.setState({viewOpt:"list" });
   }
  render() {
    // sort the Books stored in state based on the sorting option we select 
    var sortedBooks = this.state.books.sort((a,b) => {
      var textA = a.title.toUpperCase();
      var textB = b.title.toUpperCase();
      if(this.state.sortTitle === 'titleasc')
      {
         return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
      }
      else if(this.state.sortTitle === 'titledesc')
      {
        return (textA > textB) ? -1 : (textA < textB) ? 1 : 0;
      }
    });
    sortedBooks = this.state.books.sort((a,b) => {
      var datA = new Date(a.latest_publish_date);
      var datB = new Date(b.latest_publish_date);
      
     if(this.state.sortDate === 'newest')
     {
        return datB - datA;
     }
     else if(this.state.sortDate === 'oldest')
     {
      return datA - datB;
     }
    });

    const isList = this.state.viewOpt === "list" ? true  : false;
    return (
      <div>
        <Search
          handleUserinput={this.handleUserinput}
          searchBook={this.searchBook}
          handleTitle={this.handleTitle}
          handleDate={this.handleDate}

        />
         <IconRender isList={isList}  handleView={this.handleView} viewClass={this.state.viewOpt}  />
        <Loading loading={this.state.loading} />
        <SearchList allbooks={sortedBooks} viewClass={this.state.viewOpt} />
      </div>
    );
  }
}
export default Books;