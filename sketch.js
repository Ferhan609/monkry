
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var scoreS
var survivalTime
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,500);
  monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running) ;
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
}


function draw() {

   //jump when the space key is pressed
    if(keyDown("space")) {
        monkey.velocityY = -12;
      
    }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
}
function food(){
if (frameCount % 60 === 0) {
    var banana= createSprite(600,120,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
  
    //add each banana to the group
    FoodGroup.add(banana);
  }
}  
function obsatcle(){
  if (frameCount % 60 === 0){
   var obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/100);
    obstacle.addImage(obstacleImage);
  }
}
function survival(){
 stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime , 100,50);
  
  
  
  
}