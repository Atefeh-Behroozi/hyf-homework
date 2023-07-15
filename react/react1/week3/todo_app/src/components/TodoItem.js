import React, { useState } from 'react';

const TodoItem = ({ todo, onToggleDone, onDelete, onEdit }) => {
  const { id, description, done, deadline } = todo;
  const [isEditing, setIsEditing] = useState(false);
  const [updatedDescription, setUpdatedDescription] = useState(description);
  const [updatedDeadline, setUpdatedDeadline] = useState(deadline);

  const handleToggleDone = () => {
    onToggleDone(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (updatedDescription && updatedDeadline) {
      onEdit(id, updatedDescription, updatedDeadline);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedDescription(description);
    setUpdatedDeadline(deadline);
  };

  return (
    <li style={{ textDecoration: done ? 'line-through' : 'none' }}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
          <input
            type="text"
            value={updatedDeadline}
            onChange={(e) => setUpdatedDeadline(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <input type="checkbox" checked={done} onChange={handleToggleDone} />
          {description}
          <p>Deadline: {deadline.toString()}</p>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;