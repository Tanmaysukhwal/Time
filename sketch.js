function setup() {
  createCanvas(400, 200);
  textAlign(CENTER, CENTER);
  textSize(48);
}

function draw() {
  background(220);
  
  // Get the current time
  let h = hour();
  let m = minute();
  let s = second();
  
  // Format the time
  let currentTime = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2);
  
  // Display the current time
  fill(0);
  text(currentTime, width / 2, height / 2);
}
