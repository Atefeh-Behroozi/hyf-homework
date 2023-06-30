import React from 'react';

function TodoItem(props) {
  
    return (
    <div>
      <h3>{props.description}</h3>
      <p>{props.deadline}</p>
    </div>
  );
}

export default TodoItem;