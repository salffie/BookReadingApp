import styles from './Greeting.module.css';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
};

const Greeting = ({ greeting, subtitle }) => {
  return (
    <div className={styles.greeting}>
      <h1>{greeting}</h1>
      <p>{subtitle}</p>
    </div>
  );
};


export default Greeting;