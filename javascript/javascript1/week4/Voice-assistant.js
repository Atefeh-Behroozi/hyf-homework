let name = '';
const todos = [];

function getReply(command) {
  if (command.startsWith('Hello my name is ')) {
    name = command.substring(17);
    return `Nice to meet you ${name}`;
  } else if (command === 'What is my name') {
    return name ? `Your name is ${name}` : `I don't know your name yet`;
  } else if (command.startsWith('Add ')) {
    const todo = command.substring(4, command.indexOf(' to my todo'));
    todos.push(todo);
    return `${todo} added to your todo`;
  } else if (command.startsWith('Remove ')) {
    const todo = command.substring(7, command.indexOf(' from my todo'));
    const index = todos.indexOf(todo);
    if (index >= 0) {
      todos.splice(index, 1);
      return `Removed ${todo} from your todo`;
    } else {
      return `${todo} is not on your todo`;
    }
  } else if (command === 'What is on my todo?') {
    if (todos.length === 0) {
      return `You have no todos`;
    } else {
      return `You have ${todos.length} todos - ${todos.join(' and ')}`;
    }
  } else if (command === 'What day is it today?') {
    const date = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return `Today is ${date.toLocaleDateString('en-US', options)}`;
  } else if (/^What is \d+ [+*-/] \d+/.test(command)) {
    return eval(command.substring(8));
  } else if (command.startsWith('Set a timer for ')) {
    const minutes = parseInt(command.substring(16));
    setTimeout(() => {
      console.log(`Timer done`);
    }, minutes * 60 * 1000);
    return `Timer set for ${minutes} minutes`;
  } else {
    return `Sorry, I don't understand that command`;
  }
}
console.log(getReply('Hello my name is Benjamin')); 
console.log(getReply('What is my name')); 
console.log(getReply('Add fishing to my todo')); 
console.log(getReply('Add singing in the shower to my todo')); 
console.log(getReply('Remove fishing from my todo'));
console.log(getReply('What is on my todo?')); 
console.log(getReply('What day is it today?')); 
console.log(getReply('What is 3 + 3')); 
console.log(getReply('Set a timer for 4 minutes')); 
