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
var arr = Array(3).fill({}); // [{}, {}, {}]
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
var array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 

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

inventory.find(isCherries);  // console this line
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

[4, 6, 8, 9, 12].findIndex(isPrime); // -1, not found
[4, 6, 7, 9, 12].findIndex(isPrime); // 2 (array[2] is 7)

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

[0, 1, 2, [3, 4]].flat(); // [0, 1, 2, 3, 4]
[0, 1, 2, [[[3, 4]]]].flat(); // [0, 1, 2, [3, 4]]
[0, 1, 2, [[[3, 4, [5],[[5]]]]]].flat(Infinity); // [0, 1, 2, 3, 4, 5, 5]

// The flat method removes empty slots in arrays:
[1, 2, , 4, 5].flat(); // [1, 2, 4, 5]



/*
SYNTEX:
	- var newArray = arr.flat([depth]);

PARAMETERS: 
	- depth
		=> The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.

RETURN VALUE:
	- A new array with the sub-array elements concatenated into it.
*/






/*
13. flatMap  ===========

- The flatMap() method first maps each element using a mapping function, then flattens the result into a new array.
- It is identical to a map() followed by a flat() of depth 1,
- but flatMap() is often quite useful,
- as merging both into one method is slightly more efficient.



*/

//BOTH ARE SAME OUTPUT  [1, 2, 2, 4, 3, 6, 4, 8]
[1, 2, 3, 4].flatMap( x=> [x, x*2]);
[1, 2, 3, 4].reduce((acc, x) => acc.concat([x, x * 2]), []);

[1, 2, 3, 4].map(x => [x * 2]); // [[2], [4], [6], [8]]
[1, 2, 3, 4].flatMap(x => [x * 2]); // [2, 4, 6, 8]

// only one level is flattened
[1, 2, 3, 4].flatMap(x => [[x * 2]]); // [[2], [4], [6], [8]]



//............
//For adding and removing items during a map()

// Let's say we want to remove all the negative numbers
// and split the odd numbers into an even number and a 1
var a = [5, 4, -3, 20, 17, -33, -4, 18];
//       |\  \  x   |  | \   x   x   |
//      [4,1, 4,   20, 16, 1,       18]

a.flatMap( (n) =>
  (n < 0) ?      [] :
  (n % 2 == 0) ? [n] :
                 [n-1, 1]
);

// expected output: [4, 1, 4, 20, 16, 1, 18]
//...........

/*
SYNTEX:
	- var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
		// return element for new_array
	}[, thisArg])

PARAMETERS: 
	- callback
		=> Function to execute on each value in the array,
		   taking three arguments:

			- element
				=> The current element in the array.

			- index (Optional)
				=> The index (position) of the current element in the array.

			- array (Optional)
				=> The array 'map' was called upon.

	- thisArg (Optional)
		=> Object to use as 'this' inside callback.

RETURN VALUE:
	- A new array with each element being the result of the callback function and flattened to a depth of 1.
*/







/*
14. forEach  ===========

- The forEach() method executes a provided function once for each array element.

*/



['a', 'b', 'c'].forEach(element => /*console.log(*/element);
// expected output: "a"
// expected output: "b"
// expected output: "c"


//.......
// No operation for uninitialized values (sparse arrays)
let numCallbackRuns = 0;

[1,3,,7].forEach((element) => {
  element  //console this line
  numCallbackRuns++
});

"numCallbackRuns: ", numCallbackRuns; //console this line
// 1
// 3
// 7
// numCallbackRuns: 3
// comment: as you can see the missing value between 3 and 7 didn't invoke callback function.



// .........
// ------------------------------------------------ Using thisArg *
function Counter() {
  this.sum = 0
  this.count = 0
}
Counter.prototype.add = function(array) {
  array.forEach((entry) => {
    this.sum += entry
    ++this.count
  }, this)
  // ^---- Note
}

var obj = new Counter();
obj.add([2, 5, 9]);
obj.count;
// 3 
obj.sum;
// 16


/*
SYNTEX:
	- arr.forEach(callback(currentValue [, index [, array]])[, thisArg])

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
	- undefined.
*/






/*
15. includes  ===========

- this method determines whether an array includes a certain value among its entries, returning true or false as appropriate

*/

[1, 2, 3].includes(2); // true
['aaa', 'bbb', 'ccc'].includes('aaa'); // true
['aaa', 'bbb', 'ccc'].includes('aa'); // true

[1, 2, 3].includes(2);      // true
[1, 2, 3].includes(4);      // false
[1, 2, 3].includes(3, 3);   // false
[1, 2, 3].includes(3, -1);  // true
[1, 2, NaN].includes(NaN);  // true


/*
SYNTEX:
	- arr.includes(valueToFind[, fromIndex])

PARAMETERS: 
	- valueToFind
		=> The value to search for

	- fromIndex (Optional)
		=> The position in this array at which to begin searching for valueToFind.

RETURN VALUE:
	- A Boolean.
*/








/*
16. indexOf  ===========

- The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

*/

['ant', 'bison', 'camel', 'bison'].indexOf('bison'); // 1
['ant', 'bison', 'camel', 'bison'].indexOf('bison', 1); // 1
['ant', 'bison', 'camel', 'bison'].indexOf('bison', 2); // 3
['ant', 'bison', 'camel', 'bison'].indexOf('giraffe'); // -1

[2, 9, 9].indexOf(2);     // 0
[2, 9, 9].indexOf(7);     // -1
[2, 9, 9].indexOf(9, 2);  // 2
[2, 9, 9].indexOf(2, -1); // -1
[2, 9, 9].indexOf(2, -3); // 0

var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
/*console.log(*/indices;
// [0, 2, 4]


/*
SYNTEX:
	- arr.indexOf(searchElement[, fromIndex])

PARAMETERS: 
	- searchElement
		=> Element to locate in the array.

	- fromIndex
		=> index is grater array or equal to the array length, -1 return

RETURN VALUE:
	- A new Array instance.
*/









/*
17. join  ===========

- The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

*/

['Fire', 'Air', 'Water'].join(); 		  // "Fire,Air,Water"
['Fire', 'Air', 'Water'].join(undefined); // "Fire,Air,Water"

['Fire', 'Air', 'Water'].join(''); // "FireAirWater"
['Fire', 'Air', 'Water'].join([]); // "FireAirWater"

['Fire', 'Air', 'Water'].join('-'); // "Fire-Air-Water"
['Fire', 'Air', 'Water'].join(null); // "FirenullAirnullWater"


/*
SYNTEX:
	- arr.join([separator])

PARAMETERS: 
	- separator (Optional)
		=> Specifies string to separate a array.
		=> The separator is converted to a string if necessary.
		=> If omitted, the array elements are separated with a comma (","). If separator is an empty string, all elements are joined without any characters in between them.Elementto locate in the array.

	- fromIndex
		=> index is grater array or equal to the array length, -1 return

RETURN VALUE:
	- A string with all array elements joined. If arr.length is 0, the empty string is returned.
*/






/*
18. keys  ===========

- The keys() method returns a new Array Iterator object that contains the keys for each index in the array.

*/

['a', 'b', 'c'].keys();
for (const key of iterator) {
  key // console this line
}
// output:
// 0
// 1
// 2

['a', , 'c'].keys(); // Array Iterator
Object.keys( ['a', , 'c'] );   // ['0', '2']
[...arr.keys( ['a', , 'c'] )]; // [0, 1, 2]


/*
SYNTEX:
	- arr.keys()

RETURN VALUE:
	- A new Array iterator object.
*/





/*
19. lastIndexOf  ===========

- return last index at which a given element can be found in the array,
  or
  -1 if it is not present.
- The array is searched backwards, starting at fromIndex.

*/

['Dodo', 'Tiger', 'Penguin', 'Dodo'].lastIndexOf('Dodo'); // 3
['Dodo', 'Tiger', 'Penguin', 'Dodo'].lastIndexOf('Tiger'); // 1


[2, 5, 9, 2].lastIndexOf(2);     // 3
[2, 5, 9, 2].lastIndexOf(7);     // -1
[2, 5, 9, 2].lastIndexOf(2, 3);  // 3
[2, 5, 9, 2].lastIndexOf(2, 2);  // 0
[2, 5, 9, 2].lastIndexOf(2, -2); // 0
[2, 5, 9, 2].lastIndexOf(2, -1); // 3

/*
SYNTEX:
	- arr.lastIndexOf(searchElement[, fromIndex])

PARAMETERS: 
	- searchElement
		=> Element to locate in the array.

	- fromIndex (Optional)
		=> searching srtart to backwards.
		=> default- arr.length
		=> index is grater array or equal to the array length, -1 return

RETURN VALUE:
	- The last index of the element in the array; -1 if not found.
*/







/*
20. Map  ===========

- create new array same array size.
- transform a array.

*/


[1, 2, 3, 4].map(x => x * 2); // 2, 4, 6, 8

[1, 4, 9].map( num => Math.sqrt(num) ) // [1, 2, 3]


var a = Array.prototype.map.call('Hello World', x => x.charCodeAt(0));
/*console.log(*/a;

// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]

// Tricky use case
["1", "2", "3"].map(parseInt);

// parseInt(string, radix) -> map(parseInt(value, index))
/*  first iteration  (index is 0): */ parseInt("1", 0)  // 1
/*  second iteration (index is 1): */ parseInt("2", 1)  // NaN
/*  third iteration  (index is 2): */ parseInt("3", 2)  // NaN





function returnInt(element) {
  return parseInt(element, 10)
}

['1', '2', '3'].map(returnInt); // [1, 2, 3]
// Actual result is an array of numbers (as expected)

['1', '2', '3'].map( str => parseInt(str) ); // [1, 2, 3]

// A simpler way to achieve the above, while avoiding the "gotcha":
['1', '2', '3'].map(Number);  // [1, 2, 3]

// But unlike parseInt(), Number() will also return a float or (resolved) exponential notation:
['1.1', '2.2e2', '3e300'].map(Number);  // [1.1, 220, 3e+300]

// For comparison, if we use parseInt() on the array above:
['1.1', '2.2e2', '3e300'].map( str => parseInt(str) ); // [1, 2, 3]


/*
SYNTEX:
	let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])

PARAMETERS: 
	- callback
		=> Function that is called for every element of arr.
		   Each time callback executes, the returned value is added to new_array.
		   taking three arguments:

			- currentValue
				=> The current element in the array.

			- index (Optional)
				=> The index (position) of the current element in the array.

			- array (Optional)
				=> The array 'map' was called upon.

	- thisArg (Optional)
		=> Value to use as this when executing callback.

RETURN VALUE:
	- A new array with each element being the result of the callback function.
*/







/*
21. pop  ===========

- removes the last element from an array and returns that element.
- This method changes the length of the array.

*/

var arr = ['broccoli', 'kale', 'tomato', 'cabbage'];
/* return */ arr.pop(); // 'cabbage'

/* console.log( */arr; // ["broccoli", "kale", "tomato"]




// ????????????????????????????????????????????????????
// ????????????????????????????????????????????????????

var x = {1: 'a', 2: 'b', 3: 'c', length: 3};
var popped = Array.prototype.pop.call(x);
console.log(popped);
console.log(x);

/*
SYNTEX:
	arrName.pop()

RETURN VALUE:
	- The removed element from the array; undefined if the array is empty.
*/







/*
22. push  ===========

- The push() method adds one or more elements to the end of an array and returns the new length of the array.

*/

var arr = ['aa', 'bb', 'cc'];
/* return */ arr.push('dd'); // 4
/* console.log( */arr; // ["aa", "bb", "cc", "dd"]


// Merging two arrays ---
var arr1 = ['aa', 'bb'];
var arr2 = ['cc', 'dd'];

Array.prototype.push.apply(arr1, arr2)
console.log(arr1);  // ['parsnip', 'potato', 'celery', 'beetroot']



/*
SYNTEX:
	arr.push([element1[, ...[, elementN]]])

PARAMETERS:
	- elementN
		=> The element(s) to add to the end of the array.

RETURN VALUE:
	- The new length property of the object upon which the method was called.
*/





/*
learn panding
1. copyWithin

question
link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
heading: Affecting Initial Array (modifying, appending, and deleting)
*/