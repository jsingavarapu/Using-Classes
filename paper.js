class paper{
constructor(x,y,radius){
var options={
isStatic:false,
'restitution':0.3,
'friction':0.5,
'density':1.2
}
this.body=Bodies.circle(x,y,radius,options);
World.add(world,this.body);
this.radius=radius;


}

display(){
var method =this.body.position;
//rotate(angle);
push();
translate(method.x,method.y);
fill("purple");
stroke("pink")
circle(0,0,this.radius,this.radius);
pop();
}

}

