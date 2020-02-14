// Declare kinectron
let kinectron = null;

function setup() {
  createCanvas(500, 500);
  background(0);
  fill(random(0,255),random(0,255),random(0,255));

  noStroke();
  // Define and create an instance of kinectron
  // let kinectronIpAddress = ""; // FILL IN YOUR KINECTRON IP ADDRESS HERE
  kinectron = new Kinectron(kinectronIpAddress);
  // Set kinect type to windows
  kinectron.setKinectType("windows");
  // Connect with application over peer
  kinectron.makeConnection();
  // Request all tracked bodies and pass data to your callback
  kinectron.startTrackedBodies(bodyTracked);
}

function draw() {}

function bodyTracked(body) {
  background(0, 20);
  // Get all the joints off the tracked body and do something with them
  // kinectron.getJoints(drawJoint);
  // Get the hands off the tracked body and do somethign with them
  kinectron.getHands(drawStuff);
}

// Draw hands
function drawStuff(hands) {
  let handsDist = 0;
  let handsLineAngle = 0;
  handsDist = dist(hands.leftHand.depthX, hands.leftHand.depthY,
    hands.rightHand.depthX, hands.rightHand.depthY);

  handsLineAngle = atan((hands.rightHand.depthY-hands.leftHand.depthY)/
                          (hands.rightHand.depthX-hands.leftHand.depthX))+PI/2;

  fill(map(handsLineAngle,0,PI,0,255), 0, map(handsLineAngle,0,PI,255,0));

  let diameter = handsDist*width;
  let lhs = hands.leftHandState;
  let rhs = hands.rightHandState;
  let twohs = lhs+rhs;

  switch (twohs) {
    case "openclosed":
      rectMode(CENTER)
      rect(width/2,height/2,diameter,diameter,0,diameter/2,0,diameter/2);
      break;
    case "closedopen":
      rectMode(CENTER)
      rect(width/2,height/2,diameter,diameter,diameter/2,0,diameter/2,0);
      break;

    case "openopen":
      ellipse(width/2,height/2, diameter, diameter);
      break;

    case "closedclosed":
      rect(width/2,height/2,diameter,diameter);
      break;

    case "lasso":
      drawHand(hand, "yellow");
      break;

    // Created new state for clapping
    default:
    circle(width/2,height/2, diameter);
  }


}
