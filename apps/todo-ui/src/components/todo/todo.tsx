import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import ToDoList from './todo-list';
import { ToDoApi } from '../../services/todo.api.service';
import { ToDoContext } from '../../contexts';
import { UserApi } from '../../services/user.api.service';
import TodoForm from '../todo-form/todo-form';
import { Todo } from '@prisma/client';
import TodoFilter from '../todo-filter/todo-filter';
import TodoHeader from '../todo-header/todo-header';
import FormError from '../form-error/form-error';

export type ToDoFilter = 'all' | 'completed' | 'incompleted';

export function TodoContainer() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<ToDoFilter>('all');
  const [error, setError] = useState<FormError | null>(null);

  const navigate = useNavigate();
  useEffect(() => {
    if (!UserApi.isAuthenticated()) {
      navigate("login");
    }
  }, [])

  useEffect(() => {
    ToDoApi
      .getAll(filter)
      .then((data) => {
        setTodos(data);
      })
      .catch((e) => {
        if (e.response.status === 401) {
          navigate('login');
        }
      });
  }, [filter]);


  async function addTodo(title: string) {
    try {
      const todo: Todo = await ToDoApi.createTodo(title);
      setTodos([...todos, todo])
      setError(null);
    } catch (e: any) {
      if (e.response.status === 400) {
        setError({ status: 400, error: e.response.data.error, message: e.response.data.message })
      }
      else setError(e.response)

      throw new Error(e);
    }

  }

  async function deleteToDo(id: string) {
    await ToDoApi.deleteTodo(id);
    const todos = await ToDoApi.getAll(filter)
    setTodos(todos);
  }

  async function setCompleted(id: string, completed: boolean) {
    await ToDoApi.completeTodo(id, completed);
    const todos = await ToDoApi.getAll(filter)
    setTodos(todos);
  }

  function setToDoFilter(type: ToDoFilter) {
    setFilter(type);
  }

  return (
    <ToDoContext.Provider value={todos}>
      <div>
        {error && (<FormError {...error}></FormError>)}

        <TodoHeader title='ToDo list' />

        <TodoForm addTodo={addTodo}></TodoForm>
        <ToDoList deleteToDo={deleteToDo} setCompleted={setCompleted}></ToDoList>
        <TodoFilter setFilter={setToDoFilter}></TodoFilter>
      </div>
    </ToDoContext.Provider>
  );
}

export default TodoContainer;
