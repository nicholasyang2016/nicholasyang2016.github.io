// it is the example for Shiffman's video to use draw function to make loop
// 9th, Jul, 2018
// shanghai, China


let ctrlX = 25;
let ctrlY = 11;
let ctrlShape = 25

function setup (){

  createCanvas(800,800);

  //background(100);

  noStroke();
}

function draw (){

  background(100);

  fill(0,255, ctrlX);
  ellipse(ctrlX, 25, ctrlShape, 25);

  ctrlX = ctrlX+2;
  ctrlY = ctrlY+1;
  ctrlShape = ctrlShape+1;

  if(ctrlShape >100)
  ctrlShape = ctrlShape-1;


}
