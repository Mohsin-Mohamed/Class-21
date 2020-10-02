var fixedrect, movingrect
var bouncyrect1, bouncyrect2

function setup() {
  createCanvas(windowWidth,windowHeight);
  fixedrect = createSprite(400, 200, 50, 50);
  movingrect = createSprite(600, 200, 70, 50);
  bouncyrect1 = createSprite(400, 100, 50, 50);
  bouncyrect2 = createSprite(600, 100, 70, 50);
  bouncyrect1.velocityX = 1;
  bouncyrect2.velocityX = -1;
}

function draw() {
  background(255,255,255);
  movingrect.x = mouseX;
  movingrect.y = mouseY;
  
  bounceOff(bouncyrect1,bouncyrect2);
  
    if(isTouching(movingrect, bouncyrect1)) {
      fixedrect.shapeColor = "green"
      movingrect.shapeColor = "green"
    }
    else
    {
      movingrect.shapeColor = "blue";
      fixedrect.shapeColor = "blue";
    }
  drawSprites();
}