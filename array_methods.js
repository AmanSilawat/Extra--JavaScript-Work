 // ->* Array Method *<- //


/*
1. Array.from  ===========

- The Array.from() static method creates a new,
shallow-copied Array instance from an array-like or iterable object.

*/

Array.from('Array'); // ["A", "r", "r", "a", "y"]
Array.from([1, 2, 3], x => x+x); // [2, 4, 6]
Array.from('123', x => Number(x)+Number(x)); // [2, 4, 6]


// Array from a Set - - - - -
Array.from( new Set(['foo', 'bar', 'baz', 'foo']) );
// ["foo", "bar", "baz"]


// Array from a Map  - - - - -
Array.from( new Map([[1, 2], [2, 4], [4, 8]]) );
// [[1, 2], [2, 4], [4, 8]]


var mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());
// ['a', 'b'];


Array.from(mapper.keys()); // ['1', '2'];

Array.from({length: 5}, (v, i) => i); // [0, 1, 2, 3, 4]

Array.from({length: 5}, (v, i) => v);
//[undefined, undefined, undefined, undefined, undefined]




// Sequence generator function (commonly referred to as "range", e.g. Clojure, PHP etc)
// const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => start + (i * step));
const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1}, (_, i) => i);

// Generate numbers range 0..4
range(0, 4, 1);
// [0, 1, 2, 3, 4] 

// Generate numbers range 1..10 with step of 2 
range(1, 10, 2); 
// [1, 3, 5, 7, 9]

// Generate the alphabet using Array.from making use of it being ordered as a sequence
range('A'.charCodeAt(0), 'Z'.charCodeAt(0), 1).map(x => String.fromCharCode(x));
// ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]


/*

SYNTEX:
	-Array.from(arrayLike [, mapFn [, thisArg]])

PARAMETERS: 
	-arrayLike
		=> An array-like or
		   iterable object to convert to an array.

	- mapFn (Optional)
		=> Map function to call on every element of the array.

	- thisArg (Optional)
		=> Value to use as "this" when executing mapFn.

RETURN VALUE:
	- A new Array instance.
*/









/*
2. Array.isArray  ===========

- The Array.isArray() method determines whether the passed value is an Array.

*/

Array.isArray([1, 2, 3]);  // true
Array.isArray({foo: 123}); // false
Array.isArray('foobar');   // false
Array.isArray(undefined);  // false

// all following calls return true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'));
Array.isArray(new Array(3));
// Little known fact: Array.prototype itself is an array:
Array.isArray(Array.prototype); 

// all following calls return false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({ __proto__: Array.prototype });

/*
SYNTEX:
	- Array.isArray(value)

PARAMETERS: 
	- value
		=> The value to be checked.

RETURN VALUE:
	- true if the value is an Array;
	  otherwise, false.
*/










/*
3. Array.of  ===========

- The Array.of() method creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments.

*/

Array.of(7);       // [7] 
Array.of(1, 2, 3); // [1, 2, 3]
Array.of(undefined); // [undefined]

Array(7);          // array of 7 empty slots
Array(1, 2, 3);    // [1, 2, 3]

/*
SYNTEX:
	- Array.of(element0[, element1[, ...[, elementN]]])

PARAMETERS: 
	- elementN
		=> Elements used to create the array.

RETURN VALUE:
	- A new Array instance.
*/






/*
4. concat  ===========

- marge to or more array
- doesn't change original array
- return a array

*/

['a', 'b'].concat( ['c', 'd'] ); // ["a", "b", "c", "d"]
[1, 2,].concat( [3,4], [5, 6] ); // [1, 2, 3, 4, 5, 6]
['a', 'b'].concat( 1, [2, 3] ); // ["a", "b", 1, 2, 3]
[[1]].concat( [2, [3]] ); // [[1], 2, [3]]

/*
SYNTEX:
	- old_array.concat([value1[, value2[, ...[, valueN]]]])

PARAMETERS: 
	- valueN
		=> accept array and value

RETURN VALUE:
	- A new Array instance.
*/






/*
5. copyWithin  ===========

- The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

*/

[1, 2, 3, 4, 5].copyWithin(-2); // [1, 2, 3, 1, 2]
[1, 2, 3, 4, 5].copyWithin(-8); // [1, 2, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(0, 3); /*
[4, 5, 3, 4, 5]
 ▲        ▲ 
 |        | 
 0	      3
 target   start    */


[1, 2, 3, 4, 5].copyWithin(0, 3, 4); /*
[4, 2, 3, 4, 5]
 ▲        ▲  ▲__ end copy (not including end)
 |        | 
 0	      3
 target   start    */


[1, 2, 3, 4, 5].copyWithin(-2, -3, -1); /*   ??????????????????
[1, 2, 3, 3, 4]
       ▲  ▲  ▲__ end copy (not including end)
       |  |   
      -3 -2	    
   start  target       */




/*
SYNTEX:
	- old_array.concat([value1[, value2[, ...[, valueN]]]])

PARAMETERS: 
	- target
		=> Zero-based index at which to copy the sequence to.
		=> If negative, target will be counted from the end.
		=> If target is at or greater than arr.length,
		   nothing will be copied.
		=> If target is positioned after start,
		   the copied sequence will be trimmed to fit arr.length.

	- start
		=> Zero-based index at which to start copying elements from.
		=> If negative,start will be counted from the end.
		=> If start is omitted, copyWithin will copy from index 0. 

	- end
		=> Zero-based index at which to end copying elements from.
		=> copyWithin copies up to but not including end.
		=> If negative, end will be counted from the end.
		=> If end is omitted,
		   copyWithin will copy until the last index (default to arr.length).

RETURN VALUE:
	- The modified array.
*/







/*
6. entries  ===========

- returns a new Array Iterator object
- that contains the key/value pairs for each index in the array.

*/

var arr1 = ['a', 'b'];
var iterator = arr1.entries();

iterator.next().value; // [0, "a"]
iterator.next().value; // [1, "b"]

//... Iterating with index and element
var a = ['a', 'b', 'c'];
for ( var [i, ele] of a.entries() ) {
	i, ele // console this line
}
//0 "a"
//1 "b"
//2 "c"


//... Using a for…of loop
var a = ['a', 'b', 'c'];
var iterator = a.entries();

for (let e of iterator) {
	e; //console this line
}
// [0, 'a']
// [1, 'b']
// [2, 'c'] 


/*
SYNTEX:
	- array.entries()

RETURN VALUE:
	- A new Array iterator object.
*/







/*
7. every  ===========

- Tests all elements in the array pass the test implemented by the provided function.
- It returns a Boolean value.

*/

[1, 30, 39, 29, 10, 13].every( ele=> ele < 40); // true

/*
SYNTEX:
	- arr.every(callback(element[, index[, array]])[, thisArg])

PARAMETERS: 
	- callback
		=> A function to test for each element,
		   taking three arguments:

			- element
				=> The current element being processed in the array.

			- index (Optional)
				=> index current element processed in the array

			- array (Optional)
				=> The array every was called upon.

	- thisArg (Optional)
		=> A value to use as 'this' when executing callback.

RETURN VALUE:
	- true if the callback function returns a truthy value for every array element. Otherwise, false.
*/





/*
8. fill  ===========

- The fill() method changes all elements in an array to a static value,
- from a start index (default 0) to an end index (default array.length).
- It returns the modified array.

*/

[1, 2, 3].fill(4);                // [4, 4, 4]
[1, 2, 3].fill(4, 1);             // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);          // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);          // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);          // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);        // [4, 2, 3] length-2 = 1
[1, 2, 3].fill(4, NaN, NaN);      // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);          // [1, 2, 3]
Array(3).fill(4);                 // [4, 4, 4] empty-3-element
[].fill.call({ length: 3 }, 4);   // {0: 4, 1: 4, 2: 4, length: 3}

// A single object, referenced by each slot of the array:
let arr = Array(3).fill({}); // [{}, {}, {}]
arr[0].hi = "hi" ;           // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]

/*
SYNTEX:
	- arr.fill(value[, start[, end]])

PARAMETERS: 
	- value
		=> Value to fill the array with.
		  (Note all elements in the array will be this exact value.)

	- start (Optional)
		=> Start index, default 0.

	- end (Optional)
		=> End index, default arr.length.   
		=> given value is not included (according to me)

RETURN VALUE:
	- The modified array, filled with value.
*/






/*
9. filter  ===========

- creates a new array with all elements that pass the test implemented by the provided function.

*/

[12, 5, 8, 130, 44].filter( ele => ele >= 10 ); //[12, 130, 44]



// Find all prime numbers in an array -----
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

array.filter(isPrime); // [2, 3, 5, 7, 11, 13]


/*
SYNTEX:
	- old_array.concat([value1[, value2[, ...[, valueN]]]])

PARAMETERS: 
	- callback
		=> To test each element of the array.
		   Return true to keep the element, false otherwise.
		   taking three arguments:

			- element
				=> The current element being processed in the array.

			- index (Optional)
				=> index current element processed in the array

			- array (Optional)
				=> The array every was called upon.

	- thisArg (Optional)
		=> A value to use as 'this' when executing callback.

RETURN VALUE:
	- A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
*/







/*
10. find  ===========

- The find() method returns the value of the first element in the provided array that satisfies the provided testing function.

*/

[5, 12, 8, 130, 44].find(ele=>ele>10); //12

const inventory = [
  {name: 'apples', quantity: 2},
  {name: 'bananas', quantity: 0},
  {name: 'cherries', quantity: 5}
];

function isCherries(fruit) { 
  return fruit.name === 'cherries';
}

console.log(inventory.find(isCherries)); 
// { name: 'cherries', quantity: 5 }

/*
SYNTEX:
	- arr.find(callback(element[, index[, array]])[, thisArg])

PARAMETERS: 
	- callback
		=> Function to execute on each value in the array,
		   taking three arguments:

			- element
				=> The current element in the array.

			- index (Optional)
				=> The index (position) of the current element in the array.

			- array (Optional)
				=> The array every was called upon.

	- thisArg (Optional)
		=> Object to use as 'this' inside callback.

RETURN VALUE:
	- The value of the first element in the array that satisfies the provided testing function. Otherwise,
	- undefined is returned.
*/






/*
11. findIndex  ===========

- ndex of the first element in the array that satisfies the provided testing function.
- Otherwise, it returns -1, indicating that no element passed the test.

*/

[5, 12, 8, 130, 44].findIndex(element => element > 13); // 3


// Find the index of a prime number in an array
function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log([4, 6, 8, 9, 12].findIndex(isPrime)); // -1, not found
console.log([4, 6, 7, 9, 12].findIndex(isPrime)); // 2 (array[2] is 7)

/*
SYNTEX:
	- arr.findIndex(callback( element[, index[, array]] )[, thisArg])

PARAMETERS: 
	- callback
		=> A function to execute on each value in the array until the function returns true, indicating that the satisfying element was found.
		   taking three arguments:

			- element
				=> The current element being processed in the array.

			- index (Optional)
				=> index current element processed in the array

			- array (Optional)
				=> The array every was called upon.

	- thisArg (Optional)
		=> A value to use as 'this' when executing callback.

RETURN VALUE:
	- The index of the first element in the array that passes the test. Otherwise, -1.
*/






/*
12. flat  ===========

- The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

*/

['a', 'b'].concat( ['c', 'd'] ); // ["a", "b", "c", "d"]
[1, 2,].concat( [3,4], [5, 6] ); // [1, 2, 3, 4, 5, 6]
['a', 'b'].concat( 1, [2, 3] ); // ["a", "b", 1, 2, 3]
[[1]].concat( [2, [3]] ); // [[1], 2, [3]]

/*
SYNTEX:
	- old_array.concat([value1[, value2[, ...[, valueN]]]])

PARAMETERS: 
	- valueN
		=> accept array and value

RETURN VALUE:
	- A new Array instance.
*/





/*
panding learning
1. copyWithin

question
link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
heading: Affecting Initial Array (modifying, appending, and deleting)
*/