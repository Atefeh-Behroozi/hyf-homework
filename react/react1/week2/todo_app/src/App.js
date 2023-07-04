import './App.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddRandomTodo from './components/AddRandomTodo';
import todos from './components/todosData';
import Timer from './components/Timer';

const App = () => {
  const [todoItems, setTodoItems] = useState(todos);

  const handleAddRandomTodo = () => {
    const randomId = Math.floor(Math.random() * 1000);
    const newTodo = {
      id: randomId,
      description: "Random text",
    };
    setTodoItems([...todoItems, newTodo]);
  };

  const handleToggleDone = (id) => {
    setTodoItems(todoItems.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done
        };
      }
      return todo;
    }));
  };

  const handleDelete = (id) => {
    setTodoItems(todoItems.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>TodoList</h1>
      <Timer />
      <AddRandomTodo onAddRandomTodo={handleAddRandomTodo} />
      <TodoList
        todos={todoItems}
        onToggleDone={handleToggleDone}
        onDelete={handleDelete}
      />
       
    </div>
  );
};

export default App;