let rps= ['🗿','📃','✂️'];

class RpsAgent{
 
  
  constructor(x,y, ){
    this.x = x;
    this.y = y;
    this.kind = floor(random(3))
    this.spx = random(-5,5);
    this.spy = random(-5,5)
    
  } 
  move(){
    this.x+= this.spx;
    this.y+= this.spy;
  }
  
  edges(){
    if(this.x>width){
      this.x = 0;
    }
    if(this.x<0){
      this.x = width;
    }
    if(this.y>height){
      this.y = 0;
    }
    if(this.y<0){
      this.y = height;
    }
    
  }
  show(){
    text(rps[this.kind],this.x,this.y);
  }
  
  hit(other){
    // check if this one is hitting any other one
    
    let d = dist(this.x,this.y, other.x, other.y )
    
    if (d < 40){
       // 0 rock 1 paper if rock hits paper it turns to paper
      if (this.kind == 0 && other.kind == 1){
        this.kind = 1;
        
      }
       //  1 paper 2 scissors if paper hits scissors it turns to scissors
      if (this.kind == 1 && other.kind == 2){
        this.kind = 2;
      }
       // 2 scissors  0 rock  if rock hits scissors it turns to rock
      if (this.kind ==2 && other.kind == 0){
        this.kind =0;
      }
    }
    
  }
}