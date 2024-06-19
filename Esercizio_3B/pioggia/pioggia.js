
let lampo = false;
let durataLampo = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  if (lampo) {
    background(255);
    durataLampo--;

    if (durataLampo <= 0) {
      lampo = false;
    }
  } else {
    background(0);

    // lampo
    if (random(1) < 0.01) {
      lampo = true;
      durataLampo = int(random(5, 15));
    }
  }

  stroke(255);

  for (let i = 0; i < 50; i++) {
    let l = random(20, 50);
    let x = random(0, width);
    let y = random(0, height);

    strokeWeight(random(1, 5));
    line(x, y, x, y + l);
  }
}
