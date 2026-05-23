let rotateDir = 1;
let rotateDeg = 0;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.id("p5-canvas");
    canvas.parent("p5-canvas-container");
    angleMode(DEGREES);
}

function draw() {
    background(0, 80);
    if (mouseX < width / 2) {
        let rotation = map(mouseX, 0, width / 2, 0.1, 0.02)
        rotateDeg -= rotation
    } else {
        let rotation = map(mouseX, width / 2, width, 0.02, 0.1)
        rotateDeg += rotation
    }
    push();
    translate(width / 2, height / 2);
    noStroke();
    rotate(rotateDeg);
    for (let a = 0; a < 360; a += 20) {
        push()
        rotate(a);
        let lineCalc = abs(sin(a))
        let lineScale = map(width, 200, 1920, 0.6, 2)
        let lineW = map(lineCalc, 0, 1, lineScale * 110, lineScale * 140)
        let length = Math.max(width, height);
        fill(40);
        triangle(0, 0, 0, length, lineW, length)
        pop();
    }
    // triangle(0, 0, 0, -height, 30, -height)
    pop();
    // circle(mouseX, mouseY, 10)

}

function windowResized(event) {
    resizeCanvas(windowWidth, windowHeight);
    print(event);
}