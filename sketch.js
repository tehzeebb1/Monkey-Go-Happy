var backImage,backgr;
var player, player_running;
var ground,ground_img;

var foodGroup, bananaImage;
var obstaclesGroup, obstacle_img;

var gameOver;
var score=0;


function preload(){
  backImage=loadImage("jungle2.jpg");
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  

  bananaImage = loadImage("Banana.png");
  obstacle_img = loadImage("stone.png"); 
  
}


function setup() {
  createCanvas(800,400);
  /*backgr = createSprite(400, 200)
  backgr.scale = 0.7
  backgr.addImage("Backroundd", backImage);*/
  
  
  player = createSprite(100, 340);
  player.scale = 0.1;
  player.addAnimation("monkey", player_running)
  
  foodGroup = createGroup();
  obstaclesGroup = createGroup();
  
ground = createSprite(400 , 400, 400, 20);
ground.scale = 3;
ground.velocityX = -4;
  
  
}

function draw() {
  
  background(255);
  if (foodGroup.isTouching(player)){
   score+2;
    foodGroup.destroyEach;
  }
  
 if (ground.x < 0){
      ground.x = ground.width/2;
    }
  switch (score){
      
    case 10 : player.scale = 0.12;
      break;
      case 20 : player.scale = 0.14;
      break;
      case 30 : player.scale = 0.16;
      break;
      case 40 : player.scle = 0.18;
      break;
      case 50 : player.scle = 0.20;
      
    default: break;
  }
    
  if(obstaclesGroup.isTouching(player)){
    player.scale = 0.2;
  }
    if(keyDown("space")){
      player.velocityY = -12;
    }
   else if (keyWentUp("space")){
      player.velocityY = 0;
      
    }
    
    player.velocityY = player.velocityY + 1; 
  player.collide(ground);
    
  
    food();
  obstacle();
  
  drawSprites();
  stroke("black");
  textSize(20);
  fill("black");
  text("Score:" +score, 500, 50);
  
}
function food(){
  
  if(World.frameCount % 80 === 0) {
  var banana = createSprite(400, 300, 100, 20);
  banana.addImage("foodies", bananaImage);
  banana.scale = 0.05;
  banana.velocityX = -5
 // var rand = randomNumber(1,6);
    
  
  foodGroup.add(banana);
  }
}

function obstacle(){
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,50);
    obstacle.velocityX = - 6
    obstacle.addImage("Stone", obstacle_img);
    
 
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.2;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
}
}

