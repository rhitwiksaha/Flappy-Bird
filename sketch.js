let bird;
let level = 1;
let life;
let score = 0;
let pipes = [];
let myFont;
let gameOver = false;
let textOffset = 50;
let size = 30;
let color = 255;

function preload() {
  myFont = loadFont('minecraft-font/MinecraftBold.otf');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  bird = new Bird();
  pipes.push(new Pipe());
  life = 3 * (pipes[0].w / pipes[0].speed);
}

function draw() {
  background(135, 206, 235);
  textFont(myFont);
  fill(255);
  stroke(0);
  strokeWeight(2);
  textSize(size);
  textAlign(CENTER);

  if (gameOver) {
    text("GAME OVER!", width / 2, height / 2);
    text("PRESS 'R' TO RESTART", width / 2, height / 2 + 25);
    text("YOUR SCORE: " + (floor)(score * (pipes[0].speed / pipes[0].w)), width / 2, height / 2 + 50);
    return;
  }

  for (let i = pipes.length - 1; i >= 0; i--) {

    text("SCORE: " + (floor)(score * (pipes[i].speed / pipes[i].w)), width / 2, height / 2 - 300);
    text("LIVES: " + (floor)(life / (pipes[i].w / pipes[i].speed)), width / 2, height / 2 - 275);

    pipes[i].show();
    pipes[i].update(level);

    //Game Over Case
    if (life / (pipes[0].w / pipes[0].speed) < 0) {
      textFont(myFont);
      fill(255);
      textSize(20);
      gameOver = true;
    }

    if (pipes[i].hits(bird)) {
      life -= 1;
    }
    if (pipes[i].passedBird(bird)) {
      score++;
    }
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.show();
  bird.update();

  if (frameCount % 40 == 0) {
    pipes.push(new Pipe());
  }
}

function keyPressed() {
  if (key == ' ') {
    bird.jump();
  }
  if (key == 'r') {
    document.location.reload();
  }
}
