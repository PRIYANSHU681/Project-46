class Enemy{
    constructor(x,y,width,height) {
        var options = {
            isStatic: false,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.enemyImage=loadImage("Monsters.png")
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.enemyImage,pos.x, pos.y, this.width, this.height);
      }
    }; 
