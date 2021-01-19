class BaseClass{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.bob = Bodies.rectangle(x,y,width,height);
        World.add(world, this.bob);
    }
    display(){
        var pos = this.bob.position.x;
        var pos = this.bob.position.y;
        push()
        translate(this.bob.position.x,this.bob.position,y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop();
    }
}