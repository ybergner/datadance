function initKinectron() {
  // define and create an instance of kinectron
  const kinectron = new Kinectron(kinectronServerIPAddress);
  // connect with application over peer
  kinectron.makeConnection();
  // Set Kinect type to "windows" or "azure"
  kinectron.setKinectType("windows");
  // request all tracked bodies and pass data to your callback
  kinectron.startTrackedBodies(bodyTracked);
}
