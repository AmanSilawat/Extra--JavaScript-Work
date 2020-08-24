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
/*console.log(*/ popped;
/*console.log(*/ x;

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
/*console.log(*/arr1;  // ['parsnip', 'potato', 'celery', 'beetroot']



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
23. reduce  ===========

- The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

*/

[1, 2, 3, 4].reduce( (acc, curVal) => acc + curVal); //10
[1, 2, 3, 4].reduce( (acc, curVal) => acc + curVal, 5); //15


// ................... pair 1 start
let maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x);
let maxCallback2 = ( max, cur ) => Math.max( max, cur );
// reduce without initialValue
[ { x: 2 }, { x: 22 }, { x: 42 } ].reduce( maxCallback ); // NaN -Math.max( 10, undefined )
[ { x: 2 }, { x: 22 }            ].reduce( maxCallback ); // 22
[ { x: 2 }                       ].reduce( maxCallback ); // { x: 2 } -1 element not return same element
// [                                ].reduce( maxCallback ) // TypeError

[ { x: 22 }, { x: 42 } ].map( el => el.x )
                        .reduce( maxCallback2, -Infinity ); //22
// ................... pair 1 end


[0, 1, 2, 3, 4].reduce((acc, curVal, curInd, arr) => acc + curVal); //10



// ................... pair 2 start
// Sum of values in an object array
let initialValue = 0
let sum = [{x: 1}, {x: 2}, {x: 3}].reduce(function (acc, curVal) {
    return acc + curVal.x
}, initialValue)

/*console.log(*/sum // logs 6
// ................... pair 2 end


/*🟡*/ "b" in {a: 1, b: 2}; //true



// ................... pair 3 start
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
	if (name in allNames) {
		allNames[name]++
	}
	else {
		allNames[name] = 1
	}
	return allNames
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
/*console.log(*/countedNames;
// ................... pair 3 end



// ................... pair 4 start  ???????????????????????????????
let people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {

	return objectArray.reduce(function (acc, obj) {

		let val = obj[property]

		if (!acc[val]) {
			acc[val] = [];
		}

		acc[val].push(obj);

		return acc;
	}, {})

}

let groupedPeople = groupBy(people, 'age')
// groupedPeople is:
// { 
//   20: [
//     { name: 'Max', age: 20 }, 
//     { name: 'Jane', age: 20 }
//   ], 
//   21: [{ name: 'Alice', age: 21 }] 
// }
// ................... pair 4 end  ???????????????????????????????




// ................... pair 5 start
// Bonding arrays contained in an array of objects using the spread operator and initialValue
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}]

var res = friends.reduce( (accu, curVal)=>{
	return [ ...accu, ...curVal.books ]
}, ["The Legent"] )

res; //console this line

// output:
//["The Legent", "Bible", "Harry Potter", "War and peace", "Romeo and Juliet", "The Lord of the Rings", "The Shining"]


// ................... pair 5 end





// ................... pair 6 start
// Remove duplicate items in an array

let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce(function (accu, curVal) {
		if (accu.indexOf(curVal) === -1) {
	accu.push(curVal)
	}
		return accu;
	}, [])

console.log(myOrderedArray) //["a", "b", "c", "e", "d"]

// same result using this way
console.log( Array.from( new Set(myArray) ) ) //["a", "b", "c", "e", "d"]

// ................... pair 6 end






/*
SYNTEX:
	- arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])

PARAMETERS: 
	- callback
		=> A function to execute on each element in the array (except for the first, if no initialValue is supplied).
		   taking four arguments:

			- accumulator
				=> The accumulator accumulates callback's return values.
				=> It is the accumulated value previously returned in the last invocation of the callback—or initialValue,
				   if it was supplied (see below).

			- currentValue
				=> The current element being processed in the array.

			- index (Optional)
				=> The index of the current element being processed in the array.
				=> Starts from index 0 if an initialValue is provided.
				   Otherwise,
				   it starts from index 1.

			- array (Optional)
				=> The array reduce() was called upon.

	- initialValue (Optional)
		=> A value to use as the first argument to the first call of the callback.
		=> If no initialValue is supplied,
		   the first element in the array will be used as the initial accumulator value and skipped as currentValue.
		=> Calling reduce() on an empty array without an initialValue will throw a TypeError.

RETURN VALUE:
	- The single value that results from the reduction.
*/







/*
24. reduceRight  ===========

- The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value.

*/

const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (accumulator, currentValue) => accumulator.concat(currentValue)
);

array1;
// expected output: Array [4, 5, 2, 3, 0, 1]


/*
SYNTEX:
	- arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])

PARAMETERS: 
	- callback
		=> Function to execute on each value in the array,
		   taking four arguments:

			- accumulator
				=> The value previously returned in the last invocation of the callback, or initialValue, if supplied. (See below.)

			- currentValue
				=> The current element being processed in the array.

			- index (Optional)
				=> The index of the current element being processed in the array.

			- array (Optional)
				=> The array reduceRight() was called upon.

	- initialValue (Optional)
		=> Value to use as accumulator to the first call of the callback.
		=> If no initial value is supplied, the last element in the array will be used and skipped.
		=> Calling reduce or reduceRight on an empty array without an initial value creates a TypeError.

RETURN VALUE:
	- The value that results from the reduction.
*/








/*
25. reverse  ===========

- The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

*/

['one', 'two', 'three'].reverse(); // ["three", "two", "one"]


/*
SYNTEX:
	- a.reverse()

RETURN VALUE:
	- The reversed array.
*/





/*
26. shift  ===========

- The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.

*/

var arr = [5, 2, 3];
var x = arr.shift(); // 5
arr; // [2, 3]

[].shift(); // undefined


var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( (i = names.shift()) !== undefined ) {
    /*console.log(*/i;
}
// Andrew, Edward, Paul, Chris, John

/*
SYNTEX:
	- arr.shift()

RETURN VALUE:
	- The removed element from the array; undefined if the array is empty.
*/







/*
27. slice  ===========

- The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.
- The original array will not be modified.

*/

var arr = ['aa', 'bb', 'cc', 'dd', 'ee'];
arr.slice();		// ["aa", "bb", "cc", "dd", "ee"]
arr.slice(2);		// ["cc", "dd", "ee"]
arr.slice(-1);		// ["ee"]
arr.slice(-2);		// ["dd", "ee"]
arr.slice(2, 4);	// ["cc", "dd"]
arr.slice(1, 5);	// ["bb", "cc", "dd", "ee"]
arr.slice(1, -1);	// ["bb", "cc", "dd"]
arr.slice(-3, -1);	// ["cc", "dd"]


/*
SYNTEX:
	- arr.slice([start[, end]])

PARAMETERS:

	- start
		=> Zero-based index at which to start extraction.
		=> A negative index can be used,
		   indicating an offset from the end of the sequence.
		=> slice(-2) extracts the last two elements in the sequence.
		=> If start is undefined, slice starts from the index 0.
		=> If start is greater than the index range of the sequence,
		   an empty array is returned.

	- end
		=> Zero-based index before which to end extraction.
		   slice extracts up to but not including end.
		   For example, slice(1,4) extracts the second element through the fourth element (elements indexed 1, 2, and 3).

		=> A negative index can be used,
		   indicating an offset from the end of the sequence.
		   slice(2,-1) extracts the third element through the second-to-last element in the sequence.

		=> If end is omitted,
		   slice extracts through the end of the sequence (arr.length).

		=> If end is greater than the length of the sequence,
		   slice extracts through to the end of the sequence (arr.length).

RETURN VALUE:
	- A new array containing the extracted elements.
*/






/*
28. some  ===========

- The some() method tests whether at least one element in the array passes the test implemented by the provided function.
- It returns a Boolean value.

*/

[1, 2, 3, 4, 5].some(ele=> ele % 2 === 0); //true


/*
SYNTEX:
	- arr.some(callback(element[, index[, array]])[, thisArg])

PARAMETERS:
	
	- callback
		=> A function to test for each element,
		   taking three arguments:

		- element
			=> The current element being processed in the array.

		- index (ptional)
			=> The index of the current element being processed in the array.

		- array (Optional)
			=> The array some() was called upon.

	- thisArg (Optional)
	=> A value to use as this when executing callback.

RETURN VALUE:
	- true if the callback function returns a truthy value for at least one element in the array. Otherwise, false<.
*/






/*
29. sort  ===========

- Sorts the elements of an array in place and returns the sorted array.
- The default sort order is ascending,
  built upon converting the elements into strings,
  then comparing their sequences of UTF-16 code units values.

- The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

*/

['March', 'Jan', 'Feb', 'Dec'].sort(); // ["Dec", "Feb", "Jan", "March"]
[1, 30, 4, 21, 100000].sort(); // [1, 100000, 21, 30, 4]


// Sorting non-ASCII characters
var items = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair'];
items.sort(function (a, b) {
	return a.localeCompare(b);
});

// items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']


/*
SYNTEX:
	- arr.sort([compareFunction])

PARAMETERS:
	
	- compareFunction
		=> Specifies a function that defines the sort order.
		=> If omitted, the array elements are converted to strings,
		   then sorted according to each character's Unicode code point value.

		- firstEl
			=> The first element for comparison.

		- secondEl
			=> The second element for comparison.

RETURN VALUE:
	- The sorted array. Note that the array is sorted in place, and no copy is made.
*/

/*
- DESCRIPTION:
	=> If compareFunction(a, b)
	   returns less than 0,
	   sort 'a' to an index lower than 'b' (i.e. 'a' comes first).

	=> If compareFunction(a, b)
	   returns 0,
	   leave a and b unchanged with respect to each other,
	   but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behavior, thus, not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.

	=> If compareFunction(a, b)
	   returns greater than 0, sort 'b' to an index lower than 'a' (i.e. 'b' comes first).

	=> compareFunction(a, b)
	   must always return the same value when given a specific pair of elements a and b as its two arguments.
	   If inconsistent results are returned, then the sort order is undefined.
*/





/*
30. splice  ===========

- This method changes the contents of an array by
  removing or replacing existing elements
  and/or adding new elements in place.

- The time and space complexity of the sort cannot be guaranteed as it depends on the implementation.

*/

// splice(start, delete, item1, item2)
// DELETED VALUE ASSIGN IN VARIABLE AND MODIFIED original ARRAY

['Jan', 'March', 'April', 'June'].splice(1, 0, 'Feb');/*
["Jan", "Feb", "March", "April", "June"] */

['Jan', 'March', 'April', 'June'].splice(4, 1, 'May');/*
["Jan", "Feb", "March", "April", "May"] */

['Jan', 'March', 'April', 'June'].splice(4, 1);/*
["Jan", "Feb", "March", "April", "May"] */

['aa', 'bb', 'cc', 'dd'].splice(-2, 1);/*	// assign in var=["cc"]
["aa", "bb", "dd"] */	// - modifying original arr

['aa', 'bb', 'cc', 'dd'].splice(2);/*	// assign in var=["cc", "dd"]
["aa", "bb"] */			// - modifying original arr


/*
SYNTEX:
	- let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

PARAMETERS:
	
	- start
		=> start to 0 index and 0 'deleteCount' value add 'item' without deleting.
		=> if negative, start to end.

	- deleteCount (Optional)
		=> Number of elements in the array to remove from start.
		=> val is equal or grater than array.length - start

RETURN VALUE:
	- An array containing the deleted elements.
	- If only one element is removed, an array of one element is returned.
	- If no elements are removed, an empty array is returned.

*/




/*
31. toLocaleString  ===========

- returns a string representing the elements of the array.
- The elements are converted to Strings using their toLocaleString methods and these Strings are separated by a locale-specific String (such as a comma “,”).

*/

var arr1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
arr1.toLocaleString(); //"1,a,21/12/1997, 19:42:00"
arr1.toLocaleString('en', {timeZone: 'UTC'}); // "1,a,12/21/1997, 2:12:00 PM"


var prices = ['￥7', 500, 8123, 12]; 
prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });
// "￥7,￥500,￥8,123,￥12"

var prices = [500, 8123, 12]; 
prices.toLocaleString('ja-JP', { style: 'currency', currency: 'INR' });
// "₹500.00,₹8,123.00,₹12.00"



/*
SYNTEX:
	- arr.toLocaleString([locales[, options]]);

PARAMETERS:
	
	- locales (Optional)
		=> A string with a BCP 47 language tag,
		   or an array of such strings. For the general form and interpretation of the locales argument, see the Intl page.

	- options (Optional)
		=> An object with configuration properties,
		   for numbers see Number.prototype.toLocaleString(),
		   and for dates see Date.prototype.toLocaleString().

RETURN VALUE:
	- A string representing the elements of the array.
*/





//32. toSource (Deprecated 👎)  ===========


/*
33. toString  ===========

- The toString() method returns a string representing the specified array and its elements.

*/

[1, 2, 'a', '1a'].toString(); //"1,2,'a','1a'"

/*
SYNTEX:
	- arr.toString()

RETURN VALUE:
	- A string representing the elements of the array.
*/




/*
34. unshift  ===========

- The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

*/

var arr1 = [1, 2, 3];
var x = arr1.unshift(4, 5);
x; // 5 (lenght of array)
arr1 // [4, 5, 1, 2, 3]

/*
SYNTEX:
	- arr.unshift(element1[, ...[, elementN]])

PARAMETERS:
	- elementN
		=> The elements to add to the front of the arr.

RETURN VALUE:
	- The new length property of the object upon which the method was called.
*/





/*
35. values  ===========

- returns a new Array Iterator object
  that contains the values for each index in the array.

*/
// 1
var arr1 = ['a', 'b', 'c'];
var iterator = arr1.values();
iterator; // Array Iterator

for (const value of iterator) {
	value; //console this line
}
// output: 
// "a"
// "b"
// "c"

for (const value of iterator) {
	value; //console this line
}
// output: 
//undefined


// 2
//Array.prototype.values is default implementation of Array.prototype[Symbol.iterator].
Array.prototype.values === Array.prototype[Symbol.iterator]      //true


// 3
var arr = ['a', 'b', 'c', 'd', 'e'];
var iterator = arr.values();

iterator.next(); // { value: "a", done: false }
iterator.next().value; // 'b'
iterator.next(); // 'c'
iterator.next(); // { value: "d", done: false }
iterator.next(); // { value: "e", done: false }
iterator.next().value; // undefined


// 4


/*
SYNTEX:
	- arr.values()

RETURN VALUE:
	- A new Array iterator object.
*/






/*
36. Array.prototype.[@@iterator]()  ===========

- The @@iterator method is part of The iterable protocol,
  that defines how to synchronously iterate over a sequence of values.
- The initial value of the @@iterator property is the same function object as the initial value of the values() property.

*/

var arr = ['a', 'b', 'c'];
var eArr = arr[Symbol.iterator]();
eArr; // Array Iterator

var letterResult = document.getElementById('list'); // h1#heading
for (let letter of eArr) {
	letterResult.innerHTML += '<li>' + letter + "</li>";
}


//2
var arr = ['a', 'b', 'c', 'd', 'e'];
var eArr = arr[Symbol.iterator]();
eArr.next().value; // a
eArr.next().value; // b
eArr.next().value; // c
eArr.next().value; // d
eArr.next().value; // e


Object.getPrototypeOf('a'); // String{}
Object.getPrototypeOf(102); // Number{}
Object.getPrototypeOf(NaN); // Number{}
Object.getPrototypeOf(true); // Boolean{}

/*
SYNTEX:
	- arr[Symbol.iterator]()

RETURN VALUE:
	- The initial value given by the values() 'iterator'.
	  By default,
	  using arr[Symbol.iterator] will return the values() function.
*/





/*
learn panding
1. copyWithin
2. reduce
3. reduceRight
4. toLocaleString

question
link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
heading: Affecting Initial Array (modifying, appending, and deleting)
*/