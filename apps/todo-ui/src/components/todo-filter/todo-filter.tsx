import { useState } from 'react';
import { ToDoFilter } from '../todo/todo';
import styles from './todo-filter.module.scss';

type CallbackFunction = (filter: ToDoFilter) => void;

export interface TodoFilterProps {
  setFilter: CallbackFunction,
}

export function TodoFilter(props: TodoFilterProps) {
  const [filter, setActiveFilter] = useState('all');


  function setFilter(type: ToDoFilter) {
    props.setFilter(type);
    setActiveFilter(type);
  }

  function getStyles(type: ToDoFilter) {
    const result = [styles['todo-filter-item']]

    if (filter === type) {
      result.push(styles['active']);
    }

    return result.join(' ');
  }

  return (
    <div className={styles['todo-filter-container']}>
      <span>Show:</span>

      <div className={styles['todo-filter']}>
        <span className={getStyles('all')} onClick={() => setFilter('all')}>All</span>
        <span className={getStyles('completed')} onClick={() => setFilter('completed')}>Completed</span>
        <span className={getStyles('incompleted')} onClick={() => setFilter('incompleted')}>Incompleted</span>
      </div>
    </div>
  );
}

export default TodoFilter;
