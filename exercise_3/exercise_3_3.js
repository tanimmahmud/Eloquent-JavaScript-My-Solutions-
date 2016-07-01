var count = 0;
var countBs = function (word){
	for ( i = 0; i < word.length; i++){
		if ( word.charAt(i) === "B") {
        	count++;
        }
	}
  return count;
}

console.log(countBs("BBC"));

var count = 0;
var countChar = function (word,character){
	for ( i = 0; i < word.length; i++){
		if ( word.charAt(i) === character) {
        	count++;
        }
	}
  return count;
}

console.log(countChar("kakkerlak", "k"));
