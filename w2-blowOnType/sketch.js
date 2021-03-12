let typeface;
let points;
let letter = "G";
let x;
let y;
let size = 400;
let mic;

// Load Your Font
function preload() {
    typeface = loadFont("../font/Pilowlava-Regular.otf");
}

//Set Up Your Canvas
function setup() {
  createCanvas(800, 800);
  
// Sound
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
//   Sound
  let vol = mic.getLevel();
  
  background(0);
  x = width/4;
  y = height/1.5;
  points = typeface.textToPoints(letter, x, y, size);
  
//Lines
  noFill()
  stroke(255);
  strokeWeight(1);
  beginShape()
  for (let i = 0; i < points.length; i++) {
    let pt = points[i]
    let r = random(-vol*1000, vol*1000);
    vertex(r+pt.x,  r+pt.y)
  }
  endShape()

}