import { ITodo } from '../types/types';
import { instance } from './api';

export const todoAPI = {
  getTodos() {
    return instance.get<ITodo[]>('todos').then(res => res.data)
  },
  postTodo(newTodo: ITodo) {
    return instance.post<ITodo>('http://localhost:3002/todos', newTodo)
  },
  updateTodo(todoId: string, completed: boolean) {
    return instance.patch<ITodo>(`http://localhost:3002/todos/${todoId}`, { 'completed': !completed })
  },
  deleteTodo(todoId: string) {
    return instance.delete<ITodo>(`http://localhost:3002/todos/${todoId}`)
  }
}