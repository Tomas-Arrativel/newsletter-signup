import { Dispatch, SetStateAction } from 'react';
import { Form, Text } from '../../components/exports';
import styles from './TextContainer.module.css';

interface TextContainerProps {
  setActive: Dispatch<SetStateAction<boolean>>;
  setData: Dispatch<SetStateAction<any>>;
}

const TextContainer = ({ setActive, setData }: TextContainerProps) => {
  return (
    <div className={styles.text__container}>
      <Text />
      <Form setActive={setActive} setData={setData} />
    </div>
  );
};

export default TextContainer;
