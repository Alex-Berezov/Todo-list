import { FC } from 'react';
import { ITodo } from './../../types/types';

interface TodoListItemProps {
  todo: ITodo
  toggleComplitedTodo: (todoId: string) => void
  handleDeleteTodo: (todoId: string) => void
}

const TodoListItem: FC<TodoListItemProps> = ({ todo, handleDeleteTodo, toggleComplitedTodo }) => {
  return (
    <form className="todoList__item">
      <p className={todo.completed ? 'completed' : ''}>{todo.title}</p>
      <input
        className='checkbox'
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplitedTodo(todo.id)}
      />
      <span onClick={() => handleDeleteTodo(todo.id)}>X</span>
    </form>
  );
};

export default TodoListItem;