var a=prompt('Enter 1st value : ');
var b=prompt("Enter 2nd number : ");

function setup() {
  var b2=createButton("clear here to swap ");
  b2.mousePressed(swap);
  createCanvas(400, 400);
}
function swap(){
  [a,b]=[b,a];
  console.log("value of a",+a);
  console.log("value of a",+b);
}
function draw() {
  
  background(220);
}