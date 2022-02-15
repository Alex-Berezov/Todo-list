import React, { FC } from 'react';
import './todoSearch.scss'

const TodoSearch: FC = () => {
  return (
    <div className='search-block'>
      <p>Поиск:</p>
      <input type="search" />
    </div>
  );
};

export default TodoSearch;