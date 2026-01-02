import { motion } from 'framer-motion';
import styles from './BookList.module.css';
import BookCard from './BookCard';

function BookList({ books, onBookSelect }) {
  return (
    <motion.div 
      className={styles.bookList}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <h2>Reading Now</h2>
      
      <motion.div 
        className={styles.booksContainer}
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1  // 👈 Each child animates 0.1s apart!
            }
          }
        }}
      >
        {books.map((book, index) => {
          return (
            <BookCard 
              key={book.id}
              title={book.title} 
              author={book.author} 
              coverImg={book.coverImg}
              onClick={() => onBookSelect(book)}
              index={index}  // 👈 Pass index for animation
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
}

export default BookList;