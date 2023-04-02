import styles from './todo-header.module.scss';

/* eslint-disable-next-line */
export interface TodoHeaderProps {
  title?: string;
  subtitle?: string;
}

export function TodoHeader(props: TodoHeaderProps) {
  return (
    <>
      <div className={styles['logo']}>
        <img src="img/group.svg" alt="logo" className="Group" />
      </div>
      {props.title && (<h2 className={styles['title']}>{props.title}</h2>)}
      {props.subtitle && (<p className={styles['subtitle']}>{props.subtitle}</p>)}
    </>
  );
}

export default TodoHeader;
