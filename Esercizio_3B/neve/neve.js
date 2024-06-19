let fiocchi = []; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(-height, 0);
    let diameter = random(5, 15);
    
    fiocchi.push({ x: x, y: y, diameter: diameter });
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  noStroke();
  fill(255);

  for (let fiocco of fiocchi) {
    ellipse(fiocco.x, fiocco.y, fiocco.diameter, fiocco.diameter);
    
    // velocità
    fiocco.y += 5;
    
    if (fiocco.y > height) {
      fiocco.y = random(-height, 0);
      fiocco.x = random(width);
    }
  }
}
