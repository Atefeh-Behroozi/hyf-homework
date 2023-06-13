const args = process.argv.slice(2);
if (args.length < 2) {
    console.log("Please provide at least two arguments.");
    process.exit(1);
}
const numbers = args.map(Number);
if (numbers.some(isNaN)) {
    console.log("One or more arguments are not valid numbers.");
    process.exit(1);
  }
const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;
console.log(average);



