// src/components/BookList.jsx

import BookCard from './BookCard';
import { books } from '../data/books';
import styles from './BookList.module.css';

const BookList = ({ books, onBookSelected }) => { // 👇 NEW: Function to handle book selection
  return (
    <div className={styles.bookList}>
      <h2>Reading Now</h2>
      
      <div className={styles.booksContainer}>
        {/* TODO: Use .map() to create a BookCard for each book */}
        {books.map((book) => {
          return (
            // What goes here? Think about:
            // 1. What component to render?
            // 2. What props does it need?
            // 3. Don't forget the key prop!
            <BookCard 
              key={book.id} 
              title={book.title} 
              author={book.author} 
              coverImg={book.coverImg} 
              onClick={() => onBookSelected(book)} // 👈 NEW: Call the function when clicked
            />
          );
        })}
      </div>
    </div>
  );
}

export default BookList;