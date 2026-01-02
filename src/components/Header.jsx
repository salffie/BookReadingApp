// src/components/Header.jsx
import styles from './Header.module.css';

const Header = ({ searchTerm, onSearchChange }) => {
  return (
    <header className={styles.header}>
      
      <div className={styles.headerLeft}>
        <span role="img" aria-label="search">🔍</span> 
        <input 
          type="text" 
          placeholder="Search books..." 
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
    </header>
  );
}

export default Header;