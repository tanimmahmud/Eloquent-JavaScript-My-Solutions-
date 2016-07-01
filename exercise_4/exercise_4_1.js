function range(start, end){
	var result = [];
	for ( var i = start; i<= end ; i++ ) {
		result.push(i);
	}
  return result;
  }

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```
```sh
function sum(array) {
var result = 0;
  for ( var i = 0 ; i < array.length; i++) {
  
    result = result + array[i];
  }
  return result;
}
console.log(sum(range(1, 10)));
// → 55
```
```sh
var range = function(start,end,step) {
	if ( step == null ) {
    	step = 1;
    }
  var array = [];
  if ( step > 0 )
  for ( var i = start ; i <= end ; i=i+step ) {
  	array.push(i);
    
  } else {
  	 for ( var i = start ; i >= end ; i=i+step ) {
  	array.push(i);
  }
  return array;
  }
}
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]

