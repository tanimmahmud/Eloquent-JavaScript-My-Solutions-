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

## Bean counting
You can get the Nth character, or letter, from a string by writing "string".
charAt(N) , similar to how you get its length with "s".length . The returned
value will be a string containing only one character (for example, "b"
). The first character has position zero, which causes the last one to
be found at position string.length - 1 . In other words, a two-character
string has length 2, and its characters have positions 0 and 1.
Write a function countBs that takes a string as its only argument and
returns a number that indicates how many uppercase “B” characters are
in the string.

### My Solution 

```sh
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
```

####Next 
console.log(countChar("kakkerlak", "k"));
write a function called countChar that behaves like countBs , except
it takes a second argument that indicates the character that is to be
counted (rather than counting only uppercase “B” characters). Rewrite
countBs to make use of this new function.

```sh
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
```
