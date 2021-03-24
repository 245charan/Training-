// Class declarations

// class Rectangle{
//     constructor(height, width){
//         this.height=height;
//         this.width=width;
//     }
// }
// Class expressions

let Rectangle = class{
    constructor(height, width){
        this.height=height;
        this.width=width;
    }
    get area(){
        return this.clacArea();
   }
//    Method
   clacArea(){
       return this.height*this.width;
   }
};
console.log(Rectangle.name); //output: "Rectangle"
const square = new Rectangle(10,10);
console.log(square.area);//100

//named
// let Rectangle = class Rectangle2{
//     constructor(height,width){
//         this.height=height;
//         this.width=width;
//     }
// };
// console.log(Rectangle.name);// output : "Rectangle2"

// Generator Methods

// class Polygon{
//     constructor(...sides){
//         this.sides = sides;
//     }
//     // Method
//     *getSides()
//     {
//         for(const side of this.sides){
//             yield side;
//         }
//     }
// }
// const pentagon = new Polygon(1,2,3,4,5)

// console.log([...pentagon.getSides()]);//[1,2,3,4,5]


