function setup() {
  //Fullscreen
  //createCanvas(windowWidth, windowHeight);

  //Inside a parent element
  const canvas = createCanvas(700, 700);
  canvas.parent("sketch-holder");

  //basic setup
  frameRate(40);
  background(0, 0, 0);
  fill("lightblue");
}

//A helper, getRandInt(10,0) gives us a random number between 10 and 0
function getRandInt(max, min = 0) {
  return Math.floor(min + Math.random() * (max + 1 - min));
}

function draw() {
  //clear();
}
function mouseDragged() {
  //mouseX
  //mouseY
}
function mouseMoved() {
  //mouseX
  //mouseY
}
function mouseClicked() {
  //mouseX
  //mouseY
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    //
  }
}
