/*
Mimi Yin NYU-ITP
Graphing Noise
*/

//Store x,y coordinates for current position
let x, y;
//Store x,y coordinates for previous position
let px, py;
//Store time position in noise graph
let t;

function setup() {
  createCanvas(windowWidth, windowHeight);
	background(255);
  
  // Start left, middle
  x = 0;
  y = height/2;
  px = x;
  py = y;
  t = 0;
}

function draw() {
  // Advance in time along noise graph
  t+=0.01;

  // Advance 1 pixel across the screen
  x++;

  // Generate a new noisy number for the y-position.
  // Scale it so it's not tiny. Remember noise() generates a number between  0 and 1.
  // Position it so that it ends up either above or below the vertical mid-point of the canvas.
  y = (noise(t)-0.5)*height/4 + height/2;

  // Draw a line from the previous frame's position to this frame's.
 	line(px, py, x, y);

  // Remember this frame's position for the next frame.
  px = x;
  py = y;
}