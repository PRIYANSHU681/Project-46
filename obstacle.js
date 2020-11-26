class Obstacle{
    constructor(x,y,width,height) {
        var options = {
            isStatic: false,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.obstacleImage=loadImage("pin.png")
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.obstacleImage,pos.x, pos.y, this.width, this.height);
      }
    }; 
