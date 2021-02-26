const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
 
var particle
var plinkos = [];
var divisions = []
var divisionHeight=300;
var score =0;
var turn = 0
var gameState = "start"
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,115));
    }

     for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,155));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,195));
    }
    for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,235));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,315));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,355));
    }
    for (var j = 25; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,395));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,435));
    }


    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  textSize(30)
  text("500", 335, 550)
  text("500", 415, 550)
  text("100", 255, 550)
  text("100", 175, 550)
  text("100", 95, 550)
  text("100", 15, 550)
  text("200", 495, 550)
  text("200", 575, 550)
  text("200", 655, 550)
  text("200", 735, 550)
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   if(particle != null){
     particle.display()
     if(particle.body.position.y>760){
        if(particle.body.position.x>320 && particle.body.position.x<480){
          score += 500
          particle=null
          if(turn>=5)gameState = "end"
        }
     }
   }
   if(particle != null){
    particle.display()
    if(particle.body.position.y>760){
       if(particle.body.position.x>481 && particle.body.position.x<900){
         score += 200
         particle=null
         if(turn>=5)gameState = "end"
       }
    }
  }
  if(particle != null){
    particle.display()
    if(particle.body.position.y>760){
       if(particle.body.position.x < 319){
         score += 100
         particle=null
         if(turn>=5)gameState = "end"
       }
    }
  }
  if(gameState === "end"){
    textSize(300)
    text("Game Over", 30, 200)
  }
}
function mousePressed(){
  if(gameState != "end"){
    turn++
    particle = new Particle(mouseX, 10, 10, 10)
  }
}