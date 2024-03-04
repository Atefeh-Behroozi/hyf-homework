export const handleAddTodo = (todoItems, setTodoItems, description, deadline) => {
    const randomId = Math.floor(Math.random() * 1000);
    const newTodo = {
      id: randomId,
      description: description,
      deadline: deadline,
    };
    setTodoItems([...todoItems, newTodo]);
  };