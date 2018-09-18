class Sorter {
  constructor() {
     this.sorter = []; 
     this.F = function(a,b) { 
     return a - b; 
}; 
  }

  add(element) {
      this.sorter.push(element); 
  }

  at(index) {
     return this.sorter[index]; 
  }

  get length() {
      return this.sorter.length; 
  }

  toArray() {
    return this.sorter; 
  }

  sort(indices) {
	  
    var arr = []; 
    
    function compareNumeric2018(a, b) { 
  return  a - b; 
   }; 

   indices.sort(compareNumeric2018); 
    
    
   for ( var i = 0; i < indices.length; i++) { 
  arr[i] = this.sorter[ indices[i] ]; 
   } 


  arr.sort(this.F); 


  for ( var i = 0; i < indices.length; i++) { 
   this.sorter[ indices[i] ] = arr[i]; 
  } 
  }

  setComparator(compareFunction) {
     this.F = compareFunction; 
  }
}

module.exports = Sorter;