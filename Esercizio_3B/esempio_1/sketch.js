let cols, rows;
let rectSize = 50;

function setup() {
  createCanvas(600, 600);
  cols = width / rectSize;
  rows = height / rectSize;
}

function draw() {
  background(255);

  let h = hour();
  let m = minute();
  let s = second();

  // Rappresentazione delle ore
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * rectSize;
      let y = i * (height / 24);
      fill(0);
      rect(x, y, rectSize, rectSize);
    }
  }

  // Rappresentazione dei minuti
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * rectSize;
      let y = (height / 24) * h + i * (height / 60);
      fill(0, 255, 0);
      rect(x, y, rectSize, rectSize);
    }
  }

  // Rappresentazione dei secondi
  for (let i = 0; i < s; i++) {
    for (let j = 0; j < cols; j++) {
      let x = j * rectSize;
      let y = (height / 24) * h + (height / 60) * m + i * (height / 60);
      fill(0, 0, 255);
      rect(x, y, rectSize, rectSize);
    }
  }
}
