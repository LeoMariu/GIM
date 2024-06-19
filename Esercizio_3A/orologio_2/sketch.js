let font;

function preload() {
    font = loadFont('assets/PPSupplyMono-Regular.otf');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
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

    let centerX = width / 2;
    let centerY = height / 2;

    let maxRadius = min(width, height) / 2 - 50;
    let secondSize = map(width, 400, 1600, 2, 8);
    let minuteSize = map(width, 400, 1600, 4, 12);
    let hourSize = map(width, 400, 1600, 6, 16);

    let textSizeValue = map(width, 400, 1600, 12, 24);

    let baseAngle = 360 / 60;
     // Colore blu per i secondi
    fill(255, 0, 0, 150);
    for (let i = 0; i <= s; i++) {
        let angle = baseAngle * i;
        let radius = map(i, 0, 60, 0, maxRadius);
        let x = centerX + radius * cos(angle);
        let y = centerY + radius * sin(angle);
        ellipse(x, y, secondSize, secondSize);
    }
     // Colore rosso per i minuti
    fill(0, 0, 255, 150);
    for (let i = 0; i <= m; i++) {
        let angle = baseAngle * i;
        let radius = map(i, 0, 60, 0, maxRadius * 0.8);
        let x = centerX + radius * cos(angle);
        let y = centerY + radius * sin(angle);
        ellipse(x, y, minuteSize, minuteSize);
    }
     // Colore nero per le ore
    fill(0, 0, 0, 150);
    for (let i = 0; i < h; i++) {
        let angle = baseAngle * 5 * i;
        let radius = map(i, 0, 23, 0, maxRadius * 0.6);
        let x = centerX + radius * cos(angle);
        let y = centerY + radius * sin(angle);
        ellipse(x, y, hourSize, hourSize);
    }

    textAlign(CENTER, CENTER);
    textSize(textSizeValue);
    textFont(font);
    fill(0); // Testo in nero
    let timeString = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2);
    text(timeString, centerX, height - 40);
}

