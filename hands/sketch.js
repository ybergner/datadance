// Declare kinectron
let kinectron = null;

function setup() {
  createCanvas(500, 500);
  background(0);
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
  kinectron.getHands(drawHands);
}

// Draw skeleton
function drawJoint(joint) {
  fill(100);
  // Kinect location data needs to be normalized to canvas size
  ellipse(joint.depthX * width, joint.depthY * height, 5, 5);
}

// Draw hands
function drawHands(hands) {
  let handsDist = null;
  handsDist = dist(hands.leftHand.depthX, hands.leftHand.depthY,
    hands.rightHand.depthX, hands.rightHand.depthY);
  //check if hands are touching
  if (
    handsDist < 0.01
  ) {
    hands.leftHandState = "clapping";
    hands.rightHandState = "clapping";
  }
  // draw hand states
  updateHandState(hands.leftHandState, hands.leftHand);
  updateHandState(hands.rightHandState, hands.rightHand);
}

// Find out state of hands
function updateHandState(handState, hand) {
  switch (handState) {
    case "closed":
      drawHand(hand, "blue");
      break;

    case "open":
      drawHand(hand, "green");
      break;

    case "lasso":
      drawHand(hand, "yellow");
      break;

    // Created new state for clapping
    case "clapping":
      drawHand(hand, "red");
  }
}

// Draw the hands based on their state
function drawHand(hand, color) {
  fill(color);
  // Kinect location needs to be normalized to canvas size
  ellipse(hand.depthX * width, hand.depthY * height, 20, 20);
}
