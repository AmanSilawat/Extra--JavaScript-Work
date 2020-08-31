/*
1. Object.assign() -----

- this method copies all enumerable own properties from one or more source objects to a target object. It returns the target object.

*/

var obj1 = {a: 1, b: 2}
var obj2 = {b: 3, c: 4}

var res = Object.assign(obj1, obj2);
res; // {a: 1, b: 3, c: 4}

//...

// DON'T USE CLONING THIS WAY
var obj = { a: 1 };
var copy = Object.assign({}, obj);
copy; // { a: 1 }

// ...

var o1 = { a: 1, b: 1, c: 1 };
var o2 = { b: 2, c: 2 };
var o3 = { c: 3 };

var obj = Object.assign({}, o1, o2, o3);
obj; // { a: 1, b: 2, c: 3 }

// ...

var o1 = { a: 1 };
var o2 = { [Symbol('foo')]: 2 };

var obj = Object.assign({}, o1, o2);
obj; // { a : 1, [Symbol("foo")]: 2 } (cf. bug 1207182 on Firefox)
Object.getOwnPropertySymbols(obj); // [Symbol(foo)]

var obj = {
	a: {
		value: 1
	},
	b: {
		value: 2,
		enumerable: true
	}
}
obj

/*
SYNTAX
	- Object.assign(target, ...sources)

PARAMETERS
	- target
		=> The target object
		— what to apply the sources’ properties to, which is returned after it is modified.

	- sources
		=> The source object(s)
		— objects containing the properties you want to apply.

Return value
- The target object.


Des
- The Object.assign() method only
	copies enumerable and own properties
		from a source object to a target object
*/






/*
2. Object.create() -----

- The Object.create() method creates a new object, using an existing object as the prototype of the newly created object.

*/
const person = { isHuman: false };
const me = Object.create(person);

me.name = 'Matthew';
// "name" is a property set on "me", but not on "person"

me.isHuman = true;
me; // {name: "Matthew", isHuman: true}



oco = Object.create( {} );   // Seems normal
ocn = Object.create( null ); // Seems normal here too, so far
// "ocn" create null object 

oco.p = 1; // Still seems normal
ocn.p = 0; // Still seems normal here too. BUT WAIT...
"oco is: " + oco // shows "oco is: [object Object]"

//"ocn is: " + ocn // throws error: Cannot convert object to primitive value
//alert(ocn)       // throws error: Cannot convert object to primitive value
//ocn.toString()   // throws error: ocn.toString is not a function
//ocn.valueOf()    // throws error: ocn.valueOf is not a function
ocn.constructor  // shows "undefined"

// entries method
var obj = Object.create({ a: 1, b: 2 });
Object.entries(obj); // "[]"
Object.entries({ a: 1, b: 2 }); // [["a", 1], ["b", 2]]




//...SET PROTOTYPE TO CREATED NULL OBJECT
ocn = Object.create( null ); // create "null" object (same as before)

// set new object's prototype to the "generic" object (NOT standard-object)
Object.setPrototypeOf(ocn, Object.prototype);


/*
SYNTAX
	- Object.create(proto, [propertiesObject])

PARAMETERS
	- proto
		=> The object which should be the prototype of the newly-created object.

	- propertiesObject (Optional)
		=> If specified and not undefined,
		   an object whose enumerable own properties
		   (that is, those properties defined upon itself and not enumerable properties along its prototype chain) specify property descriptors to be added to the newly-created object, with the corresponding property names. These properties correspond to the second argument of Object.defineProperties().

RETURN VALUE
	- A new object with the specified prototype object and properties.
*/



/*

3. Object.defineProperties() -----

- this method defines new or modifies existing properties directly on an object,
- returning the object.

*/

var obj1 = {};
Object.defineProperties( obj1, {
	property1: {
		value: 40,
		writable: true
	},
	property2: {}
});
obj1.property1; // 40
obj1.property1; // undefined

//..

/*
SYNTAX
	- Object.defineProperties(obj, props)

PARAMETERS
	- obj
		=> The object on which to define or modify properties.

	- props

		=> An object whose keys represent the names of properties to be defined or modified and whose values are objects describing those properties. Each value in props must be either a data descriptor or an accessor descriptor; it cannot be both (see Object.defineProperty() for more details).

		=> Data descriptors and accessor descriptors may optionally contain the following keys:

		- configurable

			=> true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.

			=> Defaults to false.

		- enumerable

			=> true if and only if this property shows up during enumeration of the properties on the corresponding object.

			=> Defaults to false.

		=> A data descriptor also has the following optional keys:

		- value

			=> The value associated with the property. Can be any valid JavaScript value (number, object, function, etc).

			=> Defaults to undefined.

		- writable

			=> true if and only if the value associated with the property may be changed with an assignment operator.

			=> Defaults to false.

		=> An accessor descriptor also has the following optional keys:

		- get

			=> A function which serves as a getter for the property, or undefined if there is no getter. The function's return value will be used as the value of the property.

			=> Defaults to undefined.

		- set

			=> A function which serves as a setter for the property, or undefined if there is no setter. The function will receive as its only argument the new value being assigned to the property.

			=> Defaults to undefined.

	=> If a descriptor has neither of value, writable, get and set keys, it is treated as a data descriptor. If a descriptor has both value or writable and get or set keys, an exception is thrown.


RETURN VALUE

	- The object that was passed to the function.
*/




/*
4. Object.defineProperty() -----

- The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

*/

'use strict';
var object1 = {};

Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});

Object.defineProperty(object1, 'property2', {
  value: 42,
  writable: true,
  enumerable: true
});

object1.property1 = 77; // 42
object1.property2 = 77; // 77
// throws an error in strict mode

object1.property1;
// expected output: 42

for (let x in object1) {
	x;
}
// output: 
// property2


/*

SYNTAX
	- Object.defineProperty(obj, prop, descriptor)

PARAMETERS
	- obj
		=> The object on which to define the property.

	- prop
		=> The name or Symbol of the property to be defined or modified.

	- descriptor
		=> The descriptor for the property being defined or modified.


RETURN VALUE
	- The object that was passed to the function.
*/






/*
5. Object.entries() -----

- this method returns an array of a given object's own enumerable string-keyed property [key, value] pairs,
- in the same order as that provided by a for...in loop.
 (The only important difference is that a for...in loop enumerates properties in the prototype chain as well).

- The order of the array returned by Object.entries() does not depend on how an object is defined.
- If there is a need for certain ordering, then the array should be sorted first, like

*/

var object1 = {
	a: 'somestring',
	b: 42
};

for ( const [key, val] of Object.entries(object1)) {
	(`${key}: ${val}`); //console this line
}

// expected output:
// "a: somestring"
// "b: 42"
// order is not guaranteed

//..

var obj = { foo: 'bar', baz: 42 };
Object.entries(obj); // [ ['foo', 'bar'], ['baz', 42] ]

// array like object
var obj = { 0: 'a', 1: 'b', 2: 'c' };
Object.entries(obj); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// array like object with random key ordering
var anObj = { 100: 'a', 2: 'b', 7: 'c' };
Object.entries(anObj); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]


/*

SYNTAX
	- Object.entries(obj)

PARAMETERS
	- obj
		=> The object whose own enumerable string-keyed property [key, value] pairs are to be returned.

RETURN VALUE
	- An array of the given object's own enumerable string-keyed property [key, value] pairs.
*/






/*
6. Object.freeze() -----

- The Object.freeze() method freezes an object.
A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.

*/

var obj = { prop: 42 };
Object.freeze(obj);

obj.prop = 33;
// Throws an error in strict mode

obj.prop; // expected output: 42


/*

SYNTAX
	- Object.freeze(obj)


PARAMETERS
	- obj
		=> The object to freeze.


RETURN VALUE
	- The object that was passed to the function.
*/





/*
7. Object.fromEntries() -----

The Object.fromEntries() method transforms a list of key-value pairs into an object.

*/

var entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

var obj = Object.fromEntries(entries);
obj; //{ foo: "bar", baz: 42 }


var map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
var obj = Object.fromEntries(map);
console.log(obj); // { foo: "bar", baz: 42 }

/*

SYNTAX
	- Object.fromEntries(iterable);


PARAMETERS
	- iterable
		=> An iterable such as Array or Map or other objects implementing the iterable protocol.


RETURN VALUE
	- A new object whose properties are given by the entries of the iterable.

*/





/*
8. Object.getOwnPropertyDescriptor() -----

The Object.getOwnPropertyDescriptor() method returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain). The object returned is mutable but mutating it has no effect on the original property's configuration.

*/

var object1 = {
  property1: 42
};

var descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');

descriptor1.configurable; // true
descriptor1.value; // 42


/*

SYNTAX
	- Object.getOwnPropertyDescriptor(obj, prop)


PARAMETERS
	- obj
		=> The object in which to look for the property.

	- prop
		=> The name or Symbol of the property whose description is to be retrieved.


RETURN VALUE
	- A property descriptor of the given property if it exists on the object, undefined otherwise.

*/





/*
9. Object.getOwnPropertyDescriptors() -----

The Object.getOwnPropertyDescriptors() method returns all own property descriptors of a given object.

*/

var object1 = { property1: 42 };

var descriptors1 = Object.getOwnPropertyDescriptors(object1);

console.log(descriptors1.property1.writable); // true
console.log(descriptors1.property1.value); // 42


/*

SYNTAX
	- Object.getOwnPropertyDescriptors(obj)


PARAMETERS
	- obj
		=> The object for which to get all own property descriptors.

RETURN VALUE
	- An object containing all own property descriptors of an object. Might be an empty object, if there are no properties.
*/


/*





10. Object.getOwnPropertyNames() -----

- The Object.getOwnPropertyNames() method returns an array of all properties (including non-enumerable properties except for those which use Symbol) found directly in a given object.

*/

var object1 = { a: 1,	b: 2, c: 3 };
Object.getOwnPropertyNames(object1); // ["a", "b", "c"]

// ..

Object.getOwnPropertyNames('foo');
// ["0", "1", "2", "length"]  (ES2015 code)

/*

SYNTAX
	- Object.getOwnPropertyNames(obj)


PARAMETERS
	- obj
		=> The object whose enumerable and non-enumerable properties are to be returned.

RETURN VALUE
	- An array of strings that corresponds to the properties found directly in the given object.
*/




/*
11. Object.getOwnPropertySymbols() -----

- The Object.getOwnPropertySymbols() method returns an array of all symbol properties found directly upon a given object.

*/

var object1 = {};
var a = Symbol('a');
var b = Symbol.for('b');

object1[a] = 'localSymbol';
object1[b] = 'globalSymbol';

var objectSymbols = Object.getOwnPropertySymbols(object1);

objectSymbols.length; // 2
objectSymbols; //[Symbol(a), Symbol(b)]

/*

SYNTAX
	- Object.getOwnPropertySymbols(obj)


PARAMETERS
	- obj
		=> The object whose symbol properties are to be returned.

RETURN VALUE
	- An array of all symbol properties found directly upon the given object.
*/






/*
11. Object.getPrototypeOf() -----

- The Object.getPrototypeOf() method returns the prototype (i.e. the value of the internal [[Prototype]] property) of the specified object.

*/

var prototype1 = {};
var object1 = Object.create(prototype1);

Object.getPrototypeOf(object1) === prototype1;
// expected output: true

// ..

Object.getPrototypeOf('foo'); // String.prototype  

// ..

Object.getPrototypeOf( Object.create({}) ); // {__proto__}
Object.getPrototypeOf( {} );
// {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}

/*

SYNTAX
	- Object.getPrototypeOf(obj)


PARAMETERS
	- obj
		=> The object whose prototype is to be returned.


RETURN VALUE
	- The prototype of the given object. If there are no inherited properties, null is returned.
*/





/*
12. Object.is() -----

- The Object.is() method determines whether two values are the same value.

*/

Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var foo = { a: 1 };
var bar = { a: 1 };
Object.is(foo, foo);         // true
Object.is(foo, bar);         // false

Object.is(null, null);       // true

// Special Cases
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true

/*

SYNTAX
	- Object.is(value1, value2);


PARAMETERS
	- value1
		=> The first value to compare.

	- value2
		=> The second value to compare.


RETURN VALUE
	- A Boolean indicating whether or not the two arguments are the same value.
*/






/*
13. Object.isExtensible() -----

- The Object.isExtensible() method determines if an object is extensible (whether it can have new properties added to it).

*/

// New objects are extensible.
var empty = {};
Object.isExtensible(empty); // === true

// ...but that can be changed.
Object.preventExtensions(empty);
Object.isExtensible(empty); // === false

// Sealed objects are by definition non-extensible.
var sealed = Object.seal({});
Object.isExtensible(sealed); // === false

// Frozen objects are also by definition non-extensible.
var frozen = Object.freeze({});
Object.isExtensible(frozen); // === false

Object.isExtensible(1); // false   (ES2015 code)

/*

SYNTAX
	- Object.isExtensible(obj)


PARAMETERS
	- obj
		=> The object which should be checked.

RETURN VALUE
	- A Boolean indicating whether or not the given object is extensible.
*/






/*
14. Object.isFrozen() -----

- The Object.isFrozen() determines if an object is frozen.

*/

var object1 = { property1: 42 };
Object.isFrozen(object1); // false

Object.freeze(object1);

Object.isFrozen(object1); // true


/*

SYNTAX
	- Object.isFrozen(obj)

PARAMETERS
	- obj
		=> The object which should be checked.

RETURN VALUE
	- A Boolean indicating whether or not the given object is frozen.
*/







/*
15. Object.seal() -----

- The Object.seal() method seals an object, preventing new properties from being added to it and marking all existing properties as non-configurable. Values of present properties can still be changed as long as they are writable.

*/

var object1 = { property1: 42 };

Object.getOwnPropertyDescriptor(object1, 'property1').configurable; // true

Object.seal(object1);
object1.property1 = 33;
object1.property1; // 33

delete object1.property1; // cannot delete when sealed
object1.property1; // 33

//..

Object.getOwnPropertyDescriptor(object1, 'property1').configurable; // false

/*

SYNTAX
	- Object.seal(obj)

PARAMETERS
	- obj
		=> The object which should be sealed.

RETURN VALUE
	- A Boolean indicating whether or not the given object is sealed.
*/





/*
16. Object.isSealed() -----

- The Object.isSealed() method determines if an object is sealed.

*/

var object1 = { property1: 42 };

Object.isSealed(object1); // false

Object.seal(object1);

Object.isSealed(object1); // true

// ..

var empty = {};
Object.isSealed(empty); // === false

Object.isSealed(1); // true (ES2015 code)

/*

SYNTAX
	- Object.isSealed(obj)

PARAMETERS
	- obj
		=> The object which should be checked.

RETURN VALUE
	- A Boolean indicating whether or not the given object is sealed.
*/





/*
17. Object.keys() -----

- The Object.keys() method returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.

*/

var object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

Object.keys(object1); // ["a", "b", "c"]

//..

var arr = ['a', 'b', 'c'];
Object.keys(arr); // ['0', '1', '2']

var obj = { 0: 'a', 1: 'b', 2: 'c' };
Object.keys(obj); // ['0', '1', '2']

var anObj = { 100: 'a', 2: 'b', 7: 'c' };
Object.keys(anObj); // ['2', '7', '100']

// In ES2015+
Object.keys('foo');  // ["0", "1", "2"]   

/*

SYNTAX
	- Object.keys(obj)

PARAMETERS
	- obj
		=> The object of which the enumerable's own properties are to be returned.

RETURN VALUE
	- An array of strings that represent all the enumerable properties of the given object.
*/





/*
18. Object.preventExtensions() -----

- The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).

*/

var object1 = {};

Object.preventExtensions(object1);

try {
  Object.defineProperty(object1, 'property1', {
    value: 42
  });
} catch (e) {
  console.log(e);
  // expected output: TypeError: Cannot define property property1, object is not extensible
}

//..

Object.preventExtensions(1); // 1 (ES2015 code)

/*

SYNTAX
	- Object.preventExtensions(obj)

PARAMETERS
	- obj
		=> The object which should be made non-extensible.

RETURN VALUE
	- The object being made non-extensible.
*/






/*
19. Object.prototype.hasOwnProperty() -----

- The hasOwnProperty() method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).

*/

var object1 = {};
object1.property1 = 42;

object1.hasOwnProperty('property1'); // true
object1.hasOwnProperty('toString'); // false
object1.hasOwnProperty('hasOwnProperty'); // false

//..

o = new Object();

o.propOne = null;
o.hasOwnProperty('propOne');   // returns true

o.propTwo = undefined;  
o.hasOwnProperty('propTwo');   // returns true
/*

SYNTAX
	- Object.hasOwnProperty(prop)

PARAMETERS
	- obj
		=> the String name or Symbol of the property to test.

RETURN VALUE
	- A Boolean indicating whether or not the object has the specified property as own property.
*/





/*
20. Object.prototype.isPrototypeOf() -----

- The isPrototypeOf() method checks if an object exists in another object's prototype chain.

*/

function objX() {}
function objY() {}

objX.prototype = Object.create(objY.prototype);

var objZ = new objX();

objX.prototype.isPrototypeOf(objZ); // true
objY.prototype.isPrototypeOf(objZ); // true

//..

function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

var baz = new Baz();
console.log(Foo)
console.log(Bar)
console.log(Baz)
console.log(baz)

Baz.prototype.isPrototypeOf(baz); // true
Bar.prototype.isPrototypeOf(baz); // true
Foo.prototype.isPrototypeOf(baz); // true
Object.prototype.isPrototypeOf(baz); // true

/*

SYNTAX
	- prototypeObj.isPrototypeOf(object)

PARAMETERS
	- object
		=> The object whose prototype chain will be searched.

RETURN VALUE
	- A Boolean indicating whether the calling object lies in the prototype chain of the specified object.

Errors thrown
	- TypeError
		=> A TypeError is thrown if prototypeObj is undefined or null.
*/





/*
20. Object.prototype.propertyIsEnumerable() -----

- The propertyIsEnumerable() method returns a Boolean indicating whether the specified property is enumerable and is the object's own property.

*/

const object1 = {};
const array1 = [];
object1.property1 = 42;
array1[0] = 42;

object1.propertyIsEnumerable('property1'); // true
array1.propertyIsEnumerable(0); // true
array1.propertyIsEnumerable('length'); // false
/*

SYNTAX
	- obj.propertyIsEnumerable(prop)

PARAMETERS
	- prop
		=> The name of the property to test.

RETURN VALUE
	- A Boolean indicating whether the specified property is enumerable and is the object's own property.

Errors thrown
	- TypeError
		=> A TypeError is thrown if prototypeObj is undefined or null.
*/


//object.create : newly-created object
//Object.create()
//Object.isSealed()
