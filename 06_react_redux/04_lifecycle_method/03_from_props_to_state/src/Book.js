import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null
    }
  }
  componentDidMount() {
    fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${this.props.isbn}8&format=json&jscmd=data`)
      .then(response => response.json())
      .then(bookData => {
        this.setState({book: Object.values(bookData)[0]})
        console.log(this.props.isbn+", 1");
      })
  }

  render() {
    return (
      <div>
        {this.state.book
          ? (
            <div>
              <div>{this.state.book.title}</div>
              <img src={this.state.book.cover.medium} />
            </div>
          )
          : null
        }
      </div>
    )
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps !== this.props) {
      fetch(`https://openlibrary.org/api/books?bibkeys=ISBN:${this.props.isbnToSearch}8&format=json&jscmd=data`)
        .then(response => response.json())
        .then(bookData => {
          this.setState({book: Object.values(bookData)[0]})
          console.log(this.props.isbn+", 2");
        })
    }
  }
}

export default Book;
