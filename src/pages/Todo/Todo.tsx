import { FC, useEffect, useState } from 'react';

import TodoList from '../../components/TodoList/TodoList';
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

  useEffect(() => {
    fetchTodos()
  }, [])

  return (
    <div className='container todo'>
      <button className='addTodoButton' onClick={() => setIsAddingTodo(true)}>
        Добавить задачу
      </button>
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