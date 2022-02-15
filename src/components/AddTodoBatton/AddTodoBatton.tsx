import React, { FC } from 'react';
import './addTodoBatton.scss'

interface AddTodoBattonProps {
  setIsAddingTodo: (bol: boolean) => void
}

const AddTodoBatton: FC<AddTodoBattonProps> = ({ setIsAddingTodo }) => {
  return (
    <button className='addTodoButton' onClick={() => setIsAddingTodo(true)}>
      Добавить задачу
    </button>
  );
};

export default AddTodoBatton;