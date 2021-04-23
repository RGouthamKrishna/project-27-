class Bob {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'frictionAir':0.00005,
        'density':0.0000000000001,
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    ellipse(0, 0, this.width, this.height);
    pop();
  }
}