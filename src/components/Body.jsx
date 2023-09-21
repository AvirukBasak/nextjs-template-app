import printHelloWorld from '@/scripts/script';
import styles from '@/styles/Body.module.css';

export default function Body() {
  printHelloWorld();
  return (
    <>
      <div className={styles.body}>
        <h1>Demo App</h1>
        <p>This is a Paragraph</p>
        <img src="/images/background.jpg" />
      </div>
    </>
  );
}
