class drops{
  constructor(x , y , rad){

var options={

isStatic : false
'friction':0.1

}

this.body = Bodies.rectangle(x ,y , rad , options);
this.rad = rad;
World.add(world, this.body);

  }
display(){
  var pos =this.body.position;
elipseMode(RADIUS);
  fill("black")
  rect(pos.x, pos.y)

}
}