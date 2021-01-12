// //declaring all the things inside matter,js
// const Engine=Matter.Engine;
// const World=Matter.World;
// const Bodies=Matter.Bodies;

// var engine,world;
// var Ball;
// var ground;

// function setup() {
//   createCanvas(400,400);
//   //creating engine.
//  engine = Engine.create();
//  //creating the world and giving / assigning engine in it.
//  world=engine.world;

// //  var Ball_options={
// //    isStatic:true
// //  }
//  ball=Bodies.circle(200,100,50);//createed body for rect
//  World.add(world,Ball);
//  //console.log(Ball.position.x);
//  console.log(Ball);

// var ground_options={
//   isStatic:true
// }

// ground = Bodies.rectangle(200,380,400,400,ground_options);
// World.add(world,ground);
// }

// function draw() {
//   background("chartreuse"); 
//   Engine.update(engine); 
//  ellipseMode(CENTER);
// //rect(200,200,50,50);
// ellipse(Ball.position.x,Ball.position.y,50,50);
// //rectMode(CENTER);
// rect(ground.position.x,ground.position.y,400,50);
// }
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);

    var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);

    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}