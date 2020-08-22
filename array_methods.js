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
1. Array.isArray  ===========

- The Array.from() static method creates a new,
shallow-copied Array instance from an array-like or iterable object.

*/