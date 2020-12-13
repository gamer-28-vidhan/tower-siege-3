class stn {

    constructor(x,y,r){

var optt = {

   
    isStatic:false,
    'restitution' :0,
    'density':1.1



}



this.body = Bodies.circle(x,y,r,optt)
this.r=r
this.image = loadImage("images/polygon.png")


World.add(world, this.body)



    }

display(){

var angle = this.body.angle
var tt = this.body.position




push ();
translate(tt.x, tt.y)




rotate (angle)
pop ();

imageMode (CENTER)
image (this.image, tt.x, tt.y, 40,40)



}














}