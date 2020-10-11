// Q.In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

(function() {
    console.log('a'); 
    setTimeout(function(){console.log('b')}, 1000); 
    setTimeout(function(){console.log('c')}, 0); 
    console.log('d');
})();

// output:
// 'a'
// 'd'
// 'c'
// 'b'


// Q. What will this code print?
for (let i = 0; i < 5; i++) {
    setTimeout(function() { console.log(i); }, i * 1000 );
}

// output:
// It will print 0 1 2 3 4, because we use let instead of var here. The variable i is only seen in the for loop’s block scope.




// Q3. what typeof a and typeof b in the following snippet:
function foo() {
    let a = b = 0;
    a++;
    return a;
}

foo();
typeof a; // => ???
typeof b; // => ???


// output:
// typeof a;        // => 'undefined'
// typeof window.b; // => 'number'

// Q3 is look like this code

    /* function foo() {                        */
    /*     let a;                              */
    /*     window.b = 0;                       */
    /*     a = window.b;                       */
    /*     a++;                                */
    /*     ...                                 */
    /*     ...                                 */



//Q. What will the following code output?
// Problem
(function() {
    var a = b = 5;
})();

console.log(b);

// Ans: Output is 5, because b declaration hoisted to top of the code block



// Q. What will be the output of the following code?
var m = 1;
if (function f() {}) {
    m += typeof f;
}

console.log(m);

// Ans. Output is "1undefined" If condition statement evaluate using eval return true because if statement code execute at run time.



// Q. What would following code return?

console.log(typeof typeof 1);

// Ans. Output : "String"
// typeof 1 will return "number"
// and typeof "number" will return string.



// Q. what's output ?

var a = [1, 2, 3];
a[10] = 99;
console.log(a[6]);
console.log(a[6]); // [1, 2, 3, empty × 7, 99]
a.map(ele => 77) // (11) [77, 77, 77, empty × 7, 77]

// output : undefinded
