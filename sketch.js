
var score
var winGroup,win1Group

function preload(){
  monster = loadImage("polygon.png")
  winner1 = loadImage("mango.png")
  winner2 = loadImage("trophy.jpg")
  enemy1 = loadImage("obstacle1.png")
  backgroundImg = loadImage("Hot Air Ballon-01.png")
}

function setup() {
  createCanvas(1600,400);


  ground2 = createSprite(1600,200,1600,400)
   ground2.addImage(backgroundImg)
   ground2.velocityX = -10


   ball1 = createSprite(800, 200, 50,50);
   ball1.addImage(monster)
   ball1.scale =  0.2
   
   
   ground1 = createSprite(1600,400,1600,20)
  // ground1.velocityX = -3
   ground1.visible = false

   winGroup = createGroup();
   win1Group = createGroup();
   enemyGroup = createGroup();


   score = 0
}

function draw() {
  background(255);  

  camera.x  = ball1.x


  if(keyIsDown(UP_ARROW)){
    ball1.velocityY = -10
  }

 
    //trex.velocityY = -12;
   

  ball1.velocityY = ball1.velocityY+0.8

  if(winGroup.isTouching(ball1)){
    winGroup.destroyEach();
    score = score+5
  }

 
  

 
  //camera.position.y = ball1.y
  
  spawnEnemy();
  spawnWin();
  spawnWin1();

ball1.collide(ground1)

if(ground2.x<0){
  ground2.x = ground2.width/2
}
  drawSprites();

  noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, 350, 50)

        if(enemyGroup.isTouching(ball1)){
   
          text("GameOver",400, 200)
        ball1.velocityX = 0
        ball1.velocityY = 0
        enemyGroup.setVelocityXEach(0)
          winGroup.setVelocityXEach(0)
          win1Group.setVelocityXEach(0)
      
         
        
             
        }

        if(win1Group.isTouching(ball1)){
          ball1.velocityX = 0
          ball1.velocityY = 0
          enemyGroup.setVelocityXEach(0)
            winGroup.setVelocityXEach(0)
            win1Group.setVelocityXEach(0)


            text("YOU WIN!!!!!!",400,20)
        
        }
      
}

function spawnEnemy(){
  if(frameCount%60 === 0){
    var enemy = createSprite(camera.x+width/2,300,30,30)
    enemy.addImage(enemy1)
   
    enemy.y = Math.round(random(100,300))
    enemy.scale = 0.9;
    enemy.velocityX = -(4+3*score/10)
    enemy.lifetime = 800
    enemyGroup.add(enemy)
  
  }
  }

  function spawnWin(){
    if(frameCount%120 === 0){
    var winner10 = createSprite(camera.x+width/2,200,30,30)
    winner10.addImage(winner1)
    winner10.y = Math.round(random(100,310))
    winner10.velocityX = -(3+3*score/10)
    winner10.scale = 0.1
    winner10.lifetime = 400
    winGroup.add(winner10)
    
  
  }
}

function spawnWin1(){
  if(frameCount%800 === 0){
  var winner20 = createSprite(camera.x+width/2,200,30,30)
  winner20.addImage(winner2)
  winner20.y = Math.round(random(100,300))
  winner20.velocityX = -(3+3*score/10)
  winner20.scale = 0.1
  winner20.lifetime = 600
  win1Group.add(winner20)

}
}
  