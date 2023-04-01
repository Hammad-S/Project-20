/*

PHYSICS ENGINE is a separate p5 library matter.js. It helps us create an environment with 2d objects 
of different shapes, such as circle, box, cube, star, pentagon, etc

each shape acts like a 3D, real-life object with properties like gravity(isStatic), density, 
restitution, friction, speed, velocity, position, radius, label, etc

these properties have differnet values, such as isStatic: true/false, density: 0, 5, 54....

so these values of the properties help us deciode the behaviour of each object that we create.


now, physics engine, has 3 levels,
1. engine --- milkyway galaxy-- universe
2. world  --- planet earth
3. bodies --- living and nonliving things, human, plastic, iron, water, air, etc



*/

/*
Goals:
   ● Use a physics engine to create a world and the objects in them.
  ● Integrate the physics engine with the p5 code to create
  interactive objects following the rules of physics in this world.
  ● Tune the physics engine to change the behavior of the
  objects in your world.
*/

//Declare variables for game objects and behaviour indicators(FLAGS)

//constants
//this in reference to library concepts so that we can use it for support in code
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//declare variables to assign the simulation objects
var hsEngine, hsWorld;

var ground;
var block1, block2;
var rotator1, rotator2, rotator3;
var ball1, ball2, ball3, ball4, ball5;

var angle1 = 60;
var angle2 = 60;
var angle3 = 60;

function setup() {
  createCanvas(700, 600);

  //create simulated engine and world
  hsEngine = Matter.Engine.create();
  hsWorld = hsEngine.world;

  //create ground body
  ground = Matter.Bodies.rectangle(350, 580, 700, 10, { isStatic: true });
  console.log("GROUND: ");
  console.log(ground);
  //as soon as we create body, we need to add it to the world,
  //in similar fashion, we create birth certificate for a baby as sosn as they are born,
  //so we can announce their citizenship
  //Master.World.add(name of the current world, body we want to add)
  Matter.World.add(hsWorld, ground);

  /*
   create ball body
   Mattter.Bodies.circle(x, y, radius, {physics properties : modified value})
   here, x, y, radius are mandatory
   {list of physical properties is optional}
   */
  ball1 = Matter.Bodies.circle(300, 100, 20, { restitution: 0.6 });
  console.log("BALL: ");
  console.log(ball1);
  /*
  as soon as we create body, we need to add it to the world,
  in similar fashion, we create birth certificate for a baby as soon as they are born, 
  so we can announce their citizenship
  Matter.World.add(name of the current world, body we want to add)
  */
  Matter.World.add(hsWorld, ball1);

  ball2 = Matter.Bodies.circle(280, 50, 5, { restitution: 0.8 });
  ball3 = Matter.Bodies.circle(320, 60, 10, { restitution: 0.8 });
  ball4 = Matter.Bodies.circle(290, 40, 16, { restitution: 0.8 });
  ball5 = Matter.Bodies.circle(310, 70, 8, { restitution: 0.8 });

  Matter.World.add(hsWorld, ball2);
  Matter.World.add(hsWorld, ball3);
  Matter.World.add(hsWorld, ball4);
  Matter.World.add(hsWorld, ball5);

  //created block bodies
  block1 = Bodies.rectangle(100, 400, 150, 20, {
    isStatic: true,
  });
  World.add(hsWorld, block1);

  block2 = Bodies.rectangle(400, 400, 150, 20, {
    isStatic: true,
  });
  World.add(hsWorld, block2);

  //created all the three rotator bodies
  var rotator_options = { isStatic: true };

  rotator1 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
  World.add(hsWorld, rotator1);

  rotator2 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
  World.add(hsWorld, rotator2);

  rotator3 = Bodies.rectangle(250, 200, 150, 20, rotator_options);
  World.add(hsWorld, rotator3);
}

function draw() {
  background("lightgreen");

  //sctivating the engine we have created
  Engine.update(hsEngine);

  //styling the bodies here
  fill("pink");
  rectMode(CENTER);
  ellipseMode(RADIUS);

  //display ground body
  //rect(x, y, width, height)
  rect(ground.position.x, ground.position.y, 700, 10);

  //display ball body
  ellipse(ball1.position.x, ball1.position.y, 40, 40);
  ellipse(ball2.position.x, ball2.position.y, 10, 10);
  ellipse(ball3.position.x, ball3.position.y, 20, 20);
  ellipse(ball4.position.x, ball4.position.y, 32, 32);
  ellipse(ball5.position.x, ball5.position.y, 16, 16);

  //created shape for blicks
  rect(block1.position.x, block1.position.y, 150, 20);
  rect(block2.position.x, block2.position.y, 150, 20);

  //created shape for all the rotators
  /*

  Matter.Body.rotate(body, rotation)
  Rotates a body by a given angle relative to its current angle. By default angular velocity is unchanged. 
  If updateVelocity is true then angular velocity is inferred from the change in angle.

  Parameters:
  body ---  save a Body
  rotation--- give a Number
*/
  Matter.Body.rotate(rotator1, angle1);
  push();
  //it measures the distanc eof the given x, y from the origin point
  //if u have used, translate function, you will use 0,0 as x and y values in the rect command or any shape command
  translate(rotator1.position.x, rotator1.position.y);
  rotate(angle1);
  rect(0, 0, 150, 20);
  pop();
  angle1 += 0.2;

  Matter.Body.rotate(rotator2, angle2);
  push();
  translate(rotator2.position.x, rotator2.position.y);
  rotate(angle2);
  rect(0, 0, 150, 20);
  pop();
  angle2 += 0.3;

  Matter.Body.rotate(rotator3, angle3);
  push();
  translate(rotator3.position.x, rotator3.position.y);
  rotate(angle3);
  rect(0, 0, 150, 20);
  pop();
  angle3 += 0.4;
}
