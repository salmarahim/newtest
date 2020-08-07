class Ball {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
     
     
      this.body = Bodies.circle(x, y,30, options);
     
      this.radius= 30;
      
      World.add(world, this.body);
    }
    display(){
     
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;


      
     
      
     // var angle = this.body.angle;
      push();
     
      //rotate(angle);
     ellipseMode(RADIUS);
      strokeWeight(3);
      stroke("black");
      fill("pink");
      ellipse(this.body.position.x, this.body.position.y,this.radius, this.radius);
      pop();
     }
      }
     













  