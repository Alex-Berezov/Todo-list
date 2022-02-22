import React, { FC } from 'react'

interface AddTodoBattonProps {
  setIsAddingTodo: (bol: boolean) => void
}

const AddTodoBatton: FC<AddTodoBattonProps> = ({ setIsAddingTodo }) => {
  return (
    <button className='btn-green-outlined' onClick={() => setIsAddingTodo(true)}>
      Добавить задачу
    </button>
  );
};

export default AddTodoBatton;