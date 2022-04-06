var ground,groundimage
var car1 , car2,car1image,car2image
var ball,ballimage
var goal ,goalimage
var goal1 ,goal1image
var bomb , bombimage
var pipe ,pipeimage
var boder1,boder2,boder3,boder4,boder5,boder6,boder7,boder8
var score1 = 0 ;
var score2 = 0;
var reset , resetimage
var gameover , gameoverimage
var clappingsound , footballshotsound,explosionsound


var PLAY = 1;
var END = 0;
var gameState = "PLAY";



function preload(){
  ballimage = loadImage("ball.png");
  car1image = loadImage("right car.png");
  car2image  = loadImage("left car.png");
  groundimage = loadImage("ground.jpg");
  goalimage = loadImage("goal post2.PNG");
  goal1image = loadImage("goal post1.PNG");
  bombimage = loadImage("bomb.png");
 gameoverimage = loadImage("game over.png")
 resetimage = loadImage("reset.png")


 footballshotsound = loadSound("Football shot.mp3");
 clappingsound = loadSound("clapping.wav");
 explosionsound = loadSound("explosion.mp3")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  bombGroup =  new Group();
  //bomb =createSprite(400,400,50,50);
//bomb.addImage(bombimage)
gameover = createSprite(500,310,60,60)
gameover.scale=3;
gameover.addImage(gameoverimage)
gameover.visible = false;

reset = createSprite(510,20,60,60)
reset.addImage(resetimage)
reset.scale=0.2;





ball = createSprite(515,310,20,20);
//ball.debug = true ;
ball.setCollider("circle",0,0,20);
ball.addImage(ballimage);
ball.scale=0.3;

 goal =createSprite(1000,310,100,20);
 
 goal1 =createSprite(25,310,20,20);
 goal1.addImage(goal1image);
 goal.addImage(goalimage)
car1 =createSprite(860,310,20,20);

car2 =createSprite(160,310,20,20) ;

car1.addImage(car1image);
car1.scale=0.3;
car2.addImage(car2image);
car2.scale=0.5;
boder1 =createSprite(513,30,956,10)
boder1.shapeColor = "white"
boder2 =createSprite(513,593,956,10)
boder2.shapeColor = "white"
boder3 =createSprite(39,135,8,220)
boder3.shapeColor = "white"
boder4 =createSprite(39,480,8,220)
boder4.shapeColor = "white"
boder5 =createSprite(985,480,8,220)
boder5.shapeColor = "white"
boder6 =createSprite(985,137,8,220)
boder6.shapeColor = "white"
boder7 =createSprite(15,315,8,77)
boder7.shapeColor = "white"
boder8 =createSprite(1010,315,8,77)
boder8.shapeColor = "white"

}

function draw() {
  

  if (gameState==="PLAY"){

    spawnbomb();
    car1.velocityY = 0;
    car1.velocityX = 0; 
    
    car2.velocityY = 0;
    car2.velocityX = 0; 

    

   

    if (ball.isTouching(car1)) {
      footballshotsound.play();
      //footballshotsound.setVolume(5);
    }

    if (ball.isTouching(car2)) {
      footballshotsound.play();
      //footballshotsound.setVolume(5);
    }
    if (ball.collide(goal)) {
      score1=score1+1
      clappingsound.play();
      ball.velocityY = 0;
      ball.velocityX = 0; 
      ball.x = 515;
      ball.y = 310;
      car1.x = 860 ;
      car1.y = 310 ; 
      car2.x = 160 ; 
      car2.y = 310 ;
      //footballshotsound.setVolume(5);
    }
    if (ball.collide(goal1)) {
      score2=score2+1
      clappingsound.play();
      ball.velocityY = 0;
      ball.velocityX = 0; 
      ball.x = 515;
      ball.y = 310;
      car1.x = 860 ;
      car1.y = 310 ; 
      car2.x = 160 ; 
      car2.y = 310 ;
      //footballshotsound.setVolume(5);
    }
    if (bombGroup.isTouching(car1)) {
      score1=score1+1
      //car1.destroy();
      explosionsound.play();
      gameover.visible = true;
     car1.visible = false;
      gameState=END;
      //footballshotsound.setVolume(5);
    }
    if (bombGroup.isTouching(car2)) {
      score2=score2+1
      //car2.destroy();
      explosionsound.play();
      gameover.visible = true;
      car2.visible=false;
      gameState=END;
      //footballshotsound.setVolume(5);
    }
    if (keyIsDown(UP_ARROW)) {
      car1.velocityY = -15 ;
      car1.velocityX = 0 ;
         
     }
     if (keyIsDown(DOWN_ARROW)) {
      car1.velocityY = 15 ;
      car1.velocityX = 0 ;
         
     }
     if (keyIsDown(RIGHT_ARROW)) {
      car1.velocityY = 0 ;
      car1.velocityX = 15 ;
         
     }
     if (keyIsDown(LEFT_ARROW)) {
      car1.velocityY = 0 ;
      car1.velocityX = -15 ;
         
     }
     if (keyIsDown(87)) {
      car2.velocityY = -15 ;
      car2.velocityX = 0 ;
         
     }
     if (keyIsDown(83)) {
      car2.velocityY = 15 ;
      car2.velocityX = 0 ;
         
     }
     if (keyIsDown(68)) {
      car2.velocityY = 0 ;
      car2.velocityX = 15 ;
         
     }
     if (keyIsDown(65)) {
      car2.velocityY = 0 ;
      car2.velocityX = -15 ;
    }
    
 }
 
 //if (keyDown("space")) {
 // gameState ==="PLAY";
     
// } 

 if (gameState===END){

 // if (bombGroup.collide(car1)) {
  //  car1.destroy();
  //  score1=score1+1
  //  bombGroup.setVelocityYEach(0);
   
    //gameover.lifetime = 300;
    //bombGroup.visible = false;
    bombGroup.destroyEach();
    //bombGroup.lifetime = -10;
       car2.velocityY = 0 ;
       car2.velocityX = 0 ;
       ball.velocityY = 0 ;
       ball.velocityX = 0 ;
  // }
  // if (bombGroup.collide(car2)) {
   // car2.destroy();
   // score2=score2+1
  //  bombGroup.setVelocityYEach(0);
    
    //gameover.lifetime = 300;
    //bombGroup.visible = false;
   // bombGroup.destroyEach();
   //bombGroup.lifetime = -10;
    //car1.velocityY = 0 ;     
    //car1.velocityX = 0 ;
    //ball.velocityY = 0 ;
   // ball.velocityX = 0 ;

   //}

 }
  
 
  createEdgeSprites();
  ball.bounceOff(boder1);
  ball.bounceOff(boder2);
  ball.bounceOff(boder3);
  ball.bounceOff(boder4);
  ball.bounceOff(boder5);
  ball.bounceOff(boder6);
  ball.bounceOff(boder7);
  ball.bounceOff(boder8);
  ball.bounceOff(car1);
  ball.bounceOff(car2);

  car1.bounceOff(boder1);
  car1.bounceOff(boder2);
  car1.bounceOff(boder3);
  car1.bounceOff(boder4);
  car1.bounceOff(boder5);
  car1.bounceOff(boder6);
  car1.bounceOff(boder7);
  car1.bounceOff(boder8);
  car1.bounceOff(goal);
  car1.bounceOff(goal1);
  car1.bounceOff(car2);

  car2.bounceOff(boder1);
  car2.bounceOff(boder2);
  car2.bounceOff(boder3);
  car2.bounceOff(boder4);
  car2.bounceOff(boder5);
  car2.bounceOff(boder6);
  car2.bounceOff(boder7);
  car2.bounceOff(boder8);
  car2.bounceOff(goal);
  car2.bounceOff(goal1);
  car2.bounceOff(car1);
 


  background(groundimage);
  
 
 
  
 
  

   boder1.visible = false;
   boder2.visible = false;
   boder3.visible = false;
   boder4.visible = false;
   boder5.visible = false;
   boder6.visible = false;
   boder7.visible = false;
   boder8.visible = false;
//if (gameState==="serve"){  
   textSize(20);
   fill(255);
   text("USE KEY..W,S,A,D..TO MOVE LEFT CAR " ,width-970,100);
 
 
  textSize(20);
  fill(255);
  text("USE ..ARROW KEYS..TO MOVE RIGHT CAR " ,width-480,100);
  
    
 // textSize(20);
 // fill(255);
 // text("PRESS..SPACE KEY..TO PLAY THE GAME",width-500,500);
//}
   textSize(20);
   fill(255);
   text("PLAYER1score: "+score2, width-200,20);
   
   if (ball.collide(goal)) {
   score1=score1+1
   ball.velocityY = 0;
   ball.velocityX = 0; 
   }
   textSize(20);
   fill(255);
   text("PLAYER2score: "+score1, width-990,20);
   
   if (ball.collide(goal1)) {
    score2=score2+1
    ball.velocityY = 0;
    ball.velocityX = 0;  
    }
    ball.depth = goal.depth;
    goal.depth = goal.depth + 1;

    ball.depth = goal1.depth;
    goal1.depth = goal1.depth + 1;


    

    
    
     
     
   
   if(mousePressedOver(reset)) {
    bombGroup .destroyEach ();
    gameState="PLAY";
        car1.x = 860 ;
        car1.y = 310 ; 
        car2.x = 160 ; 
        car2.y = 310 ;
        ball.x = 515 ;
        ball.y = 310 ;
       
       
        score1 = 0;
        score2 = 0;
        gameover.visible = false;
        car1.visible=true;
        car2.visible=true;

       

  }
 
    drawSprites();

    } 
    
    function spawnbomb() {
      //write code here to spawn the clouds
      if (frameCount % 200 === 0) {
        var bomb = createSprite(600,0,40,10);
        bomb.x = Math.round(random(20,800));
        bomb.addImage(bombimage);
        bomb.scale = 0.5;
       bomb.velocityY = 2;
        
         //assign lifetime to the variable
        bomb.lifetime = 300;
        
       
        //add each bomb to the group
        bombGroup.add(bomb);
      }
      
     
    }
  
