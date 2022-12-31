
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
// create con variable
var con;
var ground;

var top_wall;
var ball;

var btn1;
var btn2;
function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
  }
   
  
  btn2 = createImg('up.png');
  btn2.position(20,30);
  btn2.size(50,50);
  btn2.mouseClicked(vForce);
  

  ground =new Ground(200,390,400,20);


  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);
  // we should create this con only after creating the ball (otherwise, it won't work)
  // we give the coordinates for the starting and ending part of the thread
  // we give the length and the thickness for the thread
  con=Matter.Constraint.create({
    pointA:{x:200, y:20},
    bodyB:ball,
    pointB:{x:0,y:0},
    length:100,
    stiffness:0.1
  });
  World.add(world,con);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);

  ellipse(ball.position.x,ball.position.y,20);
  // we give the thread a particular thickness and the color
  strokeWeight(3);
  stroke("white");
  // we give this so that the thread is seen on the screen, otherwise it would be transparent
  line (con.pointA.x, con.pointA.y, ball.position.x, ball.position.y)
  ground.show();
  
  Engine.update(engine);
}


function vForce()
{
  // we change the x axis so that the ball/ bob moves horizontally and not vertically
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
}
  


