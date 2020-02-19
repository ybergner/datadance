/*
Mimi Yin NYU-ITP
Applying sin/cos and noise
to move a bezier curve.
*/

let anchor1X, anchor1Y, anchor2X, anchor2Y;
let control1X, control1Y, control2X, control2Y;
let t, factor;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  anchor1X = width/2;
  anchor1Y = height/3;
  anchor2X = width/2;
  anchor2Y = height/3;

  control1X = width/2;
  control1Y = height/3;
  control2X = width/2;
  control2Y = height/3;

  t = 0;
  factor = 1;
}


function draw() {
  background(255);
  t+=.01;

  // Adjust size of movement using noise
  factor = noise(t)*2;

  // Use sin and cos to move anchor and control points
  // Play with numbers to affect ratios of movement
  anchor1X += cos(t*2)*factor*.5;
  anchor1Y += sin(t*.33)*factor*.2;
  anchor2X += cos(t*.33)*factor*.5;
  anchor2Y += sin(t*.5)*factor*.67;

  control1X += cos(t*.67)*factor*.33;
  control1Y += sin(t*.33)*factor*.2;
  control2X += cos(t*2)*factor*.2;
  control2Y += sin(t*.33)*factor*.5;

  noFill();
  stroke(0);
  strokeWeight(50);
  bezier(anchor1X, anchor1Y, control1X, control1Y, control2X, control2Y, anchor2X, anchor2Y);

  // Red anchor points
  noStroke();
  fill(255, 0, 0);
  ellipse(anchor1X, anchor1Y, 10, 10);
  ellipse(anchor2X, anchor2Y, 10, 10);

  // Blue control points
  fill(0, 0, 255);
  ellipse(control1X, control1Y, 10, 10);
  ellipse(control2X, control2Y, 10, 10);

  stroke(200);
  strokeWeight(1);
  line(anchor1X, anchor1Y, control1X, control1Y);
  line(anchor2X, anchor2Y, control2X, control2Y);
}