const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraints = Matter.Constraints;

var ground;
var canvas;
var engine, world;

function setup() {
  canvas = createCanvas(480,800);  

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(240, 790, 480, 2);
}

function draw() {
  background(255,255,255);  
  display(ground);
}