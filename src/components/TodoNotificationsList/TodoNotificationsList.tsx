import React, { FC } from 'react';
import { error } from '../../types/types';

interface TodoLotificationsListProps {
  isAddingTodo: boolean
  addTodoInput: any
  error: error
}

const TodoLotificationsList: FC<TodoLotificationsListProps> = ({
  isAddingTodo, addTodoInput, error
}) => {
  return (
    <div className='errors-list'>
      {error && <span className='todoList__item-error-message'>{error}</span>}
      {
        isAddingTodo && addTodoInput.isTouched && addTodoInput.isEmpty &&
        <span className='todoList__item-error-message'>{addTodoInput.errors}</span>
      }
      {
        isAddingTodo && addTodoInput.maxLengthError &&
        <span className='todoList__item-error-message'>{addTodoInput.errors}</span>
      }
      {
        isAddingTodo && addTodoInput.uniqueTaskError &&
        <span className='todoList__item-error-message'>{addTodoInput.errors}</span>
      }
    </div>
  );
};

export default TodoLotificationsList;