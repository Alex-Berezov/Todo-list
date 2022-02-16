import { FC, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { error, ITodo } from './../../types/types'
import TodoListItem from './../TodoListItem/TodoListItem';
import AddTodoForm from './../AddTodoForm/AddTodoForm';
import useInput from './../../hooks/useInput';
import TodoNotificationsList from '../TodoNotificationsList/TodoNotificationsList';
import Loader from '../../assets/Loader/Loader';

import './todoList.scss'

interface TodoListProps {
  todos: ITodo[]
  loading: boolean
  error: error
  isAddingTodo: boolean
  setIsAddingTodo: (bool: boolean) => void
  addTodo: (obj: ITodo) => void
  completeTodo: (id: string, completed: boolean) => void
  deleteTodo: (todoId: string) => void
}

const TodoList: FC<TodoListProps> = ({
  todos, loading, error, isAddingTodo, addTodo, setIsAddingTodo, completeTodo, deleteTodo
}) => {
  const addTodoInput = useInput('', { isEmpty: true, maxLength: 19, uniqueTask: todos })

  const toggleComplitedTodo = (id: string, completed: boolean) => {
    completeTodo(id, completed)
  }

  const handleDeleteTodo = (todoId: string) => {
    deleteTodo(todoId)
  }

  const handleSentTask = () => {
    addTodo({ id: uuidv4(), title: addTodoInput.value, completed: false })
    setIsAddingTodo(false)
    addTodoInput.setValue('')
  }

  return (
    <div className='todoList'>
      <TodoNotificationsList
        addTodoInput={addTodoInput}
        isAddingTodo={isAddingTodo}
        error={error}
      />
      {
        isAddingTodo
          ? (
            <AddTodoForm
              {...addTodoInput}
              handleSentTask={handleSentTask}
            />
          )
          : null
      }
      {
        !todos.length && <h3>Задач пока нет...</h3>
      }
      {
        loading
          ? <Loader />
          : todos?.map(todo =>
            <TodoListItem
              key={todo.id}
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              toggleComplitedTodo={toggleComplitedTodo}
            />
          ).reverse()
      }
    </div>
  );
};

export default TodoList;