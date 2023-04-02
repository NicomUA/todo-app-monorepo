import { Todo } from '@prisma/client';
import styles from './todo.module.scss';

interface ToDoItem {
  todo: Todo,
  deleteToDo: (id: string) => void;
  setCompleted: (id: string, done: boolean) => void,
}

export function ToDoItem({ todo, deleteToDo, setCompleted }: ToDoItem) {
  function handleDone(e: React.ChangeEvent<HTMLInputElement>) {
    setCompleted(todo.id, e.target.checked);
  }

  return (
    <div className={`checkbox-container ${styles['Add-a-new-todo']}`}>
      <input type="checkbox" id={todo.id} defaultChecked={todo.done} onChange={handleDone} />
      <label className={styles['checkbox']} htmlFor={todo.id}>{todo.title}</label>
      <span className={styles['todo-delete']} onClick={() => deleteToDo(todo.id)}>X</span>
    </div>
  );
}

export default ToDoItem;
