
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//variables
var ground1,ground2,ground3,ground4,ground5,ground6,ground7,ground8,ground9,ground10,ground11,ground12,ground13,ground14,ground15,ground16,ground17,ground18,ground19,ground20,ground21,ground22,ground23,ground24,ground25,ground26,ground27,ground28,ground29,ground30,ground31,ground32,ground33,ground34,ground35,ground36,ground37,ground38;
var obstacle1;

//load Images
function preload(){
  forestImage=loadImage("forest background.jpg")
  kidImage=loadAnimation("kid1.png","kid2.png","kid3.png")
  fireBallImage=loadImage("fireBall.png")
  ninjaStarImage=loadImage("ninjastar.png")
  axeImage=loadImage("axe.png")
  IceBallImage=loadImage("iceBall.png")
  swordImage=loadImage("sword.png")
}

function setup() {
  createCanvas(7400,600);

  engine = Engine.create();
  world = engine.world; 
  //create grounds

  ground1=new Ground(90,500,200,50);

  ground2=new Ground(320,420,200,50);

  ground3=new Ground(490,320,200,50);
  

  ground4=new Ground(660,450,200,50);
 

  ground5=new Ground(860,350,200,50);
  

  ground6=new Ground(1050,240,200,50);
 

  ground7=new Ground(1200,340,200,50);
 

  ground8=new Ground(1400,400,200,50);
 

  ground9=new Ground(1600,320,200,50);
 

  ground10=new Ground(1600,320,200,50);
 

  ground11=new Ground(1800,240,200,50);
  

  ground12=new Ground(2000,320,200,50);
 

  ground13=new Ground(2200,400,200,50);
  

  ground14=new Ground(2200,2400,200,50);
 

  ground15=new Ground(2400,320,200,50);
 

  ground16=new Ground(2600,240,200,50);
  

  ground17=new Ground(2800,320,200,50);
  

  ground18=new Ground(3000,400,200,50);
  

  ground19=new Ground(3200,320,200,50);
  

  ground20=new Ground(3400,240,200,50);
 

  ground21=new Ground(3600,320,200,50);
 

  ground22=new Ground(3800,400,200,50);
  

  ground23=new Ground(4000,320,200,50);


  ground24=new Ground(4200,240,200,50);
  

  ground25=new Ground(4400,320,200,50);
  

  ground26=new Ground(4600,400,200,50);
  

  ground27=new Ground(4800,320,200,50);
 

  ground28=new Ground(5000,240,200,50);
 

  ground29=new Ground(5200,320,200,50);
  

  ground30=new Ground(5400,400,200,50);
  

  ground31=new Ground(5600,320,200,50);
  

  ground32=new Ground(5800,240,200,50);
 

  ground33=new Ground(6000,320,200,50);
  
  ground34=new Ground(6200,400,200,50);
  

  ground35=new Ground(6400,320,200,50);
  

  ground36=new Ground(6600,240,200,50);
 

  ground37=new Ground(6800,320,200,50);
  
  ground38=new Ground(7000,400,200,50);
  
  //create pins
  obstacle1=new Obstacle(5200,300,60,30)
obstacle2=new Obstacle(490,280,60,30)
obstacle3=new Obstacle(6000,300,60,30)
obstacle4=new Obstacle(1200,300,60,30)
obstacle5=new Obstacle(2000,270,60,30)
obstacle6=new Obstacle(6200,200,60,30)
obstacle7=new Obstacle(3200,290,60,30)
  
//create thorns
thorns1=new Obstacle2(320,300,60,30)
thorns2=new Obstacle2(660,200,60,30)
thorns3=new Obstacle2(1600,200,60,30)
thorns4=new Obstacle2(1800,100,60,30)
thorns5=new Obstacle2(6800,200,60,30)
thorns6=new Obstacle2(2400,200,60,30)
thorns7=new Obstacle2(5000,200,60,30)
thorns8=new Obstacle2(3800,200,60,30)
thorns9=new Obstacle2(4400,200,60,30)
thorns10=new Obstacle2(4800,200,60,30)
thorns11=new Obstacle2(7000,200,60,30)
thorns12=new Obstacle2(5400,300,60,30)
thorns13=new Obstacle2(5600,200,60,30)

//create diffrent monsters
monster=new Enemy(870,300,90,60);
monster2=new Monster(5800,200,90,60);
monster3=new Monster2(6600,220,90,60);
monster4=new Monster3(3400,200,90,60);

//create kid
 kid=createSprite(90,420,40,40)
 kid.addAnimation("running",kidImage)
 kid.scale=0.3;
 kidBody=Bodies.rectangle(90,420,40,40)
 World.add(world,kidBody)

}

function draw() {
  background(forestImage);

  Engine.update(engine);
  kid.x=kidBody.position.x;
  kid.y=kidBody.position.y;;

//display grounds
ground1.display();
ground2.display();
ground3.display();
ground4.display();
ground5.display();
ground6.display();
ground7.display();
ground8.display();
ground9.display();
ground10.display();
ground11.display();
ground12.display();
ground13.display();
ground14.display();
ground15.display();
ground16.display();
ground17.display();
ground18.display();
ground19.display();
ground20.display();
ground21.display();
ground22.display();
ground23.display();
ground24.display();
ground25.display();
ground26.display();
ground27.display();
ground28.display();
ground29.display();
ground30.display();
ground31.display();
ground32.display();
ground33.display();
ground34.display();
ground35.display();
ground36.display();
ground37.display();
ground38.display();

//display pins
obstacle1.display();
obstacle2.display();
obstacle3.display();
obstacle4.display();
obstacle5.display();
obstacle6.display();
obstacle7.display();

//display diffrent monsters
monster.display();
monster2.display();
monster3.display();
monster4.display();

//display thorns
thorns1.display();
thorns2.display();
thorns3.display();
thorns4.display();
thorns5.display();
thorns6.display();
thorns7.display();
thorns8.display();
thorns9.display();
thorns10.display();
thorns11.display();
thorns12.display();
thorns13.display();

//call the functions
fireBall();
ninjaStar();
spawnAxe();
spawnIceBall();

drawSprites();
}

// create functions and add controls
function keyPressed(){
  if(keyCode===32){
    kid.velocityY=-4;
    Matter.Body.setVelocity(kidBody,{x:4,y:-10})
   }
  if(keyCode===82){
     kid.x=kid.x+10;
     translation={x:10,y:0}
     Matter.Body.translate(kidBody,translation)
   }
   if(keyCode===76){
     kid.x=kid.x-10;
     translation={x:-10,y:0}
     Matter.Body.translate(kidBody,translation)
  }
  // if(keyCode===70){
    // spawnSword();
   //}
}
function fireBall(){
  if(frameCount%100===0){
    fire=createSprite(5760,180,10,10)
    fire.addImage(fireBallImage);
    fire.velocityX=-5
    fire.lifetime=50;
    fire.scale=0.05
  }
}
function ninjaStar(){
  if(frameCount%100===0){
    star=createSprite(870,280,10,10)
    star.addImage( ninjaStarImage);
    star.velocityX=-5
    star.lifetime=50;
    star.scale=0.03;
  }
}
function spawnAxe(){
  if(frameCount%100===0){
    axe=createSprite(6600,210,10,10)
    axe.addImage(axeImage);
    axe.velocityX=-5
    axe.lifetime=50;
    axe.scale=0.03;
  }
}
function spawnIceBall(){
  if(frameCount%100===0){
    IceBall=createSprite(3400,190,10,10)
    IceBall.addImage(IceBallImage);
    IceBall.velocityX=-5
    IceBall.lifetime=50;
    IceBall.scale=0.03;
  }
}

//function spawnSword(){
  //if(keyCode===70){
    //sword=createSprite(kidBody.x,kidBody.y,10,10)
  //sword.addImage(swordImage);
    //sword.velocityX=5
    //sword.lifetime=50;
   // sword.scale=0.05;
//  }
//}
