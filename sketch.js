var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage,cloudimg;




var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudimg = loadImage("cloud.png")
 
  
}

function setup() {

  createCanvas(600,200)

  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;

  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))

}

function draw() {
  //set background color
  background("");
  
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 160) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds
  spawnClouds()
  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
 // write your code here 
if (frameCount % 40 === 0){


var cloud=createSprite(600,random(20,100),20,20)
cloud.velocityX=-7
cloud.addImage("cloud",cloudimg)

cloud.depth=1
console.log("cloud's depth"+cloud.depth)
console.log("trex's depth"+trex.depth)


}

}



