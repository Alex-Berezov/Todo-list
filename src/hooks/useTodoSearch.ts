import { useEffect, useState } from 'react';
import { ITodo } from '../types/types';

export default function useTodoSearch(todos: Array<ITodo>, value: string) {
  const [searchedTodos, setSearchedTodos] = useState<Array<ITodo>>(todos)

  useEffect(() => {
    setSearchedTodos(todos)
  }, [todos])

  useEffect(() => {
    setSearchedTodos(todos.filter(todo => {
      return todo?.title.toLowerCase().includes(value.toLowerCase())
    }))
  }, [value])

  return { searchedTodos }
}