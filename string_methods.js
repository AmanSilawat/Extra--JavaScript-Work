 // ->* String Method *<- //

/* 1. Length ==========================

length is a string property
length is a read-only property of string

PARAMETER: no parameter accept

*/


var str = "Hello";
str.length //5



//2. anchor (Deprecated 👎)  ===========

//3. big (Deprecated 👎)  ==============

//4. blink (Deprecated 👎)  ============

//5. bold (Deprecated 👎)  =============



/* 6. charAt ===========================

the string object's charAt() method returns a new string consising of the single UTF-16 code unit located at the specified offset into the string.

*/

var str = "Hello this a string and i'm find something."

str.charAt(9) //s
str.charAt() // H - get default index 0 (no parameter)
str.charAt('j') // H - get default index 0 (non-integer)
str.charAt(50) // " " - out of range return empty string


// SYNTEX: let str = str.charAt(index)

/*PARAMETER : 
	=> index:
	- An integer between 0 and str.length.
	- index is not converted to integer or no index is provided, the default is 0, so the first character of str is returned.
	- If the index you supply is out of this range, JavaScript returns an empty string.
*/






/* 7. charCodeAt ======================

- the charCodeAt() method returns an integer
- between 0 to 65,535 representing the UTF-16 code unit at the given index
- The first 128 Unicode code points are a direct match of the ASCII character encoding. 
- charCodeAt() returns NaN
	=> if the given index is less than 0
	=> if the index is greater than string length
- 

*/

var str = "Hello this a string and i'm find something."

str.charCodeAt(0) //72  index is not a number
str.charCodeAt('aa') //72 (index not a number set default index to 0)
str.charCodeAt(-5) //NaN (less than 0)
str.charCodeAt(100) //NaN (less than 0)


// SYNTEX: str.charCodeAt(index)

/*PARAMETER : 
	=> index:
	- an integer greater than or equal to 0 and less than the length of the string.
	- if index is not a number it default to 0
*/






/* 8. codePointAt =====================
/*

The codePointAt() method returns a non-negative integer
that is the unicode code point value.

*/

const icons = '☃★♲';

icons.codePointAt(1); // chrome:732, firefox: 9733
icons.codePointAt(10); // undefined
icons.codePointAt(-10); // undefined
icons.codePointAt(0); // 226
icons.codePointAt('asdf'); 226// (index not a number set default index to 0)

// ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲ ▲
// | | | | | | | | | |
// different between
// | | | | | | | | | |
// ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼ ▼

icons.charCodeAt(1); // chrome:732, firefox: 9733
icons.charCodeAt(10); // NaN
icons.charCodeAt(-10); // NaN
icons.charCodeAt(0); // 226
icons.charCodeAt('asdf'); 226// (index not a number set 


// SYNTEX: str.codePointAt(pos)

/*PARAMETER : 
	=> index:
	- an integer greater than or equal to 0 and less than the length of the string.
	- if index is not a number it default to 0
*/






/* 9. concat =====================
/*

The concat() method concatenates the string arguments to the calling string and returns a new string.

*/

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2)); //"Hello friend"
console.log(str2.concat(', ', str1)); // "friend Hello"
console.log(str2.concat(', ', [str1, 'zzz'])); // "friend Hello"




// SYNTEX: str1.concat(str2, [, ..strN])

/*PARAMETER : 
	=> index:
	- an integer greater than or equal to 0 and less than the length of the string.
	- if index is not a number it default to 0
*/

















/*

1.
link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
Heading: Getting whole characters
question:non-BMP character

2.
non-Basic-Multilingual-Plane characters

3.
link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/codePointAt
question : different browser different output

*/