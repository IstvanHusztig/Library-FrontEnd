import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UnshelvedBooksComponent = () => {
  const [booksData, setBooksData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5015/Book/GetBooksThatAreOffTheShelve')
      .then((response) => {
        setBooksData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  if (!booksData) {
    return <div>Loading...</div>;
  }

  

    return (
            <div className='unshelved-box'>
                {booksData.map((book) => (
                    <div key={book.id} className='bookitem'>{book.id}-{book.title}</div>
                ))}
            </div>
    );
};

export default UnshelvedBooksComponent;
