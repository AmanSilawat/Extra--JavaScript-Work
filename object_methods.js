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

3. Object.create() -----


*/


//object.create : newly-created object
//Object.create()

