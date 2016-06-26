## Minimum
The previous chapter introduced the standard function Math.min that re-
turns its smallest argument. We can do that ourselves now. Write a
function min that takes two arguments and returns their minimum.

### My Solution
```sh
function min (a,b) {
	if (a > b ) {
		console.log(b);
	} else {
		console.log(a);
	}
}

```
## Recursion
We’ve seen that % (the remainder operator) can be used to test whether
a number is even or odd by using % 2 to check whether it’s divisible by
two. Here’s another way to define whether a positive whole number is
even or odd:
* Zero is even.
* One is odd.
* For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a number parameter and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think
of a way to fix this?

### My Solution

```sh
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
```
