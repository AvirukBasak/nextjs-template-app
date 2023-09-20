import printHelloWorld from '@/scripts/script';
import styles from '@/styles/BodyData.module.css';

export default function BodyData() {
  printHelloWorld();
  return (
    <div className={styles.background}>
      <h1>Demo App</h1>
      <p>This is a Paragraph</p>
    </div>
  );
}
