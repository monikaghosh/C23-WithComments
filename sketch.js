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

    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);

    //to create an object of a class -we use the new keyword and use the pararameter of the constructor
    box1 = new Box(200,200,50,30); //box1 is the object of the class Box

    box2 = new Box (230,100,30,70);


}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);


    box1.display(); //to use anything that the box1 has we will use the .operator
    box2.display();
}