// Declare kinectron
let kinectron = null;
// Keep track of selected joint
let j;
// Which drawing mode
let joints = [
  "SPINEBASE",
  "SPINEMID",
  "NECK",
  "HEAD",
  "SHOULDERLEFT",
  "ELBOWLEFT",
  "WRISTLEFT",
  "HANDLEFT",
  "SHOULDERRIGHT",
  "ELBOWRIGHT",
  "WRISTRIGHT",
  "HANDRIGHT",
  "HIPLEFT",
  "KNEELEFT",
  "ANKLELEFT",
  "FOOTLEFT",
  "HIPRIGHT",
  "KNEERIGHT",
  "ANKLERIGHT",
  "FOOTRIGHT",
  "SPINESHOULDER",
  "HANDTIPLEFT",
  "THUMBLEFT",
  "HANDTIPRIGHT",
  "THUMBRIGHT"
];

let mode;
// Store current and previous positions of selected joint
let pos, ppos;

function setup() {
  createCanvas(500, 500);

  // Define and create an instance of kinectron
  kinectron = new Kinectron("128.122.34.133");

  // Connect with application over peer
  kinectron.makeConnection();

  // Request all tracked bodies and pass data to your callback
  kinectron.startTrackedBodies(bodyTracked);

  // Initialize values
  mode = 0;

  // Start drawing with left hand
  j = kinectron.HEAD;

  // Draw white background
  background(0);
}


function draw() {

}

function bodyTracked(body) {
  // Get the left hand joint
  let joint = body.joints[j];

  // Calculate its x,y,z coordinates
  pos = scaleJoint(joint);

  // If there is a previous position
  if (ppos) {
    let speed = dist(ppos.x, ppos.y, ppos.z, pos.x, pos.y, pos.z);
    let sw = 1;

    // 3 ways to set strokeweight according to speed.
    switch (mode) {
      case 1:
        sw = speed / 10;
        break;
      case 2:
        sw = speed / 2;
        break;
      case 3:
        sw = map(speed, 0, 200, 10, 0);
        break;
    }

    // Draw the line
    stroke(255);
    strokeWeight(sw);
    line(ppos.x, ppos.z, pos.x, pos.z);
  }

  // Store current location for next frame
  ppos = pos;
  // Print which joint is selected
  stroke(255);
  textSize(18);
  text("RT/LFT to change joints. " + j + ": " + joints[j], 20, 20);
  text("UP/DWN to change mode. Mode:" + mode, 20, 40);
  // text(joints[j]+ " x:" + round(pos.x), 20, 80);
  // text(joints[j]+ " z:" + round(pos.z), 20, 100);

}

// Draw each joint
function drawJoint(joint) {
  let pos = scaleJoint(joint);
  noStroke();
  fill(255);
  ellipse(pos.x, pos.y, 10, 10);
}

function keyPressed() {
  // Use RIGHT/LEFT arrow keys to change selected joint
  // ENTER to erase
  switch (keyCode) {
    case UP_ARROW:
      mode++;
      mode %= 4;
      break;
    case LEFT_ARROW:
      j--;
    case RIGHT_ARROW:
      j++;
      break;
    case ENTER:
      background(0);
      break;
  }

  // There are only 25 joints
  j = constrain(j, 0, 24);
}

// Scale the joint position data to fit the screen
// 1. Move it to the center of the screen
// 2. Flip the y-value upside down
// 3. Return it as an object literal
function scaleJoint(joint) {
  return {
    // x: (joint.cameraX * width / 2) + width / 2,
    // y: (-joint.cameraY * width / 2) + height / 2,
    // z: (joint.cameraZ * height / 2) + height / 2,
    x: (joint.cameraX +1) * 250,
    y: joint.cameraY * 100,
    z: joint.cameraZ * 250
  }
}
