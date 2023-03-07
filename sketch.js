function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(20);
  background(0, 0, 0);
  fill("hotpink");
  square(100, 100, 50);
  fill("lightblue");
}
let x = 0;
let frames = 0;
function getRandInt(max, min = 0) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}
console.log(getRandInt(0, 10));
console.log(getRandInt(10, 0));
function getRandColor() {
  return [getRandInt(255), getRandInt(255), getRandInt(255)];
}
function rX() {
  return getRandInt(0, width);
}
function rY() {
  return getRandInt(0, height);
}
function draw() {
  fill("white");
  textSize(32);
  text(accelerationX + " " + pAccelerationX + " " + rotationX, 10, 30);
  frames++;
  let shape = getRandInt(2);
  shape = 0;
  fill(...getRandColor());
  if (shape === 0) {
    square(rX(), rY(), getRandInt(10, 50));
  } else if (shape === 1) {
    circle(rX(), rY(), getRandInt(10, 50));
  } else {
    const r1 = rX();
    const y1 = rY();
    const r2 = r1 + getRandInt(25);
    const y2 = y1 + getRandInt(25, 0);
    const r3 = r1 + getRandInt(0, -25);
    const y3 = y1 + getRandInt(0, -25);
    triangle(r1, y1, r2, y2, r3, y3);
  }
  if (frames > 100) {
    noLoop();
  }
}
function mouseDragged() {
  fill(getRandInt(255), getRandInt(255), getRandInt(255));
  square(mouseX, mouseY, 50);
}
