var PLAY = 1;
var END = 0;
var gameState = PLAY;

var Player;
var enemiesGroup, enemy1, enemy2, enemy3;
var cloudsGroup, cloud;
var backGroundImg;
var invisibleGround;

var score = 0;

var gameOver, restart;

function preload() {
    PlayerImg = loadImage("Images/ghost-standing.png");
    enemy1Img = loadImage("Images/Enemy 1.png");
    enemy2Img = loadImage("Images/Enemy 2.jpg");
    enemy3Img = loadImage("Images/Enemy 3.png");
    backGroundImg = loadImage("Images/Background Image.avif");
    cloud = loadImage("Images/Cloud.png");
    towerImg = loadImage("Images/tower.png");
}

function setup() {
    createCanvas(400, 680);

    backGround = createSprite(200,340, 400,680);
    backGround.addImage("TowerImage", towerImg);
    backGround.scale = 0.7;

    Player = createSprite(300, 620);
    Player.addImage("playing",PlayerImg);
    Player.scale = 0.4;
}
function draw(){
    background(125);
    reset();
    spawnClouds();
    spawnEnemies();
    drawSprites();
}
function reset() {
        gameState = PLAY;
        //gameOver.visible = false;
        //restart.visible = false;

       // enemiesGroup.destroyEach();
        cloudsGroup.destroyEach();
        score = 0;
    }

    function spawnClouds() {
        if (FrameCount% 60 === 0 ) {
            var cloud = createSprite(600,120,40,10);
            cloud.y = Math.round(random(80,120));
            cloud.addImage(cloudImage);
            cloud.scale = 0.5;
            cloud.velocityX = -3;

            cloud.lifetime = 200;
            cloud.depth = Player.depth;
            Player.depth = Player.depth + 1;

            cloudsGroup.add(cloud);
        }
    }

    function spawnEnemies() {
        if (FrameCount% 60 === 0) {
            var enemy1 = createSprite(600,165,10,40);
            var enemy2 = createSprite(600,165,10,40);
            var enemy3 = createSprite(600,165,10,40);

            enemy1.velocityY = -(6 + 3*score/100);
            enemy2.velocityY = -(6 + 3*score/100);
            enemy3.velocityY = -(6 + 3*score/100);

            var rand = Math.round(random(1,3));
            switch(rand) {
                case 1: enemy1.addImage(enemy1Img);
                        break;
                case 1: enemy2.addImage(enemy2Img);
                        break;
                case 1: enemy3.addImage(enemy3Img);
                        break;
            }
            enemy1.scale = 0.5;
            enemy2.scale = 0.5;
            enemy3.scale = 0.5;
            enemiesGroup.add(enemy1, enemy2, enemy3);
        }
        }