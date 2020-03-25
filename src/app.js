const PLAYERS = [
  "Spiderman",
  "Captain America",
  "Wonderwoman",
  "Popcorn",
  "Gemwoman",
  "Bolt",
  "Antwoman",
  "Mask",
  "Tiger",
  "Captain",
  "Catwoman",
  "Fish",
  "Hulk",
  "Ninja",
  "Black Cat",
  "Wolverine",
  "Thor",
  "Slayer",
  "Vader",
  "Slingo"
];

// initialize players with image and strength
const initPlayers = players => {
  let detailedPlayers = [];
  // Create players using for loop
  for (let i = 0; i < players.length; i++) {
    detailedPlayers[i] = {
      name: players[i],
      image: "images/super-" + (i + 1) + ".png",
      strength: getRandomStrength(),
      type: Math.floor(Math.random() * 99) % 2 == 0 ? "hero" : "villain"
    };
  }
  // Type your code here
  return detailedPlayers;
};

// getting random strength
const getRandomStrength = () => {
  return Math.ceil(Math.random() * 100);
};

const buildPlayers = (players, type) => {
  let fragment = "";

  // Type your code here
  for (let i = 0; i < players.length; i++) {
    player = `
    <div class="player">
    <img src="${players[i].image}" alt="">
    <div class="name">${players[i].name}</div>
    <div class="strength">${players[i].strength}</div>
    </div>
    `;
    if (players[i].type == type) {
      fragment = fragment + player;
    }
  }

  return fragment;
};
// Display players in HTML
const viewPlayers = players => {
  document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
  document.getElementById("villains").innerHTML = buildPlayers(
    players,
    "villain"
  );
};

window.onload = () => {
  viewPlayers(initPlayers(PLAYERS));
};
