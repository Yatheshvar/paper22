
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies

var ground;
var dustbin1;
var stand2;
var stand3;
var paper1;



function setup() {
	createCanvas(1625, 650);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground(600,630,1600,20);
	dustbin1 = new Dustbin(945,550,125,23);
	stand2 = new Stand(880,545,10,150);
	stand3 = new Stand(1011,545,10,150);
	paper1 = new Paper();
	
}


function draw() {
	background("white");
	Engine.update(engine);
	ground.display();
	dustbin1.display();
	stand2.display();
	stand3.display(); 	
    paper1.display();
	
}
function keyPressed (){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-60});
	}
}


