class Apple{
  constructor(x,y,r){
      var options ={
          restitution:0.4
      }
      this.r=r;
      this.image=loadImage("golden apple.png");
      this.body=Bodies.circle(x,y,this.r,options);
      this.color=color(random(0,255),random(0,255),random(0,255));
      World.add(world,this.body);
     }
     display(){
         var pos=this.body.position;
         

         push();
         translate(pos.x,pos.y);
         noStroke();
         fill(this.color);
         ellipseMode(RADIUS);
         image(this.image,0,0,this.r,this.r);
         pop();
     }
}