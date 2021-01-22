var PLAY = 1;
var END = 0;
var gameState = 1;
var fruitGroup
var knife
var monGroup
var knifeI
var score = 0;
var fruit
var fruitI
var mon
var monI
var fruitI2
var fruitI3
var monI2
var GO
var epic_1_2_switch
var GON
var GONE
function preload(){
  knifeI = loadImage("sword.png");
 fruitI = loadImage("fruit1.png");
  fruitI2 = loadImage("fruit2.png");
  fruitI3 = loadImage("fruit3.png");
  monI = loadImage("alien1.png");
  monI2 = loadImage("alien2.png");
  GO = loadImage("gameover.png");
  GON = loadSound("knifeSwooshSound.mp3");
  GONE = loadSound("gameover.mp3");
}

function setup(){
  knife = createSprite(40,200,20,20);
  var message = "test"
  console.log(message);
  knife.addImage(knifeI);
  knife.scale = .5;
  fruitGroup = new Group();
  monGroup = new Group();
 
}

function draw(){
  
  background("lightgreen");
  if (gameState === PLAY){
    knife.x = mouseX;
    knife.y = mouseY;
    if (knife.isTouching(fruitGroup)){
      score = score+1;
      fruitGroup.destroyEach();
      GON.play();
      
    
    }
     F();
  M();
    knife.scale = .5;
    if (knife.isTouching(monGroup)){
      gameState = END;
      GONE.play();
      
    }
  }
  else {
    knife.addImage(GO);
    knife.y = 200;
    knife.x = 200;
    knife.scale = 1;
  }
  text("score " + score,300,50);
  
  knife.debug = true;
  console.log(epic_1_2_switch);
drawSprites();
}

function F(){
  epic_1_2_switch = Math.round(random(1,2));
  var randF = Math.round(random(1,3));
  if (frameCount%60 === 0){
    fruit = createSprite(200,400,40,40);
    fruit.x = Math.round(random(0,400))
     switch(randF){
    case 1: fruit.addImage(fruitI);
      break;
      case 2: fruit.addImage(fruitI2);
      break;
      case 3: fruit.addImage(fruitI3);
    default: break;
  }
    fruit.velocityY = -5;
    fruit.scale = .3;
    fruit.lifetime = 100;
    fruitGroup.add(fruit);
    if (epic_1_2_switch === 1 && score > 3){
      fruit.velocityY = -10;
      fruit.lifetime = 50;
      
    }
    if (epic_1_2_switch === 2){
      fruit.y = 0;
      fruit.velocityY = 5;
      if(score > 3){
        fruit.velocityY = 10;
        fruit.lifetime = 50;
      }
    }
  }
 
}
function M(){
  var randM = Math.round(random(1,2));
  if (frameCount%80 === 0){
    mon = createSprite(400,400,40,40);
    mon.x = Math.round(random(0,400));
    switch(randM){
      case 1: mon.addImage(monI);
        break;
        case 2: mon.addImage(monI2);
        break;
        default: break;
    }
    mon.velocityY = -5;
    mon.lifetime = 100;
    monGroup.add(mon);
    if(epic_1_2_switch === 1 && score > 9){
      mon.velocityY = -10;
      mon.lifetime = 50;
    }
    if (epic_1_2_switch === 2){
      mon.y = 0;
      mon.velocityY = 5;
      if(score > 9){
        mon.velocityY = 10;
        mon.lifetime = 50;
      }
    }
  }
  
}

