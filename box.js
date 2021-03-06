class Box{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 30, 40, options);
        this.width = 30;
        this.height = 40;
        this.image = loadImage("box.png");
        this.visibility = 255;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        if(this.body.speed < 5) {
          push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(255);
        stroke("green");
        strokeWeight(3);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
        }
        else {
          World.remove(world, this.body);
          push();
          this.visibility = this.visibility-5;
          tint(255, this.visibility);
          image(this.image, this.body.position.x, this.body.position.y,this.width, this.height);
          pop();
        }
      }
  }