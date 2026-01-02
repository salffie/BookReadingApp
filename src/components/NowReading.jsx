import { motion } from 'framer-motion';
import styles from './NowReading.module.css';

function NowReading({ book, isPlaying, onPlayPause }) {
  if (!book) return null;
  
  const progressPercentage = (book.currentPage / book.totalPages) * 100;
  const stars = Array(5).fill(0).map((_, index) => 
    index < book.rating ? '★' : '☆'
  );
  
  return (
    <motion.div 
      className={styles.nowReading}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      key={book.id}  // 👈 Re-animate when book changes!
    >
      <h2 className={styles.sectionTitle}>Reading Now</h2>
      
      <motion.div 
        className={styles.card}
        layout  // 👈 Smooth layout changes
      >
        {/* ... rest of your card content ... */}
        <div className={styles.coverContainer}>
          <img 
            src={book.coverImg} 
            alt={`Cover of ${book.title}`}
            className={styles.cover}
          />
        </div>
        
        <div className={styles.bookInfo}>
          <div className={styles.header}>
            <div>
              <h3 className={styles.title}>{book.title}</h3>
              <p className={styles.author}>{book.author}</p>
            </div>
            <button className={styles.menuButton}>⋯</button>
          </div>
          
          <div className={styles.rating}>
            {stars.map((star, index) => (
              <motion.span 
                key={index} 
                className={styles.star}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + (index * 0.1) }}  // 👈 Stars appear one by one
              >
                {star}
              </motion.span>
            ))}
          </div>
          
          <div className={styles.progress}>
            <span className={styles.pageCount}>
              {book.currentPage}/{book.totalPages}
            </span>
            <div className={styles.progressBar}>
              <motion.div 
                className={styles.progressFill}
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 1, delay: 0.8 }}  // 👈 Progress bar fills
              />
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        className={styles.audioControls}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <span className={styles.time}>3:01</span>
        <motion.button 
          className={styles.playButton}
          onClick={onPlayPause}
          whileHover={{ scale: 1.1 }}        // 👈 Grow on hover
          whileTap={{ scale: 0.9 }}          // 👈 Shrink on click
          animate={{ rotate: isPlaying ? 0 : 0 }}  // Could add rotation
        >
          {isPlaying ? '⏸' : '▶'}
        </motion.button>
        <span className={styles.time}>4:12</span>
      </motion.div>
    </motion.div>
  );
}

export default NowReading;