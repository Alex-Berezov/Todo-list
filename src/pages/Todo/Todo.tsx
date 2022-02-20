import { FC, useEffect, useState } from 'react';
import AddTodoBatton from '../../components/AddTodoBatton/AddTodoBatton';
import TodoFilter from '../../components/TodoFilter/TodoFilter';
import TodoList from '../../components/TodoList/TodoList';
import TodoSearch from '../../components/TodoSearch/TodoSearch';
import useSelect from '../../hooks/useSelect';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from './../../hooks/useActions';
import useTodoFilter from './../../hooks/useTodoFilter';

import './todo.scss'

const Todo: FC = () => {
  const { todos, loading, error } = useTypedSelector(state => state.todo)
  const { fetchTodos } = useActions()
  const { addTodo } = useActions()
  const { completeTodo } = useActions()
  const { deleteTodo } = useActions()
  const [isAddingTodo, setIsAddingTodo] = useState<boolean>(false)
  const selectTodo = useSelect('')
  const { todoFilter, filteredTodos } = useTodoFilter(todos, selectTodo.value)


  useEffect(() => {
    fetchTodos()
  }, [])

  useEffect(() => {
    todoFilter(selectTodo.value)
  }, [selectTodo.value])

  return (
    <div className='container todo'>
      <div className='todo__header'>
        <div className='todo__header-buttons'>
          <AddTodoBatton setIsAddingTodo={setIsAddingTodo} />
          <TodoFilter {...selectTodo} />
          <TodoSearch />
        </div>
      </div>
      <TodoList
        todos={filteredTodos}
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