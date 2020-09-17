// Q.In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?

(function() {
    console.log('a'); 
    setTimeout(function(){console.log('b')}, 1000); 
    setTimeout(function(){console.log('c')}, 0); 
    console.log('d');
})();

output:
'a'
'd'
'c'
'b'