var reverseArray = function(array){
var reverse = [];
  for (var i = array.length-1; 0 <= i ; i--) {
   reverse.push(array[i]);
  }
  
  console.log(reverse);
}

reverseArray(["t","a","n","i","m"]);

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
