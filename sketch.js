var backgroundimg,tileimg,startimg,GameOverimg,tile,tile1,tile2;

 
function preload() {
  backgroundimg=loadImage("images/Background.png");
  tileimg=loadImage("images/Tile.jpg");
  startimg=loadImage("images/Starttile.jpg");
  GameOverimg=loadImage("images/GameOver.jpg");
}

function setup() {
  createCanvas(400,800);
 
}



function draw() {
  background(backgroundimg);
     drawline();
     pianotiles();
  
     drawSprites();
}
function drawline() {
 for(var i=0;i<800;i++){
   line(133,i,133,i+10)
   line(266,i,266,i+20)
 }
}

function pianotiles(){
  if (frameCount % 200=== 0) {
    tile = createSprite(133,0,20,10);
    tile.x = Math.round(random(20,90));
    tile.addImage(tileimg);
    tile.scale=0.5;
    tile.velocityY=2;
}
if (frameCount % 150=== 0) {
  tile1 = createSprite(266,0,20,10);
  tile1.x = Math.round(random(180,210));
  tile1.addImage(tileimg);
  tile1.scale=0.5;
  tile1.velocityY=2;
}
if (frameCount % 250=== 0) {
  tile2 = createSprite(266,0,20,10);
  tile2.x = Math.round(random(320,360));
  tile2.addImage(tileimg);
  tile2.scale=0.5;
  tile2.velocityY=2
}
}