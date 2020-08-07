class Chain{
constructor(bodyA,pointB){
var options={
bodyA:bodyA,
pointB:pointB,
stiffness:0.4,
length:20

}
this.pointB=pointB;
this.chain=Constraint.create(options)

World.add(world,this.chain)
}
display(){
strokeWeight(3);
stroke(255);
if(this.chain.bodyA){
line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.pointB.x,this.pointB.y)
}}
fly(){

  this.chain.bodyA=null;  
}



}