function boardTemplate (w=8, h=8){
   const start = "a".charCodeAt(0)-1;
   const correctPosition = (x,y) => x>0 && x<=w && y>0 && y<=h;
   return {
     correctPosition,	   
     i2a : (collection) =>  collection.reduce(
	    (S,[x,y]) => (correctPosition(x,y))? [...S, String.fromCharCode(x+start)+y]: S
	   ,
	   []),
     filter: (collection) => collection.filter(([x,y])=>correctPosition(x,y)),
     a2i: (collection) => collection.map(
       (s)=> {
          if(s.length==2){
	    x = s.charCodeAt(0) - start;
	    y = s.substring(1)|0;
	    if (correctPosition(x,y)){
               return [x,y];
	    }
	  }
	  throw "Incorrect position";
       }
     )
   }
}

module.exports = boardTemplate;
