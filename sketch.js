let Walker = [];
function setup() {
  createCanvas(400, 400);

  for (let i = 0; i < 50; i++) {
    Walker.push(new Mover());
  }
}

function draw() {
  background(14,14,14);
  
  for (let i = 0; i < Walker.length; i++) {
    Walker[i].gerakCuy();
    Walker[i].tampil();
    Walker[i].cekBatas();
  }
  
}


class Mover {
  constructor(){
    this.location = createVector(random(width/4),random(height/4));
    
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.01,-0.01);
    this.panjanglebar = random(0,0);
    
  }
  
  tampil(){
    stroke(5);
    fill('red');
    rect(this.location.x, this.location.y, 10, 10)
  }

  
  
  
  gerakCuy(){
    var mouse = createVector(mouseX, mouseY);
    var w = p5.Vector.sub(mouse,CENTER);
    textSize(20)
    fill('blue')
    text('Human', mouse.x, mouse.y-10)
    noStroke()
    fill('green')
    ellipse(mouse.x, mouse.y, 15,15)
    
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = (2,5);
    
    arahMouse.normalize();
    arahMouse.mult(0.5); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
  }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.locationX.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.locationY.y = 0;
    }
    else if (this.location.y < 0){
      this.locationY.y = windowHeight;
    }
  }
  
  cekBatas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}