const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =Matter.Bodies;

//namespace - call it in short(nickname)

var engine, world, ground,ball1;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var options = { isStatic : true}

  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(world,ground);

  ball1_options = {restitution : 0.8}

  ball1 = Bodies.circle(100, 50, 20, ball1_options);
  World.add(world,ball1);
 
  ball2_options = {restitution : 1}
  
  ball2 = Bodies.circle(350, 50, 20, ball2_options);
  World.add(world,ball2);
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER); 
  rect(ground.position.x,ground.position.y, 400,20);
  ellipse(RADIUS);
  ellipse(ball1.position.x,ball1.position.y,40, 40);
  ellipse(ball2.position.x,ball2.position.y,40, 40);

}