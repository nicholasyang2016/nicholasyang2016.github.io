//Create an array with HEX values that represent colors
let colorArray = ["#ED7A8E", "#7D43FE", "#132BA8","#000000", "#FFFFFF"];

//Grid is split into steps of 20. This variable is used throughout,
//to ensure consistency
let gridStep = 20;//像素20

function setup() {
  noLoop(); //Program renders only once - when setup executes (also in Events - i.e. key, mouse clicks)
  rectMode(CENTER); //drawing point for rect() is center
  createCanvas(800, 800); //size of the canvas
  background(255);

  grid();
}

function grid(){
  let size = 2;
  let stepX = 0;

  for (let y = 10; y < width; y+=gridStep) {
    for (let x = 10; x < height; x+=gridStep) {
      //stroke(255,0,0);
      //strokeWeight(1);
      let randomStep = int(random(width/gridStep));

      if (x == 10) stepX = 0;
      else stepX = stepX + 1;

      if (randomStep == stepX){
        stroke(0);
        let newSizeStroke = int(random(20));
        strokeWeight(newSizeStroke/10);
        noFill();
        ellipse(x, y, newSizeStroke, newSizeStroke);
        noStroke();
        fill(0);
        let newSize = int(random(12));
        ellipse(x, y, newSize, newSize);
      } else {
        noStroke();
        fill(0);
        ellipse(x, y, size, size);
      }
    }
  }
}

//Use keys A,S,D to draw additional shapes according to the functions we have
function keyPressed() {
  if (key == 'd' || key == 'D'){
    grid();
  }
}
