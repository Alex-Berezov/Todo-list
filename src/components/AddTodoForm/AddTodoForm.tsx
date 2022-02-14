import React, { FC } from 'react';

interface AddTodoFormProps {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void
  handleSentTask: () => void
}

const AddTodoForm: FC<AddTodoFormProps> = ({ value, onChange, onBlur, handleSentTask }) => {
  return (
    <div className="todoList__item">
      <input
        className="todoList__item-text-input"
        type="text"
        autoFocus
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      <button className='todoList__item-sent-button' onClick={handleSentTask}>Добавить</button>
    </div>
  );
};

export default AddTodoForm;