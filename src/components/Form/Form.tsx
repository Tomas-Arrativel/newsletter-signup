import styles from './Form.module.css';
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form
      className={styles.form__container}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <label>
        Email address{' '}
        {errors.email?.type === 'required' ||
          (errors.email?.type === 'pattern' && (
            <p className={styles.error}>Email is required</p>
          ))}
      </label>
      <input
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
