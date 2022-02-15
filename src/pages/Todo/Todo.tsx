import { FC, useEffect, useState } from 'react';
import AddTodoBatton from '../../components/AddTodoBatton/AddTodoBatton';
import TodoFilter from '../../components/TodoFilter/TodoFilter';

import TodoList from '../../components/TodoList/TodoList';
import TodoSearch from '../../components/TodoSearch/TodoSearch';
import useSelect from '../../hooks/useSelect';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from './../../hooks/useActions';

import './todo.scss'

const Todo: FC = () => {
  const { todos, loading, error } = useTypedSelector(state => state.todo)
  const { fetchTodos } = useActions()
  const { addTodo } = useActions()
  const { completeTodo } = useActions()
  const { deleteTodo } = useActions()
  const [isAddingTodo, setIsAddingTodo] = useState<boolean>(false)
  const selectTodo = useSelect('')

  console.log('====================================');
  console.log(selectTodo.value);
  console.log('====================================');

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className='container todo'>
      <div className='todo__header'>
        <div className='todo__header-buttons'>
          <AddTodoBatton setIsAddingTodo={setIsAddingTodo} />
          <TodoFilter {...selectTodo} />
        </div>
        <div className="todo__header-search">
          <TodoSearch />
        </div>
      </div>
      <TodoList
        todos={todos}
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