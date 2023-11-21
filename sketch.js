
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
 var plane_options = {
	isStatic : true
 }
plane = Bodies.rectangle(600,580,1200,2,plane_options);
World.add(world, plane)
var block1_options = {
	restituition: 0.5,
	friction: 0.02,
	frictionAir: 0
}
block1 = Bodies.circle(220,10,10,block1_options)
World.add (world, block1)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  rect(block1.position.x, block1.position.y, 20)
  drawSprites();
 
}



