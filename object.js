
// Constructor Pattern for Creating Objects
function Fruit (theColor, theSweetness, theFruitName, theNativeToLand) {

    this.color = theColor;
    this.sweetness = theSweetness;
    this.fruitName = theFruitName;
    this.nativeToLand = theNativeToLand;

    this.showName = function () {
        console.log("This is a " + this.fruitName);
    }

    this.nativeTo = function () {
    this.nativeToLand.forEach(function (eachCountry)  {
       console.log("Grown in:" + eachCountry);
        });
    }


}

var MangoFruit = new Fruit( "Yellow", 8, "Mango", ["India", "Central America", "West Africa"]);
var pineappleFruit = new Fruit ("Brown", 5, "Pineapple", ["United States"]);
