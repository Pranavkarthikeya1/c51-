var canvas;
var luffy ; luffyImage;
var garb; garbImage;
var backgroungImage;
var obsticles1;obsticles1Image;obsticles2;obsticles2Image;
var treasure ;treasureImage;
var dragonball;dragonballImage;dragonball;dragonImage;
var database;gameState ;
var players  ;

function preload(){
luffyImage = loadAnimation("l1.png,l2.png,l3.png");
garbImage = loadAnimation("g1.png,g2.png,g3.png,g4.png");
dragonImage = loadImage("dragon.png");
dragonballImage = loadImage("dragonball.png");
}

function setup() {
  canvas=createCanvas(800,400);
  database=firebase.data();
  createSprite(400, 200, 50, 50);
  
  background(backgroundImage);
   if (playerCount === 2) {
     game.update(1); }
      if (gameState === 1) {
         game.play(); } 
         if (gameState === 2) { 
          game.showLeaderboard();
           game.end(); } 
          }


function draw() {
    
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

