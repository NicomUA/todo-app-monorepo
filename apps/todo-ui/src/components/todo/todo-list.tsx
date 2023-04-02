import { useContext } from 'react';

import { Todo } from '@prisma/client';
import ToDoItem from './todo-item';
import { ToDoContext } from '../../contexts';

export interface TodoListProps {
  deleteToDo: (id: string) => void;
  setCompleted: (id: string, done: boolean) => void,
}


export function ToDoList(props: TodoListProps) {
  const todos: Todo[] = useContext(ToDoContext);

  return (
    <div className="form-container">
      {todos && todos.map((todo: { id: string; title: string }) => {
        return <ToDoItem key={todo.id} todo={todo} {...props}></ToDoItem>
      })}
    </div>
  );
}

export default ToDoList;
