import styles from './Form.module.css';

const Form = () => {
  return (
    <form className={styles.form__container}>
      <label>E-mail</label>
      <input type='text' placeholder='email@company.com' />
      <input type='submit' value='Subscribe to monthly newsletter' />
    </form>
  );
};

export default Form;