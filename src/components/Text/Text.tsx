import styles from './Text.module.css';

const Text = () => {
  return (
    <div className={styles.text}>
      <h1>Stay updated!</h1>
      <p>Join 60,000+ product managers receiving monthly updates on:</p>
      <ul className={styles.list}>
        <li>
          <img src='public/images/icon-list.svg' /> Product discovery and
          building what matters
        </li>
        <li>
          <img src='public/images/icon-list.svg' />
          Measuring to ensure updates are a success
        </li>
        <li>
          <img src='public/images/icon-list.svg' />
          And much more!
        </li>
      </ul>
    </div>
  );
};

export default Text;
