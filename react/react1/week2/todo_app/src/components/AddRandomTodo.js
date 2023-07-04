import React from 'react';

const AddRandomTodo = ({ onAddRandomTodo }) => {
  const handleAddRandomTodo = () => {
    onAddRandomTodo();
  };

  return (
    <button onClick={handleAddRandomTodo}>Add todo</button>
  );
};

export default AddRandomTodo;