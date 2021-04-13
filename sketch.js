const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var snow = []

function preload() {
  bg = loadImage("snow1.jpg")
  girlImg = loadImage("little-winter-girl.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  girl = createSprite(400, 200, 50, 50);
  girl.addImage(girlImg)
  girl.scale = 0.2

  snowy = new Snowfall(400,200,5)

}

function draw() {
  background(bg);
  Engine.update(engine)

  if (frameCount % 80) {
    snow.push(new Snowfall(random(0,1200),0,5))
  }

for (var i = 0; i < snow.length; i++) {
    snow[i].display()
}

  snowy.display();

  drawSprites();
}