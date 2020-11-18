var car,wall
var speed,weight


function setup() {
  createCanvas(1600,400);

  speed=Random(55,90)
  weight=Random(400,1500)
  
  car=createSprite(50, 200, 50, 50);
  car.velovityX=speed
  car.shapeColor=color(255)

  wall=createSprite(1500,200,60,height/2)
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background(0);
  /*if(car.isTouching(wall)){

  }*/
  if(wall.x-car.x < (car.widht+wall.width)/2){
    car.velocityX=0
    var D=0.5*weight*speed* speed/22509
    if(D>180){
      car.shapeColor=color(255,0,0)
    }
    if(D<180 && D>100){
      car.shapeColor=color(230,230,0)
    }
    if(D<100){
      car.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}