let touchdownGIF;
let touchdownGIF_load, touchdownGIF_create;
let bg
let touchdownHL
let rockstarHL
let tposeHL
let touchdownText
let rockstarText
let tposeText
let figures

function preload(){
  // touchdownGIF_load = loadImage("touchdownbaby.gif")
  bg = loadImage("../mediaAssets/background.jpg")
  touchdownHL = loadImage("../mediaAssets/hl_touchdown.png")
  rockstarHL = loadImage("../mediaAssets/hl_rockstar.png")
  tposeHL = loadImage("../mediaAssets/hl_tpose.png")
  touchdownText = loadImage("../mediaAssets/touchdown.png")
  rockstarText = loadImage("../mediaAssets/rockstar.png")
  tposeText = loadImage("../mediaAssets/tpose.png")
  figures = loadImage("../mediaAssets/titleandposes.png")
}

function setup() {
    fill(255)
    createCanvas(1280,720)
    image(bg,0,0)
    image(figures,0,0)
    colorMode(HSB)
    stroke(255)
    strokeWeight(4)
    connectKinect();

}


function connectKinect() {
    var address = {
        // var IPaddy = select('#IP').value()
        // console.log(IPaddy)
        host: '128.122.34.133',
        port: 9001,
        path: '/'
    };
    kinectron = new Kinectron('kinectron', address);
    console.log(kinectron)
    kinectron.makeConnection();
    console.log('connection')
    // kinectron.startTrackedBodies(trackBody);
    // console.log('started')
    kinectron.startMultiFrame(["body","joints"],trackBody);
}



// called within trackbody

function drawThings(){
  background(0,0,0,1)
  image(bg,0,0)
  image(figures,0,0)
  makeObjs()
  smoothEm()
    poses()
    drawBody()
}
