import React from 'react';

const TodoItem = ({ todo, onToggleDone, onDelete }) => {
  const { id, description, done } = todo;

  const handleToggleDone = () => {
    onToggleDone(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <li style={{ textDecoration: done ? 'line-through' : 'none' }}>
      <input type="checkbox" checked={done} onChange={handleToggleDone} />
      {description}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;