import { motion } from 'framer-motion';  // 👈 Import motion
import styles from './Header.module.css';

const Header = ({ searchTerm, onSearchChange }) => {
  return (
    <motion.header 
      className={styles.header}
      initial={{ opacity: 0, y: -20 }}      // 👈 Start invisible, above
      animate={{ opacity: 1, y: 0 }}        // 👈 Fade in, slide down
      transition={{ duration: 0.5 }}        // 👈 Takes 0.5 seconds
    >
      <div className={styles.headerLeft}>
        <span role="img" aria-label="search">🔍</span>
        <input 
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className={styles.searchInput}
        />
      </div>
      
      <div className={styles.headerCenter}>
        <span role="img" aria-label="book">📚</span>
      </div>
      
      <div className={styles.headerRight}>
        <span role="img" aria-label="user">👤</span>
      </div>
    </motion.header>
  );
}

export default Header;