let screenW = 400;
var flowers = [];

// Function that creates a random flower object.
function createFlower(x, y) {
  // Define a flower object.
  let flower = {
    x: x,
    y: y,
    size: random(20, 75),
    lifespan: random(255, 300),
    color: color(random(255), random(255), random(255)),
    emoji: '🎂'
  };
  // Return the flower object.
  return flower;
}

function setup() {
  createCanvas(screenW, screenW);
}

function draw() {
  background('lightblue');
  
  if(mouseIsPressed) {
    let flower = createFlower(mouseX, mouseY);
    flowers.push(flower);
  }
  
  for (const flower of flowers) {
    if (flower.lifespan > 0) {
      textSize(20);
      text(flower.emoji, flower.x, flower.y);
      flower.lifespan -= 5;
    }
  }  
}
