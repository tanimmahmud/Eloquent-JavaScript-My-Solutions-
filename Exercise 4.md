##The sum of a range

The introduction of this book alluded to the following as a nice way to
compute the sum of a range of numbers:
console . log ( sum ( range (1 , 10) ));
Write a range function that takes two arguments, start and end , and
returns an array containing all the numbers from start up to (and in-
cluding) end .
Next, write a sum function that takes an array of numbers and returns
the sum of these numbers. Run the previous program and see whether
it does indeed return 55.
As a bonus assignment, modify your range function to take an optional
third argument that indicates the “step” value used to build up the
array. If no step is given, the array elements go up by increments of
one, corresponding to the old behavior. The function call range(1, 10, 2)
should return [1, 3, 5, 7, 9] . Make sure it also works with negative step
values so that range(5, 2, -1) produces [5, 4, 3, 2] .

### My solution

```sh
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

```

## Reversing an array

Arrays have a method reverse , which changes the array by inverting the
order in which its elements appear. For this exercise, write two functions,
reverseArray and reverseArrayInPlace . The first, reverseArray , takes an array
as argument and produces a new array that has the same elements in
the inverse order. The second, reverseArrayInPlace , does what the reverse
method does: it modifies the array given as argument in order to reverse
its elements. Neither may use the standard reverse method.
Thinking back to the notes about side effects and pure functions in
the previous chapter, which variant do you expect to be useful in more
situations? Which one is more efficient?

### My Solution

```sh
var reverseArray = function(array){
var reverse = [];
  for (var i = array.length-1; 0 <= i ; i--) {
   reverse.push(array[i]);
  }
  
  console.log(reverse);
}

reverseArray(["t","a","n","i","m"]);
```
```sh
function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
```
