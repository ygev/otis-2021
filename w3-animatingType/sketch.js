let typeface;
let points;
let letter = "G";
let x;
let y;
let size = 400;

// Load Your Font
function preload() {
  typeface = loadFont("../font/Pilowlava-Regular.otf");
}

//Set Up Your Canvas
function setup() {
  
  createCanvas(800, 800);
}

function draw() {

  background(0);
  x = width/4;
  y = height/1.5;
  points = typeface.textToPoints(letter, x, y, size, {sampleFactor: 0.35});
  
  // Lines
  noFill()
  for (let i = 0; i < points.length; i++) {
    let pt = points[i]
    let d = 50 + sin(frameCount/10) * 10
    colorMode(HSL, 360, 100, 100, 100)
    stroke(d, 50, 50, 20)
    ellipse(pt.x, pt.y, d)   
  }
  

}