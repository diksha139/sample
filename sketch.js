var canvas;
var backgroundImage, car1_img, car2_img, track;
var fuelImage, powerCoinImage, lifeImage;
var obstacle1Image, obstacle2Image;
var database, gameState;
var blastImage;
var form, player, playerCount;
var allPlayers, car1, car2, fuels, powerCoins, obstacles;
var cars = [];
var coinSound;
var dieSound;
var doraSound;

function preload() {
  backgroundImage = loadImage("./assets/b.png");
  car1_img = loadAnimation("../assets/d1.png","../assets/d2.png","../assets/d3.png","../assets/d4.png","../assets/d5.png","../assets/d6.png",);
  car2_img = loadAnimation("../assets/K81.png","../assets/K82.png","../assets/K83.png","../assets/K84.png","../assets/K85.png","../assets/K86.png",);
  track = loadImage("../assets/grass.jpg");
  fuelImage = loadImage("./assets/ENERGY.jpg");
  powerCoinImage = loadImage("./assets/goldCoin.png");
  obstacle1Image = loadImage("./assets/obstacle11.png");
  obstacle2Image = loadImage("./assets/obstacle51.png");
  obstacle3Image = loadImage("./assets/obstacle21.png");
  lifeImage = loadImage("./assets/life.png");
  blastImage = loadImage("./assets/blast.png");

  coinSound=loadSound("./sounds/Coin.mp3");
  dieSound=loadSound("./sounds/die.wav");
  doraSound=loadSound("./sounds/Doraemon.mp3");

}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
    doraSound.loop();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
