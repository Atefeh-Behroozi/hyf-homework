import React from 'react';

function TodoItem(props) {
  return (
    <div>
      <h3>{props.description}</h3>
      <p>{props.deadline}</p>
    </div>
  );
}

function App() {
  const todoList = [
    {
      description: 'Get out of bed',
      deadline: 'Wed Sep 13 2017'
    },
    {
      description: 'Brush teeth',
      deadline: 'Thu Sep 14 2017'
    },
    {
      description: 'Eat breakfast',
      deadline: 'Fri Sep 15 2017'
    }
  ];

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