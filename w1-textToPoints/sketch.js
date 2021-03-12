let typeface;
let points;
let letter = "G";
let x;
let y;
let size = 400;
let r = 0;

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
  x = width / 4;
  y = height / 1.5;
  points = typeface.textToPoints(letter, x, y, size, 
  {sampleFactor: 0.05});

//Points
  for (let i = 0; i < points.length; i++) {
    frameRate(10)
    stroke(255)
    let pt = points[i];
    
    push()
    colorMode(HSL, 360, 100, 100, 100);
    stroke(random(360),50, 50,100);
    translate(pt.x, pt.y);
    rotate(r);
    r++;
    strokeWeight(5); 
    line(-5, 0, 0, 0);
    pop()
    
  }

}