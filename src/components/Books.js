import React, { Component } from "react";
import Search from "./Search";
import Loading from "./Loading";
import SearchList from "./SearchList";
class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      userInput: "",
      loading: false,
    };
  }
  searchBook = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const apiUrl =
      "http://openlibrary.org/search.json?q=" + this.state.userInput;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.numFound);
        console.log(data.docs);
        this.setState({ books: data.docs, loading: false });
      });
  };
  handleUserinput = (event) => {
    this.setState({ userInput: event.target.value });
  };
  render() {
    return (
      <div>
        <Search
          handleUserinput={this.handleUserinput}
          searchBook={this.searchBook}
        />
        <Loading loading={this.state.loading} />
        <SearchList allbooks={this.state.books} />
      </div>
    );
  }
}
export default Books;
