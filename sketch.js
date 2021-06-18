
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var papper,dustbin;
var engine,world;

function preload(){
	papper = loadImage("paper png.png");
	dustbin = loadImage("dustbingreen.png");

	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	papper = new Papper(100, 320, 10);

	ground = new Ground(400,330,800,20);

	dustbin1 = new Dustbin(550,270,20,100);
	dustbin2 = new Dustbin(610,320,100,20);
	dustbin3 = new Dustbin(670,270,20,100);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  papper.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
   
	   Matter.Body.applyForce(papper.body, papper.body.position, {x:15, y: -15});
	 }
   }



