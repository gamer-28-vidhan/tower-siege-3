class BOX {

    constructor(x,y,width,height) {
    
    
    this.body = Bodies.rectangle(x,y,width,height)
    this.width = width
    this.height = height
    this.image = loadImage("images/wood1.png")
    
    World.add(world, this.body)
    this.Visibility=255;
    
    
}
    
    display(){


    if(this.body.speed < 5){
        
    

imageMode (CENTER)
    image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);

       }
       else{
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        tint(255,this.Visibility);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
      }
       
    }
    
    score(){
        if(this.Visibility < 0 && this.Visibility > -1005){
            score++
        }
    
    }
} 
