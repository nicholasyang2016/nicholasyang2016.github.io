// practice the functions
// ofcourse class
// 8,Jul, 2018
//shanghai, China

let colorArray = ["#ED7A8E", "#7D43FE", "#132BA8","#000000", "#ED4A4E"];

let gridStep = 20;

function setup (){

  createCanvas(500,500);
  rectMode(CENTER);
  noLoop();
  background(255);

  grid();

  for (let i=0; i<4; i++){
    circleBlocks(int(random(5)),int(random(5))); //arguments define XY starting position
  }
}

function grid(){

  let size = 2;
  let stepX = 0;
  let stepY = 0;

  for(y = 10; y < height; y+=gridStep){
    for(x = 10; x < width; x+=gridStep){

      let randomStep = int(random(width/gridStep));

      if (x == 10) stepX = 0;
      else stepX++;

      if (y == 10) stepY = 0;
      else stepY++;

      let mapcolorX = map(x, 10, width, 0, 255);
      let mapcolorY = map(y, 10, height, 0, 255);

      if(x<width/2 && y<height/2) fill (0, mapcolorX, 0);
      if(x<width/2 && y>height/2) fill (255,0,mapcolorY);
      if(x>width/2 && y<height/2) fill (255,0,0);
      if(x>width/2 && y>height/2) fill (255,0,0);

      if (randomStep = stepX){
        //console.log(randomStep+","+ stepX);

        //stroke(1);
        let newSizeStroke = int (random(20));
        //strokeWeight = (newSizeStroke/5);
        fill(stepX*0.1,stepY*0.5, 0);
        ellipse (x, y, newSizeStroke, newSizeStroke);

        //let makeRed = map(0, width, 0, 255);

        noStroke();
        //fill(random(255),0,random(255));
        if (x<width/2+10 && y<height/2+10) fill (random(255), mapcolorX, 0);
        if(x<width/2+10 && y>height/2+10) fill (255,100,mapcolorY);
        if(x>width/2+10 && y<height/2+10) fill (mapcolorX,random(255),mapcolorY);
        if(x>width/2+10 && y>height/2+10) fill (100,mapcolorY,mapcolorX);
        let newSize = int(random(12));
        push();
        translate(x, y);
        rotate(stepX*0.5);
        rectMode(CENTER);
        rect(0, 0, newSize, newSize);
        pop();
      }

      else {
        stroke(7);
        fill(0);
        ellipse(x, y, size,size);

      }
    }
  }
}


function circleBlocks(xTimes, yTimes){
  let xRand = int(random(width/gridStep));
  let yRand = int(random(height/gridStep));
  let xPos = xRand*gridStep;
  let yPos = yRand*gridStep;

  let angle = 45;

  push();
  translate(xPos, yPos);
  let colorCircle = colorArray[int(random(5))];
  for (let y = 10; y < xTimes*gridStep; y+=gridStep) {
    for (let x = 10; x < yTimes*gridStep; x+=gridStep) {
      push(); //apply this at the beginning of the transformation
      translate(x, y); //assign here the shape position
      noFill();
      rotate(QUARTER_PI);
      stroke(colorCircle);
      strokeWeight(3);
      rect(0, 0, 15, 15); //position is driven by translate()
      //noStroke();
      //fill(colorCircle);
      //ellipse(0, 0, 15, 15);
      pop();
    }
  }
  pop();
}

function keyPressed() {
  if (key == 's' || key == 'S'){
    for (let i=0; i<4; i++){
      circleBlocks(int(random(5)),int(random(5)));
    }
  }
}
