import styles from './Form.module.css';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const emailError = {
    backgroundColor: 'hsla(4, 100%, 67%, 0.4)',
    borderColor: 'hsla(4, 100%, 67%)',
    color: 'rgb(213, 81, 72)',
    fontWeight: 700,
  };
  return (
    <form
      className={styles.form__container}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <label>
        Email address{' '}
        {errors.email?.type === 'required' && (
          <p className={styles.error}>Email is required</p>
        )}
        {errors.email?.type === 'pattern' && (
          <p className={styles.error}>Email is not correct</p>
        )}
      </label>
      <input
        style={{
          ...(errors.email?.type === 'pattern' && emailError),
          ...(errors.email?.type === 'required' && emailError),
        }}
        type='text'
        {...register('email', {
          required: true,
          pattern: /\S+@\S+\.\S+/,
        })}
        placeholder='email@company.com'
      />
      <input type='submit' value='Subscribe to monthly newsletter' />
    </form>
  );
};

export default Form;
