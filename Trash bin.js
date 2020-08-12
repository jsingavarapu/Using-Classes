class Trash{
    constructor(x,y,width,height){
     
    var notmoving={
    isStatic:true
    }
    this.body=Bodies.rectangle(x,y,width,height,notmoving);
    World.add(world,this.body);
    this.width=width;
    this.height=height;
     
     
    }
    display(){
    var that=this.body.position;
    push();
    translate(that.x,that.y);
    fill("green")
    stroke("gold")
    rect(0,0,this.width,this.height);
    pop();
    }
     
     
    }
     
    