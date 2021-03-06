let Xpos = 0,
  Ypos = 0,
  newX = 0,
  newY = 0,
  Stop = false;

let speechWord = new p5.SpeechRec();
speechWord.continuous = true;
speechWord.interimResults = true;

function setup() {
  var cnv = createCanvas(500, 500);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background('white');
  strokeWeight(10);
  speechWord.start();
  speechWord.onResult = showResult

}

function draw() {
  
  point(width / 2 + Xpos, height / 2 + Ypos);
  if (Stop == false) {
    Xpos += newX;
    Ypos += newY;
  }

}


function showResult() {

  switch (speechWord.resultString) {

    case "red":
      stroke('red');
      break;
    case "orange":
      stroke('orange');
      break;
    case "blue":
      stroke('blue');
      break;
    case "yellow":
      stroke('yellow');
      break;
    case "left":
      newY = 0;
      newX = -0.5;
      break;
    case "right":
      newY = 0;
      newX = 0.5;
      break;
    case "up":
      newY = -0.5;
      newX = 0;
      break;
    case "down":
      newY = 0.5;
      newX = 0;
      break;
    case "stop":
      Stop = true;
      newX = 0;
      newY = 0;
      break;
    case "start":
      Stop = false;
      break;
    case "restart":
      Ypos = 0;
      Xpos = 0;
      newX = 0;
      newY = 0;
      Stop = false;
      background('white');
      break;

  }
}