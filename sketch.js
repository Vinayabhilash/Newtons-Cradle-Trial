
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(350, 20, 250, 20);
	bobObject1 = new Bob(350, 600, 20);
	bobObject2 = new Bob(360, 600, 20);
	bobObject3 = new Bob(370, 600, 20);
	bobObject4 = new Bob(380, 600, 20);
	bobObject5 = new Bob(390, 600, 20);
	rope1 = new Rope(bobObject1.body, roof1.body, bobObject1.Diameter*2, 0);
	rope2 = new Rope(bobObject2.body, roof1.body, bobObject2.Diameter*2, 0);
	rope3 = new Rope(bobObject3.body, roof1.body, bobObject3.Diameter*2, 0);
	rope4 = new Rope(bobObject4.body, roof1.body, bobObject4.Diameter*2, 0);
    rope5 = new Rope(bobObject5.body, roof1.body, bobObject5.Diameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();  
  drawSprites();
 
}



