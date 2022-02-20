import React, { FC } from 'react';
import './todoSearch.scss'

interface TodoSearchProps {
  value: string
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TodoSearch: FC<TodoSearchProps> = ({ handleSearch, value }) => {
  return (
    <div className='search-block'>
      <p>Поиск:</p>
      <input type="search" value={value} onChange={handleSearch} />
    </div>
  );
};

export default TodoSearch;