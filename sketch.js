
var movingRect, fixedRect;

var o1,o2;



function setup() {
  createCanvas(800,400);


  fixedRect = createSprite(400, 200, 50, 100);
  fixedRect.shapeColor = "yellow";
  fixedRect.velocityX = -4;

  movingRect =createSprite(600, 200, 100, 50)
  movingRect.shapeColor = "yellow";
  //movingRect.velocityY = 4;

  o1 =createSprite(200, 200, 100, 50)
  o1.shapeColor = "yellow";
  o1.velocityX = 4;

  o2 =createSprite(600, 400, 100, 50)
  o2.shapeColor = "yellow";
  //o2.velocityY = -4;

}

function draw() {
  background(0);  


  /*movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(isTouching(movingRect,o1)){
    o1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }else{
    o1.shapeColor = "yellow";
    movingRect.shapeColor = "yellow";
  }*/
  
  bounceOff(fixedRect,o1)





  drawSprites();
}



