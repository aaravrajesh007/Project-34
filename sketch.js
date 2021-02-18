const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;

function setup(){
    canvas = createCanvas(windowWidth/2,windowHeight/1.5);
    engine=Engine.create();
    world=engine.world;

    bob1 = new Pendulum(300,300,30);
    bob2 = new Pendulum(360,300,30);
    bob3 = new Pendulum(420,300,30);
    bob4 = new Pendulum(480,300,30);
    bob5 = new Pendulum(240,300,30);

    sling1 = new Sling(bob1.body,{x:300, y:100}) 
    sling2 = new Sling(bob2.body,{x:360, y:100}) 
    sling3 = new Sling(bob3.body,{x:420, y:100}) 
    sling4 = new Sling(bob4.body,{x:480, y:100}) 
    sling5 = new Sling(bob5.body,{x:240, y:100}) 

}

function draw(){
    background(0)
    Engine.update(engine);
    bob1.display();
    
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    
    sling1.display();
    sling2.display();
    sling3.display();
    sling4.display();
    sling5.display();

}

function mouseDragged(){
    Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY})
}