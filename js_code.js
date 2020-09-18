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