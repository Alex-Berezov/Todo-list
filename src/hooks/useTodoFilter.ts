import { useState, useEffect } from 'react';
import { ITodo } from '../types/types';

export default function useTodoFilter(todos: any[], status: string) {
  const [filteredTodos, setFilteredTodos] = useState<Array<ITodo>>(todos)

  useEffect(() => {
    setFilteredTodos(todos)
  }, [todos])

  const todoFilter = (status: string) => {
    switch (status) {
      case 'done':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;

      case 'inProgress':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;

      case 'all':
        setFilteredTodos(todos)
        break;

      default:
        setFilteredTodos(todos)
        break;
    }
  }

  return { todoFilter, filteredTodos }
}