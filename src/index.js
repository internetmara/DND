import monsters from '../dist/monsters.js';
import magicItems from '../dist/magic_items.js';
import ConfettiGenerator from "confetti-js";

document.addEventListener('DOMContentLoaded', () => {
  const firstNames = ["Wiggle", "Jewish", "Ayce", "Tofu", "Bon Bon", "Bunny", "Crabcake", "Data", "Bad Lil Kitty", "Dad Body", "Hot Girl Summer", "Dumplin'", "Macho Man", "White Claw", "Flapjack", "Daddy", "Kitty Mike", "LeBron", "Queen", "LeBronda", "Demetrius", "Roly Poly", "Shmoo", "Sloppy Joe", "Sticky", "Stinky", "Tribbler", "Cool Ranch", "Tutti Fruitti", "Wicket", "Tomoko", "Yung", "Soup", "Charlie", "Veronika", "Jellybean", "Mara", "Jenny", "Trustin", "Mishka", "Mad Dog", "Mike Le", "Nicha", "MegaHam", "Caanburke", "Zeke", "Hilal", "Enchilada", "Walker", "Charis", "Jaycee", "Kevin", "Kiet", "Luca", "Barbarella", "Oscar", "Samwise", "Shirley", "Yun", "James Charles", "LaToya", "Zamin"]
  const lastNames = ["Chesterton", "Finkel", "McSprinkle", "Cold One With The Boys", "Bernie Sanders", "OKCupid", "Tinder", "Bumble", "Hinge", "Plenty of Fish", "Match.com", "Men are Trash", "Epstein", "Love Isn't Real", "Flat Earth", "The Lord", "Furry Sanders", "McGee", "The Terminator", "Weed", "The Rock Johnson", "Fireball", "Randy Savage", "Destroyer of Worlds", "Never Forget", "Girlboss", "ADHD", "Flava Flav", "Daddy Maddy", "Lexapro", "Adderall", "Zoloft", "Baja Blasted", "Chris Harrison", "Kevin Federline", "Huff Sharpies", "Cry Evertim", "Based", "Gravy", "Bloodborne", "Southern Comfort", "Madsen", "Pilipenko", "Dell'Acqua", "Le", "Yang", "Chai", "Varli", "Ingebretson", "Magpusao", "Angcla", "Dance Dance Revolution", "Thank You Satan", "Thongpanchang", "Palacios Vazquez","Yoon", "Tang", "Trader Joe's", "Cleveland, Ohio", "Sour Diesel", "Northern Lights", "Girl Scout Cookies", "Paul Wall", "Brook Hogan", "Acab", "Balloons", "Hallelujah Island", "Candy", "Marx Was Right", "My Parents Are Divorced", "Juicy Bugs"]
  const firstTavernNames = ["Adorable", "Aggressive", "Exactly, Exactly", "Anxious", "Bloody", "Blushing", "Crazy", "Dead", "Dizzy", "Interesting", "Easy", "Famous", "Fantastic", "Chafing", "Flying", "Missing",  "Friendly", "Gleaming", "Grieving", "Grumpy", "Happy", "Homely", "Impossible", "Jolly", "Lonely", "Muddy", "Mushy", "Naughty", "Nervous", "Pleasant", "Puzzled", "Scary", "Sparkling", "Splendid", "Stormy", "Tasty", "Tough", "Ugly", "Vivacious", "Weary", "Witty", "Zealous", "Wrong", "Daring", "Fleeing", "Lying", "Listening", ]
  const lastTavernNames = ["walrus", "dingo", "yak", "Freak of Nature", "Weirdo", "Pinata", "Redneck", "Bourgeoisie", "Alcoholic", "Divorcee", "hog", "gopher", "opossum", "jaguar", "squirrel", "leopard", "baboon", "alpaca", "mink", "skunk", "puma", "turtle", "snake", "hartebeest", "rabbit", "seal", "shrew", "ferret", "capybara", "hippopotamus", "kitten", "rat", "badger", "puppy", "koala", "basilisk", "wombat", "kangaroo", "crow", "ox", "gila Monster", "burro", "donkey", "salamander", "lion", "rhinoceros", "pronghorn"]
  const tavernTemperment = ["Surprised", "Stressed", "Mad", "Milky", "Loved", "Lonely", "Weird", "Uncomfortable", "Touched", "Tired", "Thankful", "Sympathetic", "Smart", "Sleepy", "Silly", "Pleased", "Pessimistic", "Sick", "Shocked", "Satisfied", "Sad", "Rushed", "Restless", "Relieved", "Relaxed", "Rejuvenated", "Rejected", "Refreshed", "Recumbent", "Quixotic", "Predatory", "Peaceful", "Optimistic", "Okay", "Numb", "Giggly", "Giddy", "Not specified", "Nerdy", "Infuriated", "Indifferent", "Indescribable", "Naughty", "Morose", "Moody", "Mischievous", "Mellow", "Melancholy", "Listless", "Lethargic", "Lazy", "Jubilant", "Jealous", "Irritated", "Irate", "Impressed", "Hyper", "Hungry", "Hot", "Hopeful", "Happy", "Guilty", "Grumpy", "Groggy", "Grateful", "Dorky", "Ditzy", "Discontent", "Good", "Gloomy", "Geeky", "Full", "Frustrated", "Flirty", "Exhausted", "Excited", "Enraged", "Energetic", "Anxious", "Annoyed", "Angry", "Ecstatic", "Drunk", "Drained", "Disappointed", "Dirty", "Devious", "Determined", "Depressed", "Dark", "Cynical", "Curious", "Alone", "Aggravated", "Accomplished", "Accepted", "Crushed", "Crazy", "Crappy", "Cranky", "Content", "Confused", "Complacent", "Cold", "Chipper", "Cheerful", "Calm", "Bouncy", "Bored", "Blissful", "Blank", "Blah", "Bittersweet", "Bewildered", "Awake", "Ashamed", "Apathetic", "Amused", "Exanimate", "Envious", "Enthralled", ]
  const getRandomNumber = (max) => Math.floor(Math.random() * max);

  const randomNPCPic = new Array();
  randomNPCPic[0] = "dist/images/NPCs/macho.jpg";
  randomNPCPic[1] = "dist/images/NPCs/legolashotpic.jpg";
  randomNPCPic[2] = "dist/images/NPCs/bret.jpg";
  randomNPCPic[3] = "dist/images/NPCs/paula.jpg";
  randomNPCPic[4] = "dist/images/NPCs/latoya.png";
  randomNPCPic[5] = "dist/images/NPCs/lebron.jpg";
  randomNPCPic[6] = "dist/images/NPCs/corey.jpg";
  randomNPCPic[7] = "dist/images/NPCs/brendan.jpg";
  randomNPCPic[8] = "dist/images/NPCs/pedro.jpg";
  randomNPCPic[9] = "dist/images/NPCs/dane.jpg";
  randomNPCPic[10] = "dist/images/NPCs/NormMcDonald.jpg";
  randomNPCPic[11] = "dist/images/NPCs/TimHorton.jpg";
  randomNPCPic[12] = "dist/images/NPCs/jamie.jpg";
  randomNPCPic[13] = "dist/images/NPCs/trace.jpg";
  randomNPCPic[14] = "dist/images/NPCs/adam.jpg";
  randomNPCPic[15] = "dist/images/NPCs/davidspade.jpg";
  randomNPCPic[16] = "dist/images/NPCs/deuce.jpg";
  randomNPCPic[17] = "dist/images/NPCs/cinderbuscemi.jpg";
  randomNPCPic[18] = "dist/images/NPCs/tommy-wiseau.jpg";
  randomNPCPic[19] = "dist/images/NPCs/jaycee.jpeg";
  randomNPCPic[20] = "dist/images/NPCs/oscar.png";
  randomNPCPic[21] = "dist/images/NPCs/JohnV.jpeg";
  randomNPCPic[22] = "dist/images/NPCs/ChrisID.JPG";
  randomNPCPic[23] = "dist/images/NPCs/guyfieri.jpg";
  randomNPCPic[24] = "dist/images/NPCs/tigerking.jpg";
  randomNPCPic[25] = "dist/images/NPCs/aycedog.JPG";

  const randomTavern = new Array();
  randomTavern[0] = "dist/images/Taverns/Tavern1.jpg";
  randomTavern[1] = "dist/images/Taverns/Tavern2.webp";
  randomTavern[2] = "dist/images/Taverns/Tavern3.png";
  randomTavern[3] = "dist/images/Taverns/Tavern4.jpeg";
  randomTavern[4] = "dist/images/Taverns/Tavern5.jpg";
  randomTavern[5] = "dist/images/Taverns/Tavern6.jpg";
  randomTavern[6] = "dist/images/Taverns/Tavern7.jpg";
  randomTavern[7] = "dist/images/Taverns/Tavern8.jpg";
  randomTavern[8] = "dist/images/Taverns/Tavern9.jpg";


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
    let url = (`https://www.dnd5eapi.co${monsters[idx]['url']}`)
    fetch(url).then(function (response) {
      // The API call was successful!
      debugger
      console.log('response!', response.json().type);
      // getMonsterType
    }).then(function (data) {
      appendData(data);
    }).catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });
    return `Name: ${monsters[idx]['name']}`
  }

  function appendData(data) {
    var mainContainer = document.getElementById('generated-text');
    for (var i = 0; i < data.length; i++) {
      var div = document.createElement("div");
      div.innerHTML = 'Alignment: ' + data[i].alignment;
      mainContainer.appendChild(div);
    }
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
    var confettiSettings = { target: 'my-canvas', max: 2000, clock: 50, start_from_edge: true, rotate: true };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  }

  // one off confetti: respawn: false

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


  // fetch('http://www.dnd5eapi.co/api/magic-items/').then(function (response) {
  //   // The API call was successful!
  //   console.log('response!', response.json());
  // }).catch(function (err) {
  //   // There was an error
  //   console.warn('Something went wrong.', err);
  // });

  

  

//   // monster fetcher
//   document.getElementById('monster')
//     .addEventListener('click', setRandomMonster);

  // const setRandomMonster = () => {
  //   return `getRandomNumber()`;
  // }

  


})

