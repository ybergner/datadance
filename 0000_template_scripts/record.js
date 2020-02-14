var myCanvas = null;
var context = null;
var kinectron = null;
var frames = [];

function setup() {
  myCanvas = createCanvas(1000,1000);
  context = myCanvas.drawingContext;

  background(255);

  // Define and create an instance of kinectron
//  var kinectronIpAddress = "192.168.1.200"; // FILL IN YOUR KINECTRON IP ADDRESS HERE
  kinectron = new Kinectron(kinectronIpAddress);

  // Connect with application over peer
  kinectron.makeConnection();

  // Set individual frame callbacks
  kinectron.setBodiesCallback(bodiesCallback);

}

// Press 8 to start feed, up arrow to start record
// down arrow to end record, enter to pause all feeds
function keyPressed() {
  if (keyCode === ENTER) {
    kinectron.stopAll();
  } else if (keyCode === UP_ARROW) {
    kinectron.startRecord();
  } else if (keyCode === DOWN_ARROW) {
    kinectron.stopRecord();
  } else if (key === '8') {
    kinectron.startBodies();
  }
}

function bodiesCallback(data) {

  //find tracked bodies
  for (var i = 0; i < data.bodies.length; i++) {
    if (data.bodies[i].tracked === true) {
      bodyTracked(data.bodies[i]);
    }
  }
}

function bodyTracked(body) {

  context.fillStyle = '#000000';
  context.fillRect(0, 0, width, height);

  //draw joints in tracked bodies
  for(var jointType in body.joints) {
    var joint = body.joints[jointType];
    context.fillStyle = '#ff0000';
    context.fillRect(joint.depthX * width, joint.depthY * height, 10, 10);
  }
}
