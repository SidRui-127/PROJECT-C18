var car, wall;
var speed, weight, deformation;

function setup() {
  createCanvas(1600,400);

  speed = random(50, 90);
  weight = random(400,1500);

  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);

  car.velocityX = speed;

  deformation = weight*speed*speed*0.5/22500;
}

function draw() {
  background(255,255,255);  

  if(car.collide(wall)) {

    if(deformation < 80) {
      car.shapeColor = "green";
    }

    if(deformation < 180 && deformation > 80) {
      car.shapeColor = "yellow";
    }

    if(deformation > 100) {
      car.shapeColor = "red";
    }
  }

  drawSprites();
}