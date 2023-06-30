const spiritAnimals = [
    "The Wise Owl",
    "The Curious Fox",
    "The Majestic Lion",
    "The Playful Dolphin",
    "The Fierce Tiger",
    "The Agile Cheetah",
    "The Loyal Dog",
    "The Graceful Deer",
    "The Mysterious Panther",
    "The Powerful Elephant"
  ];
  
  const nameInput = document.getElementById("name-input");
  const generateBtn = document.getElementById("generate-btn");
  const output = document.getElementById("spirit-animal-output");
  
  generateBtn.addEventListener("click", function() {
    const name = nameInput.value.trim();
    
    if (name) {
      const randomAnimal = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
      const spiritAnimal = `${name} - ${randomAnimal}`;
      output.textContent = spiritAnimal;
    } else {
      output.textContent = "Please enter your name!";
    }
  });
  const newAnimalBtn = document.createElement("button");
  newAnimalBtn.textContent = "New Spirit Animal";
  output.after(newAnimalBtn);
  
  newAnimalBtn.addEventListener("click", function() {
    const name = nameInput.value.trim();
    
    if (name) {
      const randomAnimal = spiritAnimals[Math.floor(Math.random() * spiritAnimals.length)];
      const spiritAnimal = `${name} - ${randomAnimal}`;
      output.textContent = spiritAnimal;
    } else {
      output.textContent = "Please enter your name!";
    }
  });
  
  