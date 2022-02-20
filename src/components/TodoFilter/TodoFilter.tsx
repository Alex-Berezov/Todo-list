import React, { FC } from 'react'
import './todoFilter.scss'

interface TodoFilterProps {
  value: string
  chengeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

const TodoFilter: FC<TodoFilterProps> = ({ value, chengeSelect }) => {
  return (
    <div className='todo-filter'>
      <p>Фильтр: </p>
      <select value={value} onChange={chengeSelect}>
        <option value="all">Все</option>
        <option value="done">Завершённые</option>
        <option value="inProgress">В процессе</option>
      </select>
    </div>
  );
};

export default TodoFilter;