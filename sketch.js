var flowers = [];

class Flower {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(20, 75);
    this.color = color(random(255), random(255), random(255));
  }
  
  process() {
    this.size -= 1; // redução do tamanho
  }
}

function setup() {
  frameRate(20);
  createCanvas(1500, 710);
}

function draw() {
  background("lightblue");

  // Cria uma flor ao clicar
  if (mouseIsPressed) {
    let flower = new Flower(mouseX, mouseY);
    flowers.push(flower);
  }
  
  // Desenha cada flor e faz o processamento
  for (const flower of flowers) {
    if (flower.size > 0) {
      drawFlower(flower);
      flower.process();
    }
  }

  // Remove flores "mortas" do array
  flowers = flowers.filter(flower => flower.size > 0);
}

function drawFlower(flower) {
  noStroke();
  fill(flower.color);

  // Pétalas
  ellipse(flower.x, flower.y, flower.size / 2, flower.size);
  ellipse(flower.x, flower.y, flower.size, flower.size / 2);

  // Centro amarelo
  fill(255, 204, 0);
  circle(flower.x, flower.y, flower.size / 2);
}
