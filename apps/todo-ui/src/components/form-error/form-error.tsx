import styles from './form-error.module.scss';

export interface FormError {
  status: number;
  error: string;
  message: string[];
}

export function FormError({ error, status, message }: FormError) {
  return (
    <div>
      {error && (
        <div className={styles['form-error']} >
          <p>{status}: {error}</p>
          {message.map((m, i) => (
            <p key={i}>{m}</p>
          ))}
        </div>
      )
      }

    </div >
  );
}

export default FormError;
