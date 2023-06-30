import React from 'react';
import TodoItem from './components/TodoItem';
import todoList from './components/TodoList';

function App() {

  
  return (
    <div>
      <h1>Todo List</h1>
      {todoList.map((todo, index) => (
        <TodoItem
          key={index}
          description={todo.description}
          deadline={todo.deadline}
        />
      ))}
    </div>
  );
}

export default App;