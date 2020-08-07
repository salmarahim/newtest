const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var ground;
var ball;
var chain;
var score=0;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;
   Engine.run(engine)
   ground=new Ground(400,250,250,20)
   
   box1=new Box(320,200,45,45);
   box2=new Box(370,200,45,45);
   box3=new Box(420,200,45,45);
   box4=new Box(470,200,45,45);
   
   box5=new Box(340,150,45,45);
   box6=new Box(390,150,45,45);
   box7=new Box(450,150,45,45);
   
   box8=new Box(370,100,45,45);
   box9=new Box(430,100,45,45);
   
   
   box10=new Box(400,50,45,45);
   
   ball=new Ball(100,200,30,30)
chain=new Chain(ball.body,{x:100,y:120})

}

function draw() {
  background(0); 
  //Engine.update(engine); 
 ground.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
ball.display();
chain.display();
 box1.score();
 box2.score();
 box3.score();
 box4.score();
 box5.score();
 box6.score();
 box7.score();
 box8.score();
 box9.score();
 box10.score();
 text("score:"+score,750,40)
textSize("25")
}
function mouseDragged(){
 Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
  
}
  function mouseReleased(){
  chain.fly();
}
