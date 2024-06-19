let font;

function preload() {
    font = loadFont('assets/PPSupplyMono-Regular.otf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    noStroke();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);

    let h = hour();
    let m = minute();
    let s = second();

    let maxSize = min(width, height) / 4;

    let circleSize = map(width, 400, 1600, 20, 80);
    let textSizeValue = map(width, 400, 1600, 12, 32);

    fill(0);
    let hourSize = map(h, 0, 23, 0, maxSize);
    ellipse(width / 4, height / 2, hourSize, hourSize);

    fill(0);
    let minuteSize = map(m, 0, 59, 0, maxSize);
    ellipse(width / 2, height / 2, minuteSize, minuteSize);

    fill(0);
    let secondSize = map(s, 0, 59, 0, maxSize);
    ellipse(3 * width / 4, height / 2, secondSize, secondSize);

    let digitalTime = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2);
    textSize(textSizeValue * 1.5);
    textFont(font);
    textAlign(CENTER, CENTER);
    text(digitalTime, width / 2, height - 50);
}
