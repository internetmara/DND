const firstNames = ["Wiggle", "Valiana", "Tofu", "Soup", "Charlie"]
const lastNames = ["Chesterton", "Finkel", "McSprinkle", "Bloodborne"]
// const firstNames = []
// const firstNames = []

const getRandomNumber = (max) => Math.floor(Math.random() * max);

const generateNPC = () => {
  `${firstNames[getRandomNumber(firstNames.length)]} ${lastNames[getRandomNumber(lastNames.length)]}`;
}

const setRandomName = () => {
  document.getElementById('random-NPC').innerText = generateNPC();
}


document.getElementById('npc')
  document.addEventListener('DOMContentLoaded', setRandomName);

setRandomName();