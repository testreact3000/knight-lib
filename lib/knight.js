function KnightTemplate(s1 = 2, s2 = 1){
  const steps = [
	  [-s1,s2],
	  [-s2,s1],
	  [s2,s1],
	  [s1,s2],
	  [s1,-s2],
	  [s2,-s1],
	  [-s2,-s1],
	  [-s1,-s2]
  ];
  	
  return class {
     constructor([x,y]){
        this.x = x;
	this.y = y;
     }
     get stepsTo(){
       return steps.map(([curX,curY])=>[curX+this.x, curY+this.y]);
     }
     get stepsFrom(){
       return steps.map(([curX,curY])=>[this.x - curX, this.y - curY]);
     }
    
  }

}

module.exports = KnightTemplate;
