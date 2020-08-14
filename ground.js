class Ground{
constructor(x,y,width,height){
var attributes={
isStatic:true
}
this.body=Bodies.rectangle(x,y,width,height,attributes)
World.add(world,this.body);
this.width=width;
this.height=height;

}
display(){
var way=this.body.position
push();
translate(way.x,way.y);
fill("blue")
rect(0,0,this.width,this.height);
pop();
}




}
