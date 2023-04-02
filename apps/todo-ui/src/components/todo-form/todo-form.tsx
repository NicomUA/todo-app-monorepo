import { FormEvent, useState } from 'react';
import TodoText from '../todo-text/todo-text';

type CallbackFunction = (filter: string) => void;

export interface TodoFormProps {
  addTodo: CallbackFunction,
}

export function TodoForm(props: TodoFormProps) {
  const [title, setTitle] = useState('');

  function handleAdd(e: FormEvent) {
    e.preventDefault();
    props.addTodo(title);
    setTitle('');
  }

  return (
    <div className='todo-add-form'>
      <form onSubmit={handleAdd}>
        <TodoText type='text' placeholder='Add new item' value={title} onChange={(e) => setTitle(e.target.value)} />
      </form>
    </div>
  );
}

export default TodoForm;
