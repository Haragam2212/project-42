
function setup() {
  createCanvas(450,450);
  hr=hour();
  min=minute();
  sec=second();
  
}

function draw() {
  background(0,0,0); 
  angleMode(DEGREES);
  scAngle=map(sc,0,60,0,360);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0); 
  drawSprites();
}