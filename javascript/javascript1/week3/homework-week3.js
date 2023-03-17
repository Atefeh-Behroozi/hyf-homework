//Item array removal
function removeName(namesArray, nameToRemove) {
  const indexToRemove = namesArray.indexOf(nameToRemove);
  
  if (indexToRemove !== -1) {
    namesArray.splice(indexToRemove, 1);
  }
  
  return namesArray;
}

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

const result = removeName(names, nameToRemove);

console.log(result); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']






  //When will we be there??
  function calculateTravelTime(travelInformation) {
    const speed = travelInformation.speed; // km/h
    const distance = travelInformation.destinationDistance; // km
  
    const travelHours = Math.floor(distance / speed); // hours
    const travelMinutes = Math.round(((distance / speed) - travelHours) * 60); // minutes
  
    const hoursString = travelHours === 1 ? "1 hour" : `${travelHours} hours`;
    const minutesString = travelMinutes === 1 ? "1 minute" : `${travelMinutes} minutes`;
  
    return `${hoursString} and ${minutesString}`;
  }
  
  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  
  const travelTime = calculateTravelTime(travelInformation);
  console.log(travelTime); // 8 hours and 38 minutes
  
  





//Series duration of my life
const seriesDurations = [
    {
      title: "Game of thrones",
      days: 3,
      hours: 1,
      minutes: 0,
    },
    {
      title: "Sopranos",
      days: 3,
      hours: 14,
      minutes: 0,
    },
    {
      title: "The Wire",
      days: 2,
      hours: 12,
      minutes: 0,
    },
  ];
  
  function logOutSeriesText(seriesDurations) {
    const lifespanInMinutes = 80 * 365 * 24 * 60; // assuming 80-year lifespan
    let totalSeriesTimeInMinutes = 0;
  
    for (let i = 0; i < seriesDurations.length; i++) {
      const series = seriesDurations[i];
      const seriesDurationInMinutes =
        series.days * 24 * 60 + series.hours * 60 + series.minutes;
      const seriesTimePercentage = (
        (seriesDurationInMinutes / lifespanInMinutes) *
        100
      ).toFixed(3);
      console.log(`${series.title} took ${seriesTimePercentage}% of my life`);
      totalSeriesTimeInMinutes += seriesDurationInMinutes;
    }
  
    const totalSeriesTimePercentage = (
      (totalSeriesTimeInMinutes / lifespanInMinutes) *
      100
    ).toFixed(3);
    console.log(`In total that is ${totalSeriesTimePercentage}% of my life`);
  }
  
  logOutSeriesText(seriesDurations);





  

//NOnoN0nOYes (Note taking app)
//Save a note
  const notes = [];

function saveNote(content, id) {
  notes.push({ content, id });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]


//Get a note
function getNote(id) {
    if (typeof id !== "number") {
      console.log("Error: ID must be a number.");
      return;
    }
    
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === id) {
        return notes[i];
      }
    }
    
    console.log(`Error: Note with ID ${id} not found.`);
}
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}


//Log out notes
function logOutNotesFormatted() {
    for (let i = 0; i < notes.length; i++) {
      const note = notes[i];
      console.log(`The note with id: ${note.id}, has the following note text: "${note.content}".`);
    }
    return notes;
}
logOutNotesFormatted(); 


//Unique feature
function deleteNote(id) {
  let foundNote = false;
  notes.forEach((note, index) => {
    if (note.id === id) {
      notes.splice(index, 1);
      foundNote = true;
      console.log(`Note with ID ${id} deleted.`);
    }
  });
  if (!foundNote) {
    console.log(`Error: Note with ID ${id} not found.`);
  }
}

deleteNote(2);

  

  