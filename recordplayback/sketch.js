// An application that allows switching between precorded and live
//kinect data - with "upload file" option

// set to true if using live kinectron data
let liveData = false;

// fill in kinectron ip address here ie. "127.16.231.33"
let kinectronIpAddress = "10.18.106.216";

// declare kinectron
let kinectron = null;

// recorded data variables
let sentTime = Date.now();
let currentFrame = 0;
let recorded_skeleton;
let recorded_data_file = "recorded_skeleton.json";

// buttons and input 
let liveSwitch;
let fileInput;

function preload() {
  if (!liveData) {
    recorded_skeleton = loadJSON(recorded_data_file);
  }
}

function setup() {
  // canvas
  createCanvas(500, 500);
  background(0);
  noStroke();

  // inputs and buttons
  liveSwitch = createButton('LIVE TOGGLE'); //toggle for live state
  liveSwitch.mousePressed(function(){
    liveData = !liveData;
    console.log('liveData is' + liveData);
  });

  fileInput = createFileInput(handleFile);

  // initiate Kinectron in setup
  initKinectron();
}

function draw() {

  // switch for liveData on or o/ff
  if (!liveData) {
    kinectron.stopAll(); //stop any Kinectron
    loopRecordedData(); //Run recorded data
  } else{
    if(liveData){
      kinectron.startTrackedBodies(bodyTracked); //Start up Kinectron
      // kinectron.startMultiFrame(["depth","body"], bodyTracked);
    }
  }

  // on screen text
  background(0, 20);
  fill(255);
  textSize(20);
  text('liveData?: ' + liveData, 10,50);
}

function handleFile(file){
  let newjson = JSON.parse(file.data);
  recorded_skeleton = newjson;
}


// run recorded data 
function loopRecordedData() {
  // send data every 20 seconds
  if (Date.now() > sentTime + 20) {
    bodyTracked(recorded_skeleton[currentFrame]);
    sentTime = Date.now();

    if (currentFrame < Object.keys(recorded_skeleton).length - 1) {
      currentFrame++;
    } else {
      currentFrame = 0;
    }
  }
}

// initialize Kinectron for live data
function initKinectron() {
  // define and create an instance of kinectron
  kinectron = new Kinectron(kinectronIpAddress);

  // connect with application over peer
  kinectron.makeConnection();
}

// Handle & draw body data
function bodyTracked(body) {
  background(0, 20);
  // get all the joints off the tracked body and do something with them
  if(body != undefined){ // not clear as to why body becomes undefined SOMETIMES when switching files**
    for (let jointType in body.joints) {
      joint = body.joints[jointType];

      drawJoint(joint);
    }
  }
}

// draw skeleton
function drawJoint(joint) {
  fill(100);

  // kinect location data needs to be normalized to canvas size
  ellipse(joint.depthX * width, joint.depthY * height, 15, 15);

  fill(200);

  // kinect location data needs to be normalized to canvas size
  ellipse(joint.depthX * width, joint.depthY * height, 3, 3);
}


function keyPressed() {
  if(liveData){
    if (keyCode === UP_ARROW) {
      kinectron.startRecord();
    } else if (keyCode === DOWN_ARROW) {
      kinectron.stopRecord();
    }
  }
}