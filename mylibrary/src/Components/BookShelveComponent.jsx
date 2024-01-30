import React, { Component } from 'react';
import axios from 'axios';

class BookShelveComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: null,
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5015/Book/GetBookTitelsByShelfs')
      .then((response) => {
        this.setState({ booksData: response.data });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (!this.state.booksData) {
      return <div>Loading...</div>;
    }

    const shelfEntries = Object.keys(this.state.booksData);

    return (
      <div id="bookshelve-div" className="book-shelves">
        {shelfEntries.map((shelfName) => (
          <div key={shelfName} className="shelf">
            <div className="shelf-title">{shelfName}</div>
            <div key={shelfName + "b"} className="box">
              {this.state.booksData[shelfName].map((book) => (
                <div key={book.id} className="bookitem">{book.id}-{book.title}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default BookShelveComponent;
