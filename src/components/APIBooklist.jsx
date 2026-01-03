import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './BookList.module.css';  // Reuse styles
import BookCard from './BookCard';

function APIBookList({ onBookSelect }) {
  const [books, setBooks] = useState([]);           // 👈 Start with empty array
  const [loading, setLoading] = useState(true);     // 👈 Track loading state
  const [error, setError] = useState(null);         // 👈 Track errors
  
  useEffect(() => {
    // This runs once when component mounts
    fetchBooks();
  }, []);
  
  const fetchBooks = async () => {
    try {
      setLoading(true);
      
      // Make API request
      const response = await fetch(
        'https://www.googleapis.com/books/v1/volumes?q=fiction&maxResults=10'
      );
      
      // Convert response to JSON
      const data = await response.json();
      
      // Transform API data to match our format
      const formattedBooks = data.items.map((item, index) => ({
        id: item.id,
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors?.[0] || 'Unknown Author',
        coverImg: item.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/200x300',
        currentPage: Math.floor(Math.random() * 100),  // Mock data
        totalPages: item.volumeInfo.pageCount || 200,
        rating: Math.floor(Math.random() * 5) + 1,
        isCurrentlyReading: index === 0  // First book is "reading"
      }));
      
      setBooks(formattedBooks);
      setLoading(false);
      
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  
  // Loading state
  if (loading) {
    return (
      <div className={styles.bookList}>
        <h2>Loading amazing books...</h2>
      </div>
    );
  }
  
  // Error state
  if (error) {
    return (
      <div className={styles.bookList}>
        <h2>Oops! Something went wrong: {error}</h2>
      </div>
    );
  }
  
  // Success - render books
  return (

    <motion.div 
      className={styles.bookList}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h2>Google books </h2>
      
      <motion.div 
        className={styles.booksContainer}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >

        {books.map((book, index) => (
          <BookCard 
            key={book.id}
            title={book.title} 
            author={book.author} 
            coverImg={book.coverImg}
            onClick={() => onBookSelect(book)}
            index={index}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default APIBookList;