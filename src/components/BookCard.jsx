import { motion } from 'framer-motion';
import styles from './BookCard.module.css';

function BookCard({ title, author, coverImg, onClick }) {
  return (
    <motion.div 
      className={styles.bookCard}
      onClick={onClick}
      variants={{
        hidden: { opacity: 0, y: 20, scale: 0.9 },   // 👈 Start state
        visible: { opacity: 1, y: 0, scale: 1 }      // 👈 End state
      }}
      whileHover={{ 
        scale: 1.05,           // 👈 Grow on hover
        y: -5,                 // 👈 Lift up
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}  // 👈 Shrink when clicked
    >
      <img src={coverImg} alt={`Cover of ${title}`} />
      <h3>{title}</h3>
      <p>{author}</p>
    </motion.div>
  );
}

export default BookCard;