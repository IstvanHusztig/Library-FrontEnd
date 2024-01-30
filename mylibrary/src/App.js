import React from 'react';
import ShelfComponent from './Components/BookShelveComponent';
import UnShelvedBooks from './Components/UnshelvedBooksComponent';
import './Components/BookShelveComponent.css';
import './Components/UnshelvedBooksComponent.css';

const App = () => {
  return (
    <div>
      <header>
      <h3>Categories</h3>
      <hr size="2"/>
      </header>

      <main>
        <div>
          <ShelfComponent />
        </div>
      </main>

      <footer>
        <h3>Taken out for reading</h3>
        <hr size="2"/>
        <UnShelvedBooks />
      </footer> 
    </div>

  );
};

export default App;