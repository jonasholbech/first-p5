function setup() {
  //Fullscreen
  //createCanvas(windowWidth, windowHeight);

  //Inside a parent element
  const canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-holder");

  //basic setup
  frameRate(40);
  background(0, 0, 200);
  fill("hotpink");
}

//A helper, getRandInt(10,0) gives us a random number between 10 and 0
function getRandInt(max, min = 0) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

let x = 0;
let y = 100;
let yModifier = getRandInt(2, 7);
let xModifier = getRandInt(2, 7);
let size = 100;
let shape = "square";

function hitCorner() {
  fill(getRandInt(255), getRandInt(255), getRandInt(255));
  if (shape === "square") {
    shape = "circle";
  } else {
    shape = "square";
  }
}
function getShape() {
  console.log(shape);
  if (shape === "square") {
    square(x, y, size);
  }
  if (shape === "circle") {
    circle(x + size / 2, y + size / 2, size);
  }
}
function draw() {
  //clear();
  x += xModifier;
  y += yModifier;

  //y, height
  if (y + size > height) {
    yModifier = yModifier * -1;
    hitCorner();
  }
  if (x + size > width) {
    xModifier = xModifier * -1;
    hitCorner();
  }
  if (y < 0) {
    yModifier = yModifier * -1;
    hitCorner();
  }
  if (x < 0) {
    xModifier = xModifier * -1;
    hitCorner();
  }
  console.log(y, height);
  getShape();
  /* if (keyIsDown(UP_ARROW)) {
    y = y - 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }
  if (keyIsDown(LEFT_ARROW)) {
    x = x - 5;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  } */

  /*  i++; */
  /*  if (i === 120) { */
  /*    i = 0; */
  /*    clear(); */
  /*  } */
  /*  //clear(); */
  /*  fill(getRandInt(255), getRandInt(255), getRandInt(255)); */
  /*  circle(getRandInt(width), getRandInt(height), getRandInt(150)); */
}
function mouseDragged() {
  //mouseX
  //mouseY
  fill(getRandInt(255), getRandInt(255), getRandInt(255));
  square(mouseX, mouseY, 100);
}
function mouseMoved() {
  //mouseX
  //mouseY
}
function mouseClicked() {
  //mouseX
  //mouseY
  /* fill(getRandInt(255), getRandInt(255), getRandInt(255));
  square(mouseX, mouseY, 100); */
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    //
  }
}
