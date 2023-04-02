import { Todo, User } from '@prisma/client';
import { createContext } from 'react';


export const ToDoContext = createContext<Todo[]>([]);
export const UserContext = createContext<User | null>(null);
