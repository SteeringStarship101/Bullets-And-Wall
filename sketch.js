var Wall;
var bullet;
var speed;
var thickness
var weight;


function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200, 200, thickness,1000);
  bullet = createSprite (590, 200, 10,5);
  

}
function draw() {
  background("aqua");
  thickness = random(22,83);
  speed = random(232,321);
  weight = random(30,52); 
 
  if(keyDown("space")){
    bullet.velocityX = speed;
  }
 if(bullet.x-wall.x<(bullet.width+wall.width)/2&&
 wall.x-bullet.x<(bullet.width+wall.width)/2){
   bullet.velocityX = 0;
   
   var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);

   if(damage>10){

    wall.shapeColor = color(255,0,0);

   }
   if(damage<10){
     wall.shapeColor = color(0,255,0);
   } 
  


 }
  console.log(damage);
  drawSprites();
}