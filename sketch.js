var bgImg;
var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2;
function preload() {
    bgImg = loadImage("images/garden.png")
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimtaion("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(500,600,50,50);
    cat.addAnimation("catSleeping", catImg1);
    cat.scale=0.2;

    mouse = createSprite(200,600,50,50);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale=0.1;
}

function draw() {
    background(bgImg);
    if (cat.x-mouse.x<cat.width-mouse.width/2){
        cat.velocityX=0;
        cat.addAnimation("lastImg", catImg3);
        cat.x=200;
        cat.scale=0.1;
        cat.changeAnimation("lastImg");
        mouse.addAnimation("mouselastImg", mouseImg2);
        mouse.scale=0.1;
        mouse.changeAnimation("mouselastImg");
    }
    //Write condition here to evalute if tom and jerry collide
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  
  if (keyCode === LEFT_ARROW){
      cat.velocityX=-5
      cat.addAnimation("catRunning", catImg2);
      cat.changeAnimation("catRunning");
    mouse.addAnimation("mouseStealing", mouseImg2);
    mouse.frameDelay = 25;
    mouse.changeAnimation("mouseTeasing");
    }
}
