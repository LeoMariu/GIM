let ballX;
let ballY;
let ballSpeedX = 5;
let ballSpeedY = 5;
let ballRadius = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ballX = width / 2;
  ballY = height / 2;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  ballX = width / 2;
  ballY = height / 2;
}

function draw() {
  background(220);
  
  // Muovi la pallina
  ballX += ballSpeedX;
  ballY += ballSpeedY;
  
  // Controlla il rimbalzo sui bordi
  if (ballX + ballRadius >= width || ballX - ballRadius <= 0) {
    ballSpeedX = -ballSpeedX;
  }
  if (ballY + ballRadius >= height || ballY - ballRadius <= 0) {
    ballSpeedY = -ballSpeedY;
  }
  
  // Disegna la pallina
  fill(100, 200, 255);
  noStroke();
  ellipse(ballX, ballY, ballRadius * 2);
}
