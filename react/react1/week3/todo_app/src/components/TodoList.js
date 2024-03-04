import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onToggleDone, onDelete, onEdit }) => {
  const renderTodoItems = () => {
    if (todos.length === 0) {
      return <p>No items...</p>;
    }

    return (
      <>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleDone={onToggleDone}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </>
    );
  };

  return (
    <div>
      {renderTodoItems()}
    </div>
  );
};

export default TodoList;