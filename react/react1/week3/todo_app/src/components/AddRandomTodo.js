import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const AddRandomTodo = ({ onAddTodo }) => {
  const [description, setDescription] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDeadlineChange = (date) => {
    setDeadline(date);
  };

  const handleAddTodo = () => {
    if (description && deadline) {
      onAddTodo(description, deadline);
      setDescription('');
      setDeadline(null);
    }
  };

  const formatDeadline = (deadline) => {
    if (deadline instanceof Date) {
      return deadline.toLocaleDateString();
    }
    return '';
  };

  return (
    <div>
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <DatePicker
        selected={deadline}
        onChange={handleDeadlineChange}
        placeholderText="deadline"
      />
      <button onClick={handleAddTodo}>Add todo</button>
      {deadline && <p>Selected deadline: {formatDeadline(deadline)}</p>}
    </div>
  );
};

export default AddRandomTodo;