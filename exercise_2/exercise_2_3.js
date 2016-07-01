var size = 8;
var character = "";

for (var i = 1; i <= size ; i++ ) {
	for ( var j = 1 ; j <=size ; j++ ) {
    	if ((i+j)%2 == 0) {
        	character += " ";
        } else {
        	character += "#";
        }
    }
  character += "\n"
}

console.log (character);
