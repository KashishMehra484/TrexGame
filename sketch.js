var trex,trex_running,edges,ground,ground2,invisibleGround,cloudRunning,score,obsctacles,obsctacles2,obsctacles3,obsctacles4,obsctacles5,obsctacles6,obsctaclesGroup,cloudsGroup;

function preload()  {
trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
ground2=loadImage("ground2.png");
cloudRunning= loadImage("cloud.png");
obstacles=loadImage("obstacle1.png");
obstacles2=loadImage("obstacle2.png");
obstacles3=loadImage("obstacle3.png"); 
obstacles4=loadImage("obstacle4.png");
obstacles5=loadImage("obstacle5.png");
obstacles6=loadImage("obstacle6.png");
}

function setup() {
  createCanvas(400,400);
  trex=createSprite(30,375,10,10);
  ground = createSprite(20,380);
  ground.x=ground.width/2;
  trex.addAnimation("sleeping",trex_running);
  ground.addImage(ground2);
  ground.velocityX=-3;
  trex.scale=0.5;
  invisibleGround = createSprite(20,390,400,5);
  invisibleGround.visible=false;
  score=0;
  obstaclesGroup=new Group();
  cloudsGroup=new Group();
  
  edges=createEdgeSprites();
}

function draw() {
  background(100)
  
  if(keyDown("space")){
  trex.velocityY=-3;  
  }
  trex.velocityY=trex.velocityY+0.8;
  if(ground.x<0){
  ground.x=ground.width/2;
  }
  trex.collide(invisibleGround);
  textSize(18);
  fill("red")
  text(1+"score"+":"+score,300,150);
  
score=score+Math.round(frameRate()/60);  
  
  spawnClouds();
  spawnObstacles();
  drawSprites();
}
function spawnClouds(){
 
 if (frameCount%60===0){
 var clouds = createSprite(400,200);
 clouds.velocityX=-10;
 clouds.addImage(cloudRunning);
 clouds.y = random(280,320);
 console.log(clouds.y);
 clouds.lifetime=40;  
 clouds.depth=trex.depth;
 trex.depth=trex.depth+1;
 cloudsGroup.add(clouds);  
 }
}
function spawnObstacles(){
if (frameCount%60===0){
var obsctacle = createSprite(400,380);
obsctacle.velocityX=-8;  
var rand = Math.round(random(1,6));
switch(rand) {
  case 1 : obsctacle.addImage(obstacles);
  break;
  case 2 : obsctacle.addImage(obstacles2);
  break;
  case 3 : obsctacle.addImage(obstacles3);
  break;
  case 4 : obsctacle.addImage(obstacles4);
  break;
  case 5 : obsctacle.addImage(obstacles5);
  break;
  case 6 : obsctacle.addImage(obstacles6);
  break;
  default:break;
} 
obsctacle.scale=0.5;
obsctacle.lifetime=50;
obstaclesGroup.add(obsctacle);
}
}