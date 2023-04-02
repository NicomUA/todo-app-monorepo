import styles from './todo-btn.module.scss';

/* eslint-disable-next-line */
export interface TodoBtnProps {
  type?: 'submit' | 'button';
  title: string;
}

export function TodoBtn(props: TodoBtnProps) {
  return (
    <div className={`${styles['todo-btn']}`}>
      <button className='Text-Style-2' type={props.type}>{props.title}</button>
    </div>
  );
}

export default TodoBtn;
