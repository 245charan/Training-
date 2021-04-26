//Without closures:

adder = function (n) { 
    return { 
        function (m) { 
            return this.n + m 
        } 
    } 
} 
 
add3 = adder(3) 
eight = add3.fn(5) 

//With closures:

adder = function (n) { 
    return function (m) { 
        return n + m 
    } 
} 
 
add3 = adder(3) 
eight = add3(5)