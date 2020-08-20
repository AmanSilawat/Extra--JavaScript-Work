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


/*

link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
Heading: Getting whole characters
use in programing:non-BMP character

*/



/* 7. charCodeAt ======================



*/