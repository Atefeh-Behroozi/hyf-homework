import './App.css';
import { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddRandomTodo from './components/AddRandomTodo';
import Timer from './components/Timer';

const App = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const fetchDefaultTodos = async () => {
      try {
        const response = await fetch('https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw');
        const data = await response.json();
        setTodoItems(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDefaultTodos();
  }, []);

  const handleAddTodo = (description, deadline) => {
    const randomId = Math.floor(Math.random() * 1000);
    const newTodo = {
      id: randomId,
      description: description,
      deadline: deadline,
      done: false,
    };
    setTodoItems([...todoItems, newTodo]);
  };

  const handleToggleDone = (id) => {
    setTodoItems(todoItems.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        };
      }
      return todo;
    }));
  };

  const handleDelete = (id) => {
    setTodoItems(todoItems.filter((todo) => todo.id !== id));
  };
  const handleEdit = (id, newDescription, newDeadline) => {
    setTodoItems(todoItems.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          description: newDescription,
          deadline: newDeadline,
        };
      }
      return todo;
    }));
  };

  return (
    <div className="App">
      <h1>TodoList</h1>
      <Timer />
      <AddRandomTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todoItems}
        onToggleDone={handleToggleDone}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default App;