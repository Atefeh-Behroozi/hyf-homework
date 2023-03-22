//Flight booking fullname function

function getFullname(firstname, surname) {
  return `${firstname} ${surname}`;
}
var fullname1 = getFullname("Benjamin", "Hughes");
var fullname2 = getFullname("Atefeh", "Behroozi");

console.log(fullname1);
console.log(fullname2);


//Formal fullname
function getFullname(firstname, surname, useFormalName = false) {
    if (firstname === "" || surname === "") {
      return "Invalid input, both firstname and surname are required.";
    }
    if (useFormalName) {
      return "Lord " + firstname + " " + surname;
    } else {
      return firstname + " " + surname;
    }
  }

var fullname1 = getFullname("Benjamin", "Hughes", true);
var fullname2 = getFullname("Atefeh", "Behroozi");

console.log(fullname1); 
console.log(fullname2); 


//Event application

function getEventWeekday(days) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    const eventDay = (today + days) % 7;
    return weekdays[eventDay];
   
  }
  console.log(getEventWeekday(5));
  console.log(getEventWeekday(9)); 
  console.log(getEventWeekday(2)); 


//Weather wear

function recommendClothing(temperature) {
  switch (true) {
    case temperature >= 30:
      return "shorts and a tank top";
    case temperature >= 20:
      return "shorts and a t-shirt";
    case temperature >= 10:
      return "jeans and a sweater";
    default:
      return "a coat and warm pants";
  }
}
const clothesToWear = recommendClothing(18);
console.log(clothesToWear);


//Student manager

const class07Students = [];

function addStudentToClass(studentName) {
 
  if (studentName === '') {
    console.log('Cannot add an empty string to the class');
    return;
  }

  if (class07Students.length >= 6 && studentName !== 'Queen') {
    console.log('Cannot add more students to class 07');
    return;
  }

  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
    return;
  }

 class07Students.push(studentName);
}

function getNumberOfStudents() {
  return class07Students.length;
}

addStudentToClass('Alice');
addStudentToClass('Atefeh');
addStudentToClass('Benjamin');
addStudentToClass('Alice'); 
addStudentToClass('Sarah');
addStudentToClass('David');
addStudentToClass('Tim');
addStudentToClass('Queen');
 
console.log(getNumberOfStudents()); 