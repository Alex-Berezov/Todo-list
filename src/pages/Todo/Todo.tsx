import { FC, useEffect, useState } from 'react';
import AddTodoBatton from '../../components/AddTodoBatton/AddTodoBatton';
import TodoFilter from '../../components/TodoFilter/TodoFilter';
import TodoList from '../../components/TodoList/TodoList';
import TodoSearch from '../../components/TodoSearch/TodoSearch';
import useSelect from '../../hooks/useSelect';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from './../../hooks/useActions';
import useTodoFilter from './../../hooks/useTodoFilter';
import useSearch from './../../hooks/useSearch';

import './todo.scss'
import useTodoSearch from './../../hooks/useTodoSearch';
import { ITodo } from '../../types/types';

const Todo: FC = () => {
  const { todos, loading, error } = useTypedSelector(state => state.todo)
  const { fetchTodos } = useActions()
  const { addTodo } = useActions()
  const { completeTodo } = useActions()
  const { deleteTodo } = useActions()
  const [isAddingTodo, setIsAddingTodo] = useState<boolean>(false)
  const selectTodo = useSelect('')
  const { todoSort, sortedTodos } = useTodoFilter(todos, selectTodo.value)
  const searchTodo = useSearch('')
  const { searchedTodos } = useTodoSearch(todos, searchTodo.value)
  const [filtredTodos, setFiltredTodos] = useState<Array<ITodo>>(todos)

  useEffect(() => {
    fetchTodos()
  }, [])

  useEffect(() => {
    todoSort(selectTodo.value)
  }, [selectTodo.value])

  useEffect(() => {
    setFiltredTodos(sortedTodos)
  }, [sortedTodos])

  useEffect(() => {
    setFiltredTodos(searchedTodos)
  }, [searchTodo.value, searchedTodos])

  return (
    <div className='container todo'>
      <div className='todo__header'>
        <div className='todo__header-buttons'>
          <AddTodoBatton setIsAddingTodo={setIsAddingTodo} />
          <TodoFilter {...selectTodo} />
          <TodoSearch {...searchTodo} />
        </div>
      </div>
      <TodoList
        todos={filtredTodos}
        loading={loading}
        error={error}
        isAddingTodo={isAddingTodo}
        setIsAddingTodo={setIsAddingTodo}
        addTodo={addTodo}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
      />
    </div>
  );
};

export default Todo;