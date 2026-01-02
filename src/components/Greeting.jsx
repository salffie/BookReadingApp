import styles from './Greeting.module.css';
import { motion } from 'framer-motion';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

/*
const Greeting = ({ greeting, subtitle }) => {
  return (
    <div className={styles.greeting}>
      <h1>{greeting}</h1>
      <p>{subtitle}</p>
    </div>
  );
};*/

const Greeting = ({ greeting, subtitle }) => {
  return (
    <motion.div 
      className={styles.greeting}
      initial={{ opacity: 0, y: 20 }}       // 👈 Start below
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}  // 👈 Delayed start
    >
      <h1>{greeting}</h1>
      <p>{subtitle}</p>
    </motion.div>
  );
}


export default Greeting;