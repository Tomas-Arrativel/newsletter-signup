import { Form, Text } from '../../components/exports';
import styles from './TextContainer.module.css';
const TextContainer = () => {
  return (
    <div className={styles.text__container}>
      <Text />
      <Form />
    </div>
  );
};

export default TextContainer;
