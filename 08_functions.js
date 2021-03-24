function multiply(x, y) {
    return x * y;
 }

 function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  document.getElementById("demo").innerHTML = toCelsius(77);