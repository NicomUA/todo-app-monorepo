import { Todo } from '@prisma/client'
import { ToDoFilter } from '../components/todo/todo'
import { api } from './base.api'

export const ToDoApi = {
  getAll: async (filter?: ToDoFilter): Promise<Todo[]> => {
    const response = await api().request({
      url: "todo/",
      method: "GET",
    })

    let result;

    switch (filter) {
      case 'completed': {
        result = response.data.filter((todo: Todo) => todo.done === true);
        break
      }

      case 'incompleted': {
        result = response.data.filter((todo: Todo) => todo.done === false);
        break
      }

      default:
        result = response.data;
    }

    return result;
  },

  createTodo: async (title: string): Promise<Todo> => {
    const response = await api().request({
      url: "todo",
      method: "POST",
      data: {
        title,
      }
    })

    return response.data
  },

  completeTodo: async (id: string, done: boolean): Promise<Todo> => {
    const response = await api().request({
      url: `todo/${id}`,
      method: "PATCH",
      data: {
        done,
      }
    })

    return response.data
  },

  deleteTodo: async (id: string): Promise<Todo> => {
    const response = await api().request({
      url: `todo/${id}`,
      method: "DELETE",
    })

    return response.data
  },
}
