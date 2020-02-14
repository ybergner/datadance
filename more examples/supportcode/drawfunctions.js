// initiate objects to hold points
function makeObjs(){
  leftHand = new Joint("leftHand",leftHandX,leftHandY)
  rightHand = new Joint("rightHand",rightHandX,rightHandY)
  leftElbow = new Joint("leftElbow",leftElbowX, leftElbowY)
  rightElbow = new Joint("rightElbow",rightElbowX,rightElbowY)
  leftShoulder = new Joint("leftShoulder",leftShoulderX,leftShoulderY)
  rightShoulder = new Joint("rightShoulder",rightShoulderX,rightShoulderY)
  head = new Joint("Head",xHead, yHead)
  neck = new Joint("Neck",xNeck,yNeck)
  spineShoulder = new Joint("spineShoulder",xSpineShoulder,ySpineShoulder)
  spine = new Joint("Spine",spineX,spineY)
  lHip = new Joint("leftHip",lxHip, lyHip)
  mHip = new Joint("midHip",mxHip,myHip)
  rHip = new Joint("rightHip",rxHip, ryHip)
  lAnkle = new Joint("leftAnkle",lxAnkle, lyAnkle)
  rAnkle = new Joint("rightAnkle",rxAnkle, ryAnkle)
  lKnee = new Joint("leftKnee",lkneeX,lkneeY)
  rKnee = new Joint("rightKnee",rkneeX, rkneeY)
}

// smooth points
function smoothEm(){
  leftHand.smoother(leftHandX, leftHandY)
  rightHand.smoother(rightHandX, rightHandY)
  leftElbow.smoother(leftElbowX, leftElbowY)
  rightElbow.smoother(rightElbowX,rightElbowY)
  leftShoulder.smoother(leftShoulderX,leftShoulderY)
  rightShoulder.smoother(rightShoulderX,rightShoulderY)
  head.smoother(xHead, yHead)
  neck.smoother(xNeck,yNeck)
  spineShoulder.smoother(xSpineShoulder,ySpineShoulder)
  spine.smoother(spineX,spineY)
  lHip.smoother(lxHip, lyHip)
  mHip.smoother(mxHip,myHip)
  rHip.smoother(rxHip, ryHip)
  lAnkle.smoother(lxAnkle, lyAnkle)
  rAnkle.smoother(rxAnkle, ryAnkle)
  lKnee.smoother(lkneeX,lkneeY)
  rKnee.smoother(rkneeX, rkneeY)
}


function drawBody() {
  strokeWeight(10)
  stroke(200, 0, 255)
  line(rightHand.xpos, rightHand.ypos, rightElbow.xpos, rightElbow.ypos);
  line(rightShoulder.xpos, rightShoulder.ypos, rightElbow.xpos, rightElbow.ypos);
  line(rightShoulder.xpos, rightShoulder.ypos, spineShoulder.xpos, spineShoulder.ypos);
  line(leftShoulder.xpos, leftShoulder.ypos, spineShoulder.xpos, spineShoulder.ypos);
  line(neck.xpos, neck.ypos, head.xpos, head.ypos);
  line(lHip.xpos, lHip.ypos, leftShoulder.xpos, leftShoulder.ypos);
  line(rHip.xpos, rHip.ypos, rightShoulder.xpos, rightShoulder.ypos);
  line(spineShoulder.xpos, spineShoulder.ypos, leftShoulder.xpos, leftShoulder.ypos);
  line(leftHand.xpos, leftHand.ypos, leftElbow.xpos, leftElbow.ypos);
  line(leftShoulder.xpos, leftShoulder.ypos, leftElbow.xpos, leftElbow.ypos);
  line(lHip.xpos, lHip.ypos, mHip.xpos, mHip.ypos);
  line(mHip.xpos, mHip.ypos, rHip.xpos, rHip.ypos);
  line(mHip.xpos, mHip.ypos, spine.xpos, spine.ypos);
  line(spine.xpos,spine.ypos, spineShoulder.xpos, spineShoulder.ypos);
  line(spineShoulder.xpos, spineShoulder.ypos, neck.xpos, neck.ypos);
  line(neck.xpos,neck.ypos,head.xpos,head.ypos);
  line(lKnee.xpos, lKnee.ypos, lHip.xpos, lHip.ypos);
  line(rKnee.xpos, rKnee.ypos, rHip.xpos, rHip.ypos);
  line(lKnee.xpos, lKnee.ypos, lAnkle.xpos, lAnkle.ypos);
  line(rKnee.xpos, rKnee.ypos, rAnkle.xpos, rAnkle.ypos);
  fill(100,20,100)
  ellipse(head.xpos,head.ypos,60,78)
  noStroke()
}


function drawBodyOne() {
  strokeWeight(5)
  stroke(200, 0, 255)
  line(neck.xpos,neck.ypos,head.xpos,head.ypos);

  line(spineShoulder.xpos, spineShoulder.ypos, leftShoulder.xpos, leftShoulder.ypos);
  line(spineShoulder.xpos, spineShoulder.ypos, rightShoulder.xpos, rightShoulder.ypos);

  line(rightShoulder.xpos, rightShoulder.ypos, rightElbow.xpos, rightElbow.ypos);
  line(rightHand.xpos, rightHand.ypos, rightElbow.xpos, rightElbow.ypos);
  line(leftHand.xpos, leftHand.ypos, leftElbow.xpos, leftElbow.ypos);
  line(leftShoulder.xpos, leftShoulder.ypos, leftElbow.xpos, leftElbow.ypos);
  line(leftShoulder.xpos, leftShoulder.ypos, rightShoulder.xpos, rightShoulder.ypos);

  line(lHip.xpos, lHip.ypos, leftShoulder.xpos, leftShoulder.ypos);
  line(rHip.xpos, rHip.ypos, rightShoulder.xpos, rightShoulder.ypos);

  line(lHip.xpos, lHip.ypos, mHip.xpos, mHip.ypos);
  line(mHip.xpos, mHip.ypos, rHip.xpos, rHip.ypos);
  line(mHip.xpos, mHip.ypos, spine.xpos, spine.ypos);

//  line(spine.xpos,spine.ypos, spineShoulder.xpos, spineShoulder.ypos);
//  line(spineShoulder.xpos, spineShoulder.ypos, neck.xpos, neck.ypos);
  line(spine.xpos, spine.ypos, neck.xpos, neck.ypos);

  line(lKnee.xpos, lKnee.ypos, lHip.xpos, lHip.ypos);
  line(rKnee.xpos, rKnee.ypos, rHip.xpos, rHip.ypos);
  line(lKnee.xpos, lKnee.ypos, lAnkle.xpos, lAnkle.ypos);
  line(rKnee.xpos, rKnee.ypos, rAnkle.xpos, rAnkle.ypos);

  fill(100,20,100)
  ellipse(head.xpos,head.ypos,10,10)
  noStroke()
}


function drawBodyPoints() {
  strokeWeight(10)
  ellipse(head.xpos,head.ypos,5,5)
  ellipse(neck.xpos,neck.ypos,5,5)
  ellipse(spineShoulder.xpos,spineShoulder.ypos,5,5)
  ellipse(rightShoulder.xpos,rightShoulder.ypos,5,5)
  ellipse(leftShoulder.xpos,leftShoulder.ypos,5,5)
  ellipse(rightElbow.xpos,rightElbow.ypos,5,5)
  ellipse(rightHand.xpos,rightHand.ypos,5,5)
  ellipse(leftShoulder.xpos,leftShoulder.ypos,5,5)
  ellipse(leftElbow.xpos,leftElbow.ypos,5,5)
  ellipse(leftHand.xpos,leftHand.ypos,5,5)
  ellipse(mHip.xpos,mHip.ypos,5,5)
  ellipse(lHip.xpos,lHip.ypos,5,5)
  ellipse(rHip.xpos,rHip.ypos,5,5)
  ellipse(spine.xpos,spine.ypos,5,5)
  ellipse(lKnee.xpos,lKnee.ypos,5,5)
  ellipse(lAnkle.xpos,lAnkle.ypos,5,5)
  ellipse(rKnee.xpos,rKnee.ypos,5,5)
  ellipse(rAnkle.xpos,rAnkle.ypos,5,5)
  ellipse(head.xpos,head.ypos,5,5)
  fill(100,20,100)
  noStroke()
}
