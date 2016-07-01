var isEven = function (N) {
	if (N===0){
		console.log(true);
	} else if ( N === 1 ) {
    	console.log(false);
    } else if ( N < 0 ) {
    	return isEven(-N);
    } else if ( N > 0) {
    	return isEven(N-2);
    }
}

isEven(50);
isEven(75);
isEven(-1);
