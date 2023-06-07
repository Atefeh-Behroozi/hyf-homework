const args = process.argv.slice(2);
const numbers = args.map(Number);
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;
console.log(average);



