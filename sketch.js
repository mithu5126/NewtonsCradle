
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof1, rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bobObject1 = new bob(250,450,50);
bobObject2 = new bob(300,450,50);
bobObject3 = new bob(350,450,50);
bobObject4 = new bob(400,450,50);
bobObject5 = new bob(450,450,50);
roof1 = new Roof(350,250,300,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gainsboro");

bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();
roof1.display();

  
  drawSprites();
 
}



