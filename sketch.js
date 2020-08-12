
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wastepaper;
var theground,bin,bin2,bin3;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.

  wastepaper = new paper(100,10,40);
  theground= new ground(1,490,1000,10);
  bin= new Trash(750,480,150,10);
  bin2= new Trash(900,430,10,60);
  bin3= new Trash(750,430,10,60);
  
  
	Engine.run(engine);
	
}


function draw() {
  //rectMode(CENTER);
  background(0);
  
  drawSprites();
  console.log("in sketch reached line 29");
  wastepaper.shapecolor="blue";
  wastepaper.display();
  theground.display();
  bin.display();
  bin2.display();
  bin3.display();
}
function keyPressed(){
if (keyCode === UP_ARROW){
Matter.Body.applyForce(wastepaper.body,wastepaper.body.position,{x:800,y:430});

    }


}

