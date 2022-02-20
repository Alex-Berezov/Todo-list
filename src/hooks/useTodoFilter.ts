import { useState, useEffect } from 'react';
import { ITodo } from '../types/types';

export default function useTodoFilter(todos: Array<ITodo>, status: string) {
  const [sortedTodos, setSortedTodos] = useState<Array<ITodo>>(todos)

  useEffect(() => {
    setSortedTodos(todos)
  }, [todos])

  const todoSort = (status: string) => {
    switch (status) {
      case 'done':
        setSortedTodos(todos.filter(todo => todo.completed === true))
        break;

      case 'inProgress':
        setSortedTodos(todos.filter(todo => todo.completed === false))
        break;

      case 'all':
        setSortedTodos(todos)
        break;

      default:
        setSortedTodos(todos)
        break;
    }
  }

  return { todoSort, sortedTodos }
}