//A future age calculator
let yearOfBirth = 1988;
let yearFuture = 2027;

let age = yearFuture - yearOfBirth;

console.log("You will be " + age + " years old in " + yearFuture); 






//A dog age calculator
let dogYearOfBirth = 2017;
let dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  console.log(`Your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}`);
} else {
  console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
}





//A house price estimator
// Calculation for Peter's house
let width = 8;
let depth = 10;
let height = 10;
let gardenSizeInM2 = 100;
let volumeInMeters = width * depth * height;
let expectedPrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
let actualPrice = 2500000;

if (actualPrice > expectedPrice) {
  console.log("Peter is paying too much.");
} else {
  console.log("Peter is not paying too much.");
}
// Calculation for Julia's house
width = 5;
depth = 11;
height = 8;
gardenSizeInM2 = 70;
volumeInMeters = width * depth * height;
expectedPrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300;
actualPrice = 1000000;

if (actualPrice < expectedPrice) {
  console.log("Julia is paying too little.");
} else {
  console.log("Julia is not paying too little.");
}






//Startup name generator
const firstWords = ["Easy", "Next", "Digital", "Awesome", "Corporate", "Branding", "Global", "Dynamic","Sustainable", "Creative"];
const secondWords = ["Solutions", "Corp", "Enterprises", "Labs", "Group", "Uniqueness", "Tech", "Works", "Clarity", "Industries"];

const randomNumber = Math.floor(Math.random() * 10);

const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

console.log("The startup: "+startupName+" contains "+startupName.length +" characters");



