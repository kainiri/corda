const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var rope; 
let engine;
let world;
var ground;
var circle;
var fruta_con;


function setup() 
{
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,690,600,20);
  rope = new Rope(7,{x:245,y:30});
  var circle_options ={
    density:0.001
  }
  circle = Bodies.circle(300,300,20,circle_options); 
  Matter.Composite.add(rope.body,circle);
  fruta_con = new Link(rope,circle);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  ground.show();
  
  Engine.update(engine);
  rope.show();
  ellipse(circle.position.x,circle.position.y,20,20);
 
   
}
