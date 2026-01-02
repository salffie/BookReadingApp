// src/components/BookCard.jsx
import styles from './BookCard.module.css';

function BookCard({ title, author, coverImg, onClick }) { // 👇 NEW: Add onClick prop
  return (
    <div className={styles.bookCard} onClick={onClick}> {/* 👇 NEW: Add onClick handler */}
      <img src={coverImg} alt={`Cover of ${title}`} />
      <h3>{title}</h3>
      <p>{author}</p>
    </div>
  );
}

export default BookCard;

