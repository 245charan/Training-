function f(x) { 
  function g(y) { 
    return x * y; 
  } 
  return g; 
} 
 
h = f(3); 
console.log(h(4));