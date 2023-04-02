import styles from './todo-text.module.scss';

/* eslint-disable-next-line */
export interface TodoTextProps {
  type?: 'password' | 'text' | 'email';
  value: string | number;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TodoText(props: TodoTextProps) {
  return (
    <div>
      <input
        className={styles['todo-input']}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}

export default TodoText;
