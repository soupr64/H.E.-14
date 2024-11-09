let cursorStroke = 30;
let increment = 10;
let cursorRed = 0;
let cursorGreen = 0;
let cursorBlue = 0;
let currentColor = "Black";
let pointerLayer;
let imgArray = [];
let marioSpawned;
let faceSpawned;
let music;
//wanted to implement a color picker as soon as i found
//out i could do that but honestly id have to redo everything
//and its not worth it for just a homework assignment ;-;
function preload() {
  img1 = loadImage("assets/cursor.png");
  imgArray[0] = loadImage("assets/face.png");
  imgArray[1] = loadImage("assets/mariohead.png");
  imgArray[2] = loadImage("assets/pig.png");
  imgArray[3] = loadImage("assets/yoshi.png");
  marioSpawned = loadSound("assets/mario-yahoo.WAV");
  faceSpawned = loadSound("assets/SE_Affun.wav");
  yoshiSpawned = loadSound("assets/smw2_yoshi_sound.wav");
  pigSpawned = loadSound("assets/bse_pafu00_e.44.cn4.wav");
  music = loadSound("assets/CreativeExercise.mp3");
}

function setup() {
  let canvas = createCanvas(400, 400);
  pointerLayer = createGraphics(400, 400);
  background(220);
  canvas.parent("sketch-holder");

  let button1 = createButton("Draw Mario");
  button1.parent("button-holder");
  button1.mousePressed(drawMario);

  let button2 = createButton("Draw Face");
  button2.parent("button-holder");
  button2.mousePressed(drawFace);

  let button3 = createButton("Draw Random");
  button3.parent("button-holder");
  button3.mousePressed(drawRandom);

  let button4 = createButton("Draw Random Line");
  button4.parent("button-holder");
  button4.mousePressed(drawLine);

  let button5 = createButton("Clear Screen");
  button5.parent("button-holder");
  button5.mousePressed(clearScreen);

  let button6 = createButton("Save Image");
  button6.parent("button-holder2");
  button6.mousePressed(saveIMG);

  cursor("assets/cursor.png");
}

function draw() {
  playMusic();
  stats();
  noStroke();
  mousePressed();
  colorSelect();

  //makes it so you can't have a 0/negative width brush
  if (cursorStroke < 0 || cursorStroke == 0) {
    cursorStroke = 10;
  }
}

//brush
function mousePressed() {
  if (mouseIsPressed === true) {
    fill(cursorRed, cursorGreen, cursorBlue);
    ellipse(mouseX, mouseY, cursorStroke, cursorStroke);
  }
}

//change brush width
function keyPressed() {
  if (key === "]") {
    cursorStroke = cursorStroke + 10;
  } else if (key === "[") {
    cursorStroke = cursorStroke - 10;
  }
}

function colorSelect() {
  push();
  strokeWeight(2);
  stroke(1);
  fill(255, 0, 0); //red
  rect(0, 1, 40, 40);
  fill(255, 119, 0); //orange
  rect(40, 1, 40, 40);
  fill(255, 208, 0); //yellow
  rect(80, 1, 40, 40);
  fill(85, 255, 0); //green
  rect(120, 1, 40, 40);
  fill(0, 247, 255); //cyan
  rect(160, 1, 40, 40);
  fill(0, 38, 255); //blue
  rect(200, 1, 40, 40);
  fill(153, 0, 255); //purple
  rect(240, 1, 40, 40);
  fill(255, 0, 195); //pink
  rect(280, 1, 40, 40);
  fill(255, 255, 255); //white
  rect(320, 1, 40, 40);
  fill(0, 0, 0); //black
  rect(360, 1, 40, 40);
  pop();
}

function mouseClicked() {
  if (mouseX < 40 && mouseX > 1 && mouseY > 0 && mouseY < 40) {
    //change to red
    (cursorRed = 255), (cursorGreen = 0), (cursorBlue = 0);
    currentColor = "Red";
    cursor("assets/redcursor.png");
  } else if (mouseX < 80 && mouseX > 40 && mouseY > 0 && mouseY < 40) {
    //change to orange
    (cursorRed = 255), (cursorGreen = 119), (cursorBlue = 0);
    currentColor = "Orange";
    cursor("assets/orangecursor.png");
  } else if (mouseX < 120 && mouseX > 80 && mouseY > 0 && mouseY < 40) {
    //change to yellow
    (cursorRed = 255), (cursorGreen = 208), (cursorBlue = 0);
    currentColor = "Yellow";
    cursor("assets/yellowcursor.png");
  } else if (mouseX < 160 && mouseX > 120 && mouseY > 0 && mouseY < 40) {
    //change to green
    (cursorRed = 85), (cursorGreen = 255), (cursorBlue = 0);
    currentColor = "Green";
    cursor("assets/greencursor.png");
  } else if (mouseX < 200 && mouseX > 160 && mouseY > 0 && mouseY < 40) {
    //change to cyan
    (cursorRed = 0), (cursorGreen = 247), (cursorBlue = 255);
    currentColor = "Cyan";
    cursor("assets/cyancursor.png");
  } else if (mouseX < 240 && mouseX > 200 && mouseY > 0 && mouseY < 40) {
    //change to blue
    (cursorRed = 0), (cursorGreen = 38), (cursorBlue = 255);
    currentColor = "Blue";
    cursor("assets/bluecursor.png");
  } else if (mouseX < 280 && mouseX > 240 && mouseY > 0 && mouseY < 40) {
    //change to purple
    (cursorRed = 153), (cursorGreen = 0), (cursorBlue = 255);
    currentColor = "Purple";
    cursor("assets/purplecursor.png");
  } else if (mouseX < 320 && mouseX > 280 && mouseY > 0 && mouseY < 40) {
    //change to pink
    (cursorRed = 255), (cursorGreen = 0), (cursorBlue = 195);
    currentColor = "Pink";
    cursor("assets/pinkcursor.png");
  } else if (mouseX < 360 && mouseX > 320 && mouseY > 0 && mouseY < 40) {
    //change to white
    (cursorRed = 255), (cursorGreen = 255), (cursorBlue = 255);
    currentColor = "White";
    cursor("assets/whitecursor.png");
  } else if (mouseX < 400 && mouseX > 360 && mouseY > 0 && mouseY < 40) {
    //change to black
    (cursorRed = 0), (cursorGreen = 0), (cursorBlue = 0);
    currentColor = "Black";
    cursor("assets/blackcursor.png");
  }
}

function stats() {
  push();
  stroke(10);
    textSize(16);
  fill(255)
  rect(367, 380, 45, 30)
  fill(2)
text(cursorStroke, 373, 397);
  image(pointerLayer, 0, 0);
  pop();
}

function clearScreen() {
  background(random(1, 255), random(1, 255), random(1, 255));
}

function drawLine() {
  push();
  stroke(random(1, 255), random(1, 255), random(1, 255));
  strokeWeight(random(1, 10));
  line(random(1, 400), random(1, 400), random(1, 400), random(1, 400));

  pop();
}

function saveIMG() {
  saveCanvas("myCanvas", "png");
}

// function cursorIMG(){
//   push()
// pointerLayer.image(img1, mouseX, mouseY, 30, 30)
// image(pointerLayer, 0, 0);
//   pop()
// }

function drawFace() {
  image(imgArray[0], random(width), random(height), 30, 30);
  faceSpawned.play();
  cursor("assets/cursor.png");
}
function drawMario() {
  image(imgArray[1], random(width), random(height), 30, 30);
  marioSpawned.play();
    cursor("assets/cursor.png");
}
function drawPig() {
  image(imgArray[2], random(width), random(height), 30, 30);
  
}
function drawYoshi() {
  image(imgArray[3], random(width), random(height), 30, 30);
}

function drawRandom() {
  let ranImg = int(random(imgArray.length));
  image(imgArray[ranImg], random(width), random(height), 30, 30);
    cursor("assets/cursor.png");
  console.log(ranImg);
  if (ranImg === 0) {
    faceSpawned.play();
  } else if (ranImg === 1) {
    marioSpawned.play();
  } else if (ranImg === 2) {
    pigSpawned.play();
  } else if (ranImg === 3) {
    yoshiSpawned.play();
  }
}

function playMusic() {
  if (music.isPlaying() === false) music.play();
}
