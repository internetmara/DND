import monsters from '../dist/monsters.js';
import magicItems from '../dist/magic_items.js';
import ConfettiGenerator from "confetti-js";

document.addEventListener('DOMContentLoaded', () => {
  const firstNames = ["Wiggle", "Tofu", "Bon Bon", "Bunny", "Crabcake", "Data", "Bad Lil Kitty", "Dad Body", "Hot Girl Summer", "Dumplin'", "Macho Man", "White Claw", "Flapjack", "Daddy", "Kitty Mike", "LeBron", "Queen", "LeBronda", "Demetrius", "Roly Poly", "Shmoo", "Sloppy Joe", "Sticky", "Stinky", "Tribbler", "Cool Ranch", "Tutti Fruiti", "Wicket", "Tomoko", "Yung", "Soup", "Charlie", "Veronika", "Jellybean", "Mara", "Jenny", "Trustin", "Mishka", "Mad Dog", "Mike Le", "Nicha", "MegaHam", "Caanburke", "Zeke", "Hilal", "Enchilada", "Walker", "Charis", "Jaycee", "Kevin", "Kiet", "Luca", "Barbarella", "Oscar", "Samwise", "Shirley", "Yun", "James Charles", "LaToya", "Zamin"]
  const lastNames = ["Chesterton", "Finkel", "McSprinkle", "Cold One With The Boys", "Bernie Sanders", "OKCupid", "Tinder", "Bumble", "Hinge", "Plenty of Fish", "Match.com", "Men are Trash", "Epstein", "Love Isn't Real", "Flat Earth", "The Lord", "Furry Sanders", "McGee", "The Terminator", "Weed", "The Rock Johnson", "Fireball", "Randy Savage", "Destroyer of Worlds", "Never Forget", "Girlboss", "ADHD", "Flava Flav", "Daddy Maddy", "Lexapro", "Adderall", "Zoloft", "Baja Blasted", "Chris Harrison", "Kevin Federline", "Huff Sharpies", "Cry Evertim", "Based", "Gravy", "Bloodborne", "Southern Comfort", "Madsen", "Pilipenko", "Dell'Acqua", "Le", "Yang", "Chai", "Varli", "Ingebretson", "Magpusao", "Angcla", "Dance Dance Revolution", "Thank You Satan", "Thongpanchang", "Palacios Vazquez","Yoon", "Tang", "Trader Joe's", "Cleveland, Ohio", "Sour Diesel", "Northern Lights", "Girl Scout Cookies", "Paul Wall", "Brook Hogan", "Acab", "Balloons", "Hallelujah Island", "Candy", "Marx Was Right", "My Parents Are Divorced", "Juicy Bugs"]
  const firstTavernNames = ["Adorable", "Aggressive", "Exactly, Exactly", "Anxious", "Bloody", "Blushing", "Crazy", "Dead", "Dizzy", "Interesting", "Easy", "Famous", "Fantastic", "Chafing", "Flying", "Missing",  "Friendly", "Gleaming", "Grieving", "Grumpy", "Happy", "Homely", "Impossible", "Jolly", "Lonely", "Muddy", "Mushy", "Naughty", "Nervous", "Pleasant", "Puzzled", "Scary", "Sparkling", "Splendid", "Stormy", "Tasty", "Tough", "Ugly", "Vivacious", "Weary", "Witty", "Zealous", "Wrong", "Daring", "Fleeing", "Lying", "Listening", ]
  const lastTavernNames = ["walrus", "dingo", "yak", "Freak of Nature", "Weirdo", "Pinata", "Redneck", "Bourgeoisie", "Alcoholic", "Divorcee", "hog", "gopher", "opossum", "jaguar", "squirrel", "leopard", "baboon", "alpaca", "mink", "skunk", "puma", "turtle", "snake", "hartebeest", "rabbit", "seal", "shrew", "ferret", "capybara", "hippopotamus", "kitten", "rat", "badger", "puppy", "koala", "basilisk", "wombat", "kangaroo", "crow", "ox", "gila Monster", "burro", "donkey", "salamander", "lion", "rhinoceros", "pronghorn"]
  const tavernTemperment = ["Surprised", "Stressed", "Mad", "Milky", "Loved", "Lonely", "Weird", "Uncomfortable", "Touched", "Tired", "Thankful", "Sympathetic", "Smart", "Sleepy", "Silly", "Pleased", "Pessimistic", "Sick", "Shocked", "Satisfied", "Sad", "Rushed", "Restless", "Relieved", "Relaxed", "Rejuvenated", "Rejected", "Refreshed", "Recumbent", "Quixotic", "Predatory", "Peaceful", "Optimistic", "Okay", "Numb", "Giggly", "Giddy", "Not specified", "Nerdy", "Infuriated", "Indifferent", "Indescribable", "Naughty", "Morose", "Moody", "Mischievous", "Mellow", "Melancholy", "Listless", "Lethargic", "Lazy", "Jubilant", "Jealous", "Irritated", "Irate", "Impressed", "Hyper", "Hungry", "Hot", "Hopeful", "Happy", "Guilty", "Grumpy", "Groggy", "Grateful", "Dorky", "Ditzy", "Discontent", "Good", "Gloomy", "Geeky", "Full", "Frustrated", "Flirty", "Exhausted", "Excited", "Enraged", "Energetic", "Anxious", "Annoyed", "Angry", "Ecstatic", "Drunk", "Drained", "Disappointed", "Dirty", "Devious", "Determined", "Depressed", "Dark", "Cynical", "Curious", "Alone", "Aggravated", "Accomplished", "Accepted", "Crushed", "Crazy", "Crappy", "Cranky", "Content", "Confused", "Complacent", "Cold", "Chipper", "Cheerful", "Calm", "Bouncy", "Bored", "Blissful", "Blank", "Blah", "Bittersweet", "Bewildered", "Awake", "Ashamed", "Apathetic", "Amused", "Exanimate", "Envious", "Enthralled", ]
  const getRandomNumber = (max) => Math.floor(Math.random() * max);

  const randomNPCPic = new Array();
  randomNPCPic[0] = "images/NPCs/macho.jpg";
  randomNPCPic[1] = "images/NPCs/legolashotpic.jpg";
  randomNPCPic[2] = "images/NPCs/bret.jpg";
  randomNPCPic[3] = "images/NPCs/paula.jpg";
  randomNPCPic[4] = "images/NPCs/latoya.png";
  randomNPCPic[5] = "images/NPCs/lebron.jpg";
  randomNPCPic[6] = "images/NPCs/corey.jpg";
  randomNPCPic[7] = "images/NPCs/brendan.jpg";
  randomNPCPic[8] = "images/NPCs/pedro.jpg";
  randomNPCPic[9] = "images/NPCs/dane.jpg";
  randomNPCPic[10] = "images/NPCs/NormMcDonald.jpg";
  randomNPCPic[11] = "images/NPCs/TimHorton.jpg";
  randomNPCPic[12] = "images/NPCs/jamie.jpg";
  randomNPCPic[13] = "images/NPCs/trace.jpg";

  const randomTavern = new Array();
  randomTavern[0] = "images/Taverns/Tavern1.jpg";
  randomTavern[1] = "images/Taverns/Tavern2.webp";
  randomTavern[2] = "images/Taverns/Tavern3.png";
  randomTavern[3] = "images/Taverns/Tavern4.jpeg";
  randomTavern[4] = "images/Taverns/Tavern5.jpg";
  randomTavern[5] = "images/Taverns/Tavern6.jpg";
  randomTavern[6] = "images/Taverns/Tavern7.jpg";
  randomTavern[7] = "images/Taverns/Tavern8.jpg";
  randomTavern[8] = "images/Taverns/Tavern9.jpg";


  const getRandomImage = () => {
    document.getElementById('result').innerHTML = '<img src="' + randomNPCPic[getRandomNumber(randomNPCPic.length)] + '" />';
  }

  const getRandomTavernPic = () => {
    document.getElementById('result').innerHTML = '<img src="' + randomTavern[getRandomNumber(randomTavern.length)] + '" />';
  }

  const setRandomName = () => {
    document.getElementById('generated-text').innerText = generateNPC();
  }

  const setRandomTavernName = () => {
    document.getElementById('generated-text').innerText = generateTavern();
  }

  const getRandomMonster = () => {
    document.getElementById('generated-text').innerText = generateMonster();
  }

  const getRandomItem = () => {
    document.getElementById('generated-text').innerText = generateItem();
  }

  const confetti = () => {
    document.getElementById('my-canvas').innerText = generateConfetti();
  }

  const generateMonster = () => {
    let idx = getRandomNumber(monsters.length);
    fetch(`https://www.dnd5eapi.co${monsters[idx]['url']}`).then(function (response) {
      // The API call was successful!
      console.log('response!', response.json().type);
      // getMonsterType
    }).catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });
    return `Name: ${monsters[idx]['name']}`
  }

  const generateItem = () => {
    let idx = getRandomNumber(magicItems.length);
    return `Name: ${magicItems[idx]['name']}
    Learn More: https://www.dnd5eapi.co${magicItems[idx]['url']}`;
    
  }

  const generateNPC = () => {
    getRandomImage();
    return `Name: ${firstNames[getRandomNumber(firstNames.length)]} ${lastNames[getRandomNumber(lastNames.length)]}
    Age: ${getRandomNumber(150)}`;
  }

  const generateTavern = () => {
    getRandomTavernPic();
    let lastTName = `${lastTavernNames[getRandomNumber(lastTavernNames.length)]}`
    return `Tavern Name: The ${firstTavernNames[getRandomNumber(firstTavernNames.length)]} ${lastTName.charAt(0).toUpperCase() + lastTName.slice(1)}
    Temperment: ${tavernTemperment[getRandomNumber(tavernTemperment.length)]}`;
  }

  const generateConfetti = () => {
    var confettiSettings = { target: 'my-canvas', max: 2000, clock: 50, start_from_edge: true, rotate: true, respawn: false };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  }

  document.getElementById('npc')
    .addEventListener('click', setRandomName);

  document.getElementById('location')
    .addEventListener('click', setRandomTavernName);

  document.getElementById('monster')
    .addEventListener('click', getRandomMonster);

  document.getElementById('magic_item')
    .addEventListener('click', getRandomItem);

  document.getElementById('surprise')
    .addEventListener('click', confetti);

  // document.getElementById('arctic')
  //   .addEventListener('click', getArcticBackground);

  // const getArcticBackground = () => {
  //   document.getElementById('body').innerHTML = '<img src="'images/Backgrounds/Arcticbg.png'" />';
  // };


  fetch('http://www.dnd5eapi.co/api/magic-items/').then(function (response) {
    // The API call was successful!
    console.log('response!', response.json());
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });

  

  

//   // monster fetcher
//   document.getElementById('monster')
//     .addEventListener('click', setRandomMonster);

  // const setRandomMonster = () => {
  //   return `getRandomNumber()`;
  // }

  


})

