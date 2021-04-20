
/* Simple Object
{
  "color": "purple",
  "type": "minivan",
  "registration": new Date('2012-02-03'),
  "capacity": 7
}*/

// Creating an Array of Objects

let cars = [
  {
    "color": "purple",
    "type": "minivan",
    "registration": new Date('2017-01-03'),
    "capacity": 7
  },
  {
    "color": "red",
    "type": "RV",
    "registration": new Date('2010-03-03'),
    "capacity": 2
  },
  {
	"color": "Grey",
    "type": "SUV",
    "registration": new Date('2019-03-07'),
    "capacity": 7
  },
  {"color": "White",
    "type": "EV",
    "registration": new Date('2020-04-08'),
    "capacity": 5
  }
]

console.log(cars);

// Array.unshift
let car = {
  "color": "red",
  "type": "cabrio",
  "registration": new Date('2016-05-02'),
  "capacity": 2
}
cars.unshift(car);
console.log(cars);

//Array.push

let car = {
 "color": "red",
 "type": "cabrio",
 "registration": new Date('2016-05-02'),
 "capacity": 2
}
cars.push(car);
console.log(cars);

//Array.splice

let car = {
  "color": "red",
  "type": "cabrio",
  "registration": new Date('2016-05-02'),
  "capacity": 2
}
cars.splice(4, 0, car);
console.log(cars);


//Array.find

let car = cars.find(car => car.color === "red");
console.log(car);


//Array.filter

let redCars = cars.filter(car => car.color === "red");
console.log(redCars);

//Array.some and Array.every
// Array.includes similar to array.some but works only for primitive types
cars.some(car => car.color === "red" && car.type === "cabrio");  // -> true
cars.every(car => car.capacity >= 4);  // -> false

// SOrt based on property

let sortedCars = cars.sort((c1, c2) => (c1.capacity < c2.capacity) ? 1 : (c1.capacity > c2.capacity) ? -1 : 0);
console.log(sortedCars);

//create a new object from other object

let carsProperties = cars.map(car => {
 let properties = {
   "capacity": car.capacity,
   "size": "large"
 };
 if (car.capacity <= 5){
   properties['size'] = "medium";
 }
 if (car.capacity <= 3){
   properties['size'] = "small";
 }
 return properties;
});
console.log(carsProperties);