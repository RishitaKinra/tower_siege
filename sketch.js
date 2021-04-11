const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ground;
var stand1,stand2;
var slingShot;
var polygon, polygon_img;

function preload(){
  polygon_img = loadImage("polygon.png");
}

function setup() {
  createCanvas(windowWidth,windowWidth);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(windowWidth/2,windowHeight-20,windowWidth,20);
  stand1 = new Stand(windowWidth/2-80,windowHeight/2+100,300,10);
  stand2 = new Stand(windowWidth/2+250,windowHeight/2,200,10);
 
  //level one
  block1 = new Block(windowWidth/2-150,windowHeight/2+75,30,40);
  //console.log(block1);
  block2 = new Block(windowWidth/2-150,windowHeight/2+75,30,40);
  block3 = new Block(windowWidth/2-120,windowHeight/2+75,30,40);
  block4 = new Block(windowWidth/2-90,windowHeight/2+75,30,40);
  block5 = new Block(windowWidth/2-60,windowHeight/2+75,30,40);
  block6 = new Block(windowWidth/2-30,windowHeight/2+75,30,40);
  block7 = new Block(windowWidth/2,windowHeight/2+75,30,40);
  //level two
  block8 = new Block(windowWidth/2-150,windowHeight/2+35,30,40);
  block9 = new Block(windowWidth/2-120,windowHeight/2+35,30,40);
  block10 = new Block(windowWidth/2-90,windowHeight/2+35,30,40);
  block11 = new Block(windowWidth/2-60,windowHeight/2+35,30,40);
  block12 = new Block(windowWidth/2-30,windowHeight/2+35,30,40);
  //level three
  block13 = new Block(windowWidth/2-120,windowHeight/2-5,30,40);
  block14 = new Block(windowWidth/2-90,windowHeight/2-5,30,40);
  block15 = new Block(windowWidth/2-60,windowHeight/2-5,30,40);
  //top
  block16 = new Block(windowWidth/2-90,windowHeight/2-45,30,40);

  //set 2 for second stand
  //level one
  blocks1 = new Block(windowWidth/2+190,windowHeight/2-25,30,40);
  blocks2 = new Block(windowWidth/2+220,windowHeight/2-25,30,40);
  blocks3 = new Block(windowWidth/2+250,windowHeight/2-25,30,40);
  blocks4 = new Block(windowWidth/2+280,windowHeight/2-25,30,40);
  blocks5 = new Block(windowWidth/2+310,windowHeight/2-25,30,40);
  //level two
  blocks6 = new Block(windowWidth/2+220,windowHeight/2-65,30,40);
  blocks7 = new Block(windowWidth/2+250,windowHeight/2-65,30,40);
  blocks8 = new Block(windowWidth/2+280,windowHeight/2-65,30,40);
  //top
  blocks9 = new Block(windowWidth/2+250,windowHeight/2-105,30,40);

  polygon = Bodies.circle(200,200,20, {restitution: 1, friction: 0.2, density: 1 });
  World.add(world,polygon);

  slingShot = new SlingShot(this.polygon,{x:200, y:200});
}
function draw() {
  background(151, 55, 204); 

  ground.display();
  stand1.display();
  stand2.display();
  strokeWeight(2);
  stroke(15);
  fill(244, 0, 77);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill(255, 216, 0);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill(148, 255, 0);
  block13.display();
  block14.display();
  block15.display();
  fill(255, 67, 0);
  block16.display();
  fill(33, 49, 188);
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  fill("turquoise");
  blocks6.display();
  blocks7.display();
  blocks8.display();
  fill("pink")
  blocks9.display();
  fill("gold");
  imageMode(CENTER);
  image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();

}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
