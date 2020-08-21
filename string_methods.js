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


/*
SYNTEX: let str = str.charAt(index)

PARAMETER : 
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


/*
SYNTEX: str.charCodeAt(index)

PARAMETER : 
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


/*
SYNTEX: str.codePointAt(pos)

PARAMETER : 
	=> index:
	- an integer greater than or equal to 0 and less than the length of the string.
	- if index is not a number it default to 0
*/






/* 9. concat =====================
/*

The concat() method concatenates the string arguments to the calling string and returns a new string.
don't effect original string.

*/

const str1 = 'Hello';
const str2 = 'World';

str1.concat(' ', str2); //"Hello friend"
str2.concat(' ', str1); // "friend Hello"
str2.concat(' ', [str1, 'zz'] ); // "friend Hello"

"".concat({})    // [object Object]
"".concat([])    // ""
"".concat(null)  // "null"
"".concat(true)  // "true"
"".concat(4, 5)  // "45"




/*
SYNTEX: str1.concat(str2, [, ..strN])

PARAMETER : string
*/




/* 10. constructor =====================
/*

The String constructor is used to create a new String object.
It performs type conversion.

*/


typeof String('hello'); //string
typeof new String('hello'); //object


/*
SYNTEX: new String(thing)
SYNTEX: String(thing)

PARAMETER : thing
	=> anything to be converted to a string
*/






/* 11. endsWith =====================

-the endsWith() method string ends with the characters of a specified string.
-return true or false.
-This method is case-sensitive.

*/

'Hello this is cat'.endsWith('cat'); //true
'Hello this is cat'.endsWith('is ca'); //false
'hello cat faa sa'.endsWith('cat', 9); //true

/*
SYNTEX: str.endsWith(searchString[, lenght])

PARAMETER
	:searchString
		=> search string of the end

	: length
		=> str.default to str.length 
*/





//12. fixed (Deprecated 👎)  ===========

//13. fontcolor (Deprecated 👎)  ===========

//14. fontsize (Deprecated 👎)  ===========






/*
14. includes  ===========

-The includes() method determines whether one string may be found within another string, returning true or false as appropriate.

*/

var str = 'Hello this is cat';
str.includes('cat'); // true
str.includes('hello')  // false


var str = 'To be, or not to be, that is the question.' 

str.includes('To be')        // true
str.includes('question')     // true
str.includes('nonexistent')  // false
str.includes('To be', 1)     // false
str.includes('TO BE')        // false
str.includes('')             // true

/*
SYNTEX: str.includes(searchString[, lenght])

PARAMETER
	:searchString
		=> search with a str

	: length (optional)
		=> the position within the string (default is 0)
*/






/*
15. indexOf  ===========

-The indexOf() method returns
	the index within the String of the first occurrence of specified value.
- starting from index
- if find string is match return indexValue otherwise return -1
- Case Sensitive


*/

var str = "Hello this a string and i'm find something.";
var findStr = "find";
str.indexOf(findStr);
str.indexOf('undefined');

//search empty string - return same index
'hello world'.indexOf('') // returns 0
'hello world'.indexOf('', 0) // returns 0
'hello world'.indexOf('', 3) // returns 3
'hello world'.indexOf('', 8) // returns 8

// string length is greater the index than return string length
'hello world'.indexOf('', 11) // returns 11
'hello world'.indexOf('', 13) // returns 11
'hello world'.indexOf('', 22) // returns 11

// in string first character is 0
'Blue Whale'.indexOf('Blue')      // returns  0
'Blue Whale'.indexOf('Blute')     // returns -1
'Blue Whale'.indexOf('Whale', 0)  // returns  5
'Blue Whale'.indexOf('Whale', 5)  // returns  5
'Blue Whale'.indexOf('Whale', 7)  // returns -1
'Blue Whale'.indexOf('')          // returns  0
'Blue Whale'.indexOf('', 9)       // returns  9
'Blue Whale'.indexOf('', 10)      // returns 10
'Blue Whale'.indexOf('', 11)      // returns 10

// case sensitive
'Blue Whale'.indexOf('blue')  // returns -1

// Checking occurrences
'Blue Whale'.indexOf('Blue') !== -1  // true
'Blue Whale'.indexOf('Bloe') !== -1  // false
~('Blue Whale'.indexOf('Bloe')) // 0, which is falsy
//(~) bitwise operator


/*
SYNTEX: str.indexOf(searchValue[, lenght])

PARAMETER
	:searchString
		=> search with a str

	: fromIndex (optional)
		=> default 0
		=> for fromIndex value lower than 0
			than search 0 to str.lenght
		=> search a str to contains string, fromIndex is greter str.lenght then return -1
		=> search a str to contains empty string, fromIndex is greter str.lenght then return str.length
*/





//16. italics (Deprecated 👎)  ===========





/*
17. lastIndexOf  ===========

The lastIndexOf() method returns the index within the calling String object of the last occurrence of the specified value, searching backwards from fromIndex. Returns -1 if the value is not found.

*/

var str = "Hello this a string and i'm find something.";
var findStr = "find";
str.lastIndexOf(findStr) ;
str.lastIndexOf('undefined') ;

//search empty string - return same index
'hello world'.lastIndexOf('')  // 11 , indexOf: 0
'hello world'.lastIndexOf('', 0)  // 0 , indexOf: 0
'hello world'.lastIndexOf('', 3)  // 3 , indexOf: 3
'hello world'.lastIndexOf('', 8)  // 8 , indexOf: 8

// string length is greater the index than return string length
'hello world'.lastIndexOf('', 11)  // 11 , indexOf: 11
'hello world'.lastIndexOf('', 13)  // 11 , indexOf: 11
'hello world'.lastIndexOf('', 22)  // 11 , indexOf: 11

// in string first character is 0
'Blue Whale'.lastIndexOf('Blue')      // 0  , indexOf:  0
'Blue Whale'.lastIndexOf('Blute')     // -1 , indexOf: -1
'Blue Whale'.lastIndexOf('Whale', 0)  // -1 , indexOf:  5
'Blue Whale'.lastIndexOf('Whale', 5)  // 5  , indexOf:  5
'Blue Whale'.lastIndexOf('Whale', 7)  // 5  , indexOf: -1
'Blue Whale'.lastIndexOf('')          // 10 , indexOf:  0
'Blue Whale'.lastIndexOf('', 9)       // 9  , indexOf:  9
'Blue Whale'.lastIndexOf('', 10)      // 10 , indexOf: 10
'Blue Whale'.lastIndexOf('', 11)      // 10 , indexOf: 10

// case sensitive
'Blue Whale'.lastIndexOf('blue')  // -1, indexOf: -1

// Checking occurrences
'Blue Whale'.lastIndexOf('Blue') !== -1 ;  // true, indexOf: true
'Blue Whale'.lastIndexOf('Bloe') !== -1 ;  // false, indexOf: false
~('Blue Whale'.lastIndexOf('Bloe')) ; // 0,  indexOf: 0, which is falsy


/*
SYNTEX: str.lastIndexOf(searchValue[, lenght])

PARAMETER
	:searchString
		=> search with a str

	: fromIndex (optional)
		=> default 0
		=> for fromIndex value lower than 0
			than search 0 to str.lenght
		=> search a str to contains string, fromIndex is greter str.lenght then return -1
		=> search a str to contains empty string, fromIndex is greter str.lenght then return str.length
*/




//18. link (Deprecated 👎)  ===========





//19. localeCompare  ===========

const a = 'réservé'; // with accents, lowercase
const b = 'RESERVE'; // no accents, uppercase

a.localeCompare(b); //1
a.localeCompare(b, 'en', { sensitivity: 'base' }); //0

a.localeCompare(b)



let items = ['réservé', 'Premier', 'Cliché', 'communiqué', 'café', 'Adieu'];
items.sort( (a, b) => a.localeCompare(b, 'fr', {ignorePunctuation: true})); 
// ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']



// SYNTEX: referenceStr.localeCompare(compareString[, locales[, options]])

// Parameters:
// compareString: 
// 	=> e string against which the referenceStr is compared.

// locales and options: 
// 	=> ?





//20. match  ===========

// The match() method retrieves the result of matching a string against a regular expression.

'This is a String'.match(/[A-Z]/g); //["T", "S"]


// SYNTEX: str.match(regexp)

// PARAMETER
// -regexp:
// 	=> a regular expression object
// 	=> parameter is empty than return empty array






//20. normalize  ===========

// The normalize() method returns the Unicode Normalization Form of the string.

const name1 = '\u0041\u006d\u00e9\u006c\u0069\u0065';
const name2 = '\u0041\u006d\u0065\u0301\u006c\u0069\u0065';


`${name1}, ${name2}`;// expected output: "Amélie, Amélie"
name1 === name2;// expected output: false
name1.length === name2.length;// expected output: false



const name1NFC = name1.normalize('NFC');
const name2NFC = name2.normalize('NFC');

`${name1NFC}, ${name2NFC}`; // expected output: "Amélie, Amélie"
name1NFC === name2NFC; // expected output: true
name1NFC.length === name2NFC.length; // expected output: true


/*
Syntax:
str.normalize([form])

Parameters: ?
*/





//21. padEnd  ===========


'ms'.padEnd(10, '.') // "ms........"
'20050'.padEnd(10) // "20050     "

'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"


// accept two parameter 
// first is : target length - string length is not target length to scretch to target length with added padString and repeat the padString.
// second: optional - padString repeat string to target length.





//21. padStart  ===========


'ms'.padStart(10, '.') // "........ms"
'20050'.padStart(10) // "     20050"

'abc'.padStart(10);          // "       abc"
'abc'.padStart(10, "foo");   // "foofoofabc"
'abc'.padStart(6, "123456"); // "123abc"
'abc'.padStart(1);           // "abc"





//22. repeat  ===========

// return a new string specified number of copies

'Abc'.repeat(5) //"AbcAbcAbcAbcAbc"

//'abc'.repeat(-1)    // RangeError
'abc'.repeat(0)     // ''
'abc'.repeat(1)     // 'abc'
'abc'.repeat(2)     // 'abcabc'
'abc'.repeat(3.5)   // 'abcabcabc' (count will be converted to integer)
//'abc'.repeat(1/0)   // RangeError

// SYNTEX: str.repeat(count)
// PARAMETER: accept one parameter - zero to Infinity -num. of time repeat






/*23. replace  ===========

-The replace() method returns a new string with some or all matches of a pattern replaced by a replacement.
-The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.
-If pattern is a string, only the first occurrence will be replaced.

*/

"Ab ab Ab ab".replace(/a/g, 'S');  //"Ab Sb Ab Sb"
"Ab ab Ab ab".replace(/a/gi, 'S'); //"Sb Sb Sb Sb"


/*
SYNTEX: str.replace(regexp|substr, newSubstr|function)

PARAMETER:
-regexp (pattern)
	=> A RegExp object or literal.
	=> The match or matches are replaced with newSubstr
		or
		the value returned by the specified function.

-substr:
	=> A String that is to be replaced by newSubstr.
	=> It is treated as a literal string and is not interpreted as a regular expression.
	=>Only the first occurrence will be replaced.
*/






/*
24. search  ===========

-The search() method executes a search for a match between a regular expression and this String object.

*/

"Ab ab Ab ab".search(/a/g); // 3 (index value)
"Ab ab Ab ab".search(/a/);  // 3 (index value)

"hey JudE".search(/[A-Z]/g) //4 (index value)
"hey JudE".search(/[A-Z]/) //4 (index value)


/*
Syntax:	str.search(regexp)

Parameters:
	-regexp
		=>A regular expression object.
		=>If a non-RegExp object regexp is passed, it is implicitly converted to a RegExp with new RegExp(regexp).

Return value:
	=> The index of the first match between the regular expression and the given string.
	=> -1 if no match was found.





/*
25. slice  ===========

- The slice() method extracts a section of a string and returns it as a new string, 
- without modifying the original string.

*/

"Hello this is a string".slice(10); // " is a string"
"Hello this is a string".slice(50); // "" (out of range - "")
"Hello this is a string".slice(6, 13); // "this is"

"Hello this is a string".slice(-6); // "string" (negative value- start backwards)
"Hello this is a string".slice(2, -1) // "llo this is a strin"
"Hello this is a string".slice(-6, -13); // ""
"Hello this is a string".slice(-13, -6); //"s is a "
		 "s is a " //output
//		 ▲       ▲
//		 |       |
//		-13     -6


/*

Syntax: str.slice(beginIndex[, endIndex])

PARAMETER:
	-beginIndex
		=> 0 is start to begin
		=> If negative, str.length + beginIndex.
			(For example, str.length - 3.)

		=> If beginIndex is greater than or equal to str.length, slice() returns an empty string.

	-endIndex Optional
		=> what is end position.


*/





//26. small (Deprecated 👎)  ===========



/*

27. split  ===========

- The split() method string divides with specified string and create a array.
- divides a String into an ordered list of substrings
	,puts these substrings into an array
	,and returns the array.
-The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.  

*/

'hello'.split(); //["hello"]
'hello'.split(''); //["h", "e", "l", "l", "o"]
'hello this is string'.split(' '); // ["hello", "this", "is", "string"]

''.split(); //[""]
"he is my".split(/ /); // ["he", "is", "my"]
'aa bb cc dd ee'.split(' ', 3); // ["aa", "bb", "cc"]
'aa bb cc'.split(' ', -2); // ["aa", "bb", "cc"]
//					  -2 - extracts all element


//Reversing a String using split()
//❗This is not a robust way to reverse a string:
//🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴
											 
'asdfghjkl'.split('').reverse().join('')	 //🔴

'résumé'.split(/(?:)/u).reverse().join('') 	 //🔴
											  
//🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴 🔴

/*

SYNTEX: str.split([separator[, limit]])

Parameters:
	-separator Optional
		=> The pattern describing where each split should occur.  The separator can be a simple string or it can be a regular expression. 

		=>accept sting
*/





/*

28. endsWith  ===========

The startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.

*/

'Hello this is cat'.startsWith('Hello'); //true
'Hello this is cat'.startsWith('ello'); // false
'hello cat faa sa'.startsWith('Hello', 9); //true

/*
SYNTEX: str.startsWith(searchString[, lenght])

PARAMETER
	:searchString
		=> search string of the start

	: length
		=> str.default to str.length 
*/





//29. strike (Deprecated 👎)  ===========

//30. strike (Deprecated 👎)  ===========






/*



















/*
pandding methods

1. localeCompare
2. match
3. matchAll
4. normalize
5. replace
*/