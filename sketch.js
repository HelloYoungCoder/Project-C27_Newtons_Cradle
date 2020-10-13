// Project_C27: Newton's Cradle
// Conservation of momentum and energy using a series of swinging spheres (Bobs)

//Namespacing

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

//Creating Variables
var roof_Obj;
var bob_Dia;
var bob_Obj1, bob_Obj2, bob_Obj3, bob_Obj4, bob_Obj5;
var rope_Obj1, rope_Obj2, rope_Obj3, rope_Obj4, rope_Obj5;

function setup() {
	createCanvas(1600, 1000);

	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Roof
	roof_Obj = new Roof(width/2,200,240,25);
	
	//Bobs
	bob_Obj1 = new Bob(700, 700, 40);
	bob_Obj2 = new Bob(750, 700, 40);
	bob_Obj3 = new Bob(800, 700, 40);
	bob_Obj4 = new Bob(850, 700, 40);
	bob_Obj5 = new Bob(900, 700, 40);

	bob_Dia = 25;

	
	console.log(bob_Obj1.body);
	
	//Rope

	rope_Obj1 = new Rope(bob_Obj1.body, roof_Obj.body, -(bob_Dia * 3), 0);
	rope_Obj2 = new Rope(bob_Obj2.body, roof_Obj.body, -(bob_Dia * 1.5), 0);
	rope_Obj3 = new Rope(bob_Obj3.body, roof_Obj.body, 0, 0);
	rope_Obj4 = new Rope(bob_Obj4.body, roof_Obj.body, bob_Dia * 1.5, 0);
	rope_Obj5 = new Rope(bob_Obj5.body, roof_Obj.body, bob_Dia * 3, 0);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(205, 189, 255);
  
  //Display Objects
  roof_Obj.display();
  bob_Obj1.display();
  bob_Obj2.display();
  bob_Obj3.display();
  bob_Obj4.display();
  bob_Obj5.display();

  rope_Obj1.display();
  rope_Obj2.display();
  rope_Obj3.display();
  rope_Obj4.display();
  rope_Obj5.display();
}

//Apply force when up arrow key is pressed
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  Matter.Body.applyForce(bob_Obj1.body,bob_Obj1.body.position,{x:-50,y:-45});
	}
}
