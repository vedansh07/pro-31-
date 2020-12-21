const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var plinkos = [];
var particles = [];
var divisions = [];

var divisionHeight = 150;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  base=new ground(400,400,795,15);

  for (var k = 0; k <= width; k = k+115  ){
    divisions.push(new division(k, height-divisionHeight/2 ,8, divisionHeight));
}

for (var j =40; j<=width; j=j+50){
  plinkos.push(new plinko(j,75))
}

for (var j =15; j<=width-10; j=j+50){
  plinkos.push(new plinko(j,175))
}

for (var j =40; j<=width; j=j+50){
  plinkos.push(new plinko(j,275))
}

for (var j =15; j<=width-10; j=j+50){
  plinkos.push(new plinko(j,375))
}

}



function draw() {
  background(0); 

for (var j =0; j<particles.length; j++){
  particles[j].display();
}

for (var k =0; k<divisions.length; k++){
 divisions [k].display();
}

base.display();

if(frameCount%60 === 0){
  particles.push(new particle(random(width/2-10, width/2+10, 10,10)));
}


//drawSprites();
}
