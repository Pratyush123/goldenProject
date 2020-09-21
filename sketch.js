var player;

var PaddlesGroup = new Group();
var Paddles2Group = new Group();
var Paddles3Group = new Group();
var CloudsGroup = new Group();
var Clouds2Group = new Group();
var MangoGroup = new Group();

function setup(){

createCanvas(900,600);

player = createSprite(450,300,80,80);
player.scale = 0.2;
player.addImage("boy",player_img);
player.shapeColor = "red";


}

function preload(){
    player_img = loadImage("../images/boy.png");
    background_img = loadImage("../images/background.png");
    paddle_img = loadImage("../images/paddle.png");
    jumping_img = loadImage("../images/jumping.png");
    cloud_img = loadImage("../images/cloud.png");
    mango_img = loadImage("../images/mango.png");
}

function draw(){
    background("silver");

    
   if(keyDown("up")){
       player.velocityY = -11;
       player.addImage("jumping",jumping_img);
       }
       if(keyDown("down")){
           player.velocityY = 5;
       }
       if(keyDown("right")){
           player.velocityX = 3;
       }
       if(keyDown("left")){
           player.velocityX = -3;
       }
       if(keyDown("space")){
           
       }

//if(PaddlesGroup.isTouching(player)){
   //player.velocityY = 0;
//}



   player.velocityY= player.velocityY + 0.6;
spawnPaddles2();  
spawnCloud2(); 
spawnMango();
spawnCloud();
spawnPaddles();
spawnPaddles3();

drawSprites();
};
function spawnPaddles(){
    if(World .frameCount%39===0){
        var paddle = createSprite(450,0,40,10);
        paddle.velocityY = 6;
        paddle.scale = 0.6;
        paddle.lifetime = 200;
        paddle.visible = true;
        paddle.addImage("paddle",paddle_img);
        paddle.depth = player.depth;
        player.depth = player.depth + 1;
        PaddlesGroup.add(Paddles);
        createEdgeSprites();
    }
}
function spawnCloud(){
    if(World .frameCount%150===0){
        var cloud = createSprite(200,0,40,10);
        cloud.velocityY = 3;
        cloud.Opacity = 3;
        cloud.scale = 0.2;
        cloud.lifetime = 300;
        cloud.visible = true;
        cloud.addImage("cloud",cloud_img);
        cloud.depth = player.depth;
        player.depth = player.depth + 1;
        CloudGroup.add(Cloud);
        createEdgeSprites();
    }
}
function spawnCloud2(){
    if(World .frameCount%150===0){
        var cloud2 = createSprite(850,0,40,10);
        cloud2.velocityY = 4;
        cloud2.Opacity = 3;
        cloud2.scale = 0.2;
        cloud2.lifetime = 300;
        cloud2.visible = true;
        cloud2.addImage("cloud",cloud_img);
        cloud2.depth = player.depth;
        player.depth = player.depth + 1;
        Cloud2Group.add(Cloud2);
        createEdgeSprites();
    }
}
  function spawnMango(){
    if(World .frameCount%100===0){
        var mango = createSprite(600,0,40,10);
        mango.velocityY = 7;
        mango.scale = 0.2;
        mango.lifetime = 200;
        mango.visible = true;
        mango.addImage("mango",mango_img);
        mango.depth = player.depth;
        player.depth = player.depth + 1;
        MangoGroup.add(Mango);
        createEdgeSprites();
    }
}
function spawnPaddles2(){
    if(World .frameCount%55===0){
        var paddle2 = createSprite(700,0,40,10);
        paddle2.velocityY = 5;
        paddle2.scale = 0.6;
        paddle2.lifetime = 200;
        paddle2.visible = true;
        paddle2.addImage("paddle",paddle_img);
        paddle2.depth = player.depth;
        player.depth = player.depth + 1;
        Paddles2Group.add(Paddles2);
        createEdgeSprites();
    }
}
function spawnPaddles3(){
    if(World .frameCount%39===0){
        var paddle3 = createSprite(0,300,40,10);
        paddle3.velocityX = 7;
        paddle3.scale = 0.4;
        paddle3.lifetime = 200;
        paddle3.visible = true;
        paddle3.addImage("paddle",paddle_img);
        paddle3.depth = player.depth;
        player.depth = player.depth + 1;
        Paddles3Group.add(Paddles3);
        createEdgeSprites();
    }
}