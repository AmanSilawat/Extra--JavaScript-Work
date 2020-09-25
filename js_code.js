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