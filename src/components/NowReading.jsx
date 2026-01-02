import styles from './NowReading.module.css';

function NowReading({ book, isPlaying, onPlayPause }) {  // 👈 Add new props
  if (!book) return null;
  
  const progressPercentage = (book.currentPage / book.totalPages) * 100;
  const stars = Array(5).fill(0).map((_, index) => 
    index < book.rating ? '★' : '☆'
  );
  
  return (
    <div className={styles.nowReading}>
      <h2 className={styles.sectionTitle}>Reading Now</h2>
      
      <div className={styles.card}>
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
              <span key={index} className={styles.star}>{star}</span>
            ))}
          </div>
          
          <div className={styles.progress}>
            <span className={styles.pageCount}>
              {book.currentPage}/{book.totalPages}
            </span>
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.audioControls}>
        <span className={styles.time}>3:01</span>
        <button 
          className={styles.playButton}
          onClick={onPlayPause}  // 👈 Add click handler
        >
          {isPlaying ? '⏸' : '▶'}  {/* 👈 Change icon based on state */}
        </button>
        <span className={styles.time}>4:12</span>
      </div>
    </div>
  );
}

export default NowReading;
