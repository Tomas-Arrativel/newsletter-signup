import { Dispatch, SetStateAction } from 'react';
import styles from './SuccessContainer.module.css';

interface SuccessProps {
  setActive: Dispatch<SetStateAction<boolean>>;
  data: any;
}

const SuccessContainer = ({ setActive, data }: SuccessProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <img src='images/icon-list.svg' alt='Check list icon' />
        <h2>Thanks for subscribing!</h2>
        <p>
          A confirmation email has been sent to <span>{data.email}</span>.
          please open it and click the button inside to confirm your
          subscription
        </p>
      </div>

      <button className={styles.btn} onClick={() => setActive(false)}>
        Dismiss message
      </button>
    </div>
  );
};

export default SuccessContainer;
