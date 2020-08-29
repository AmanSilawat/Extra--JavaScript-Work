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











//object.create : newly-created object
//Object.create()

