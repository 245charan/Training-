//Lexical Scope or Static Scope -> write-time
// Example 1
function foo() {
	console.log( a ); // 2
}

function bar() {
	var a = 3;
	foo();
}

var a = 2;

bar();
// Dynamic Scope -> where they are called from, Run-time
// Lexical scope cares where a function was declared, but dynamic scope cares where a function was called from.

// Example 2
function grandfather() {
    var name = 'Fortune';
    // likes is not accessible here
    function parent() {
        // name is accessible here
        // likes is not accessible here
        function child() {
            // Innermost level of the scope chain
            // name is also accessible here
            var likes = 'Coding';
        }
    }
}

